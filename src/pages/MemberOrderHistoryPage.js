import { useContext, useEffect, useState } from "react"
import { Container, Form, Table } from "react-bootstrap"
import { getAdminOrderAllAPI } from "../api/admin-api"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { order_type } from "../context/context-type"

import "./css/AdminDonationHistoryPage.css"

const MemberOrderHistoryPage = () => {
  const { token } = useContext(AuthContext)
  const [order, setOrder] = useState([order_type])

  useEffect(() => {
    getAdminOrderAllAPI(token)
      .then((resp) => setOrder(resp.data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.log(err))

    return () => {}
  }, [token])

  return (
    <Layout>
      <Container>
        <h1 className='text-center py-3 mt-5 fw-bold bg-success'>Meal History</h1>
        <div className='card bg-success'>
          <h5 className='fw-bold mx-3'>July 12, 2023 (Display Date)</h5>

          <Table striped className='text-white text-center history-table mb-5' style={{background:"#F1C40F"}}>
            <thead className='history-table text-dark'>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Package Name</th>
                <th>Deliver to</th>
                <th>Order On</th>
                <th>Prepare by</th>
                <th>Deliver by</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className='text-dark'>
              {order.map((x, i) => (
                <tr key={x.id}>
                  <td>{i + 1}</td>
                  <td>{x.orderBy.name}</td>
                  <td>{x.mealPackage.packageName}</td>
                  <td>{x.orderBy.address}</td>
                  <td>{new Date(x.orderOn).toLocaleString('en-GB', { timeZone: 'Asia/Singapore',hour12:true })}</td>
                  <td>{x.preparedBy?.name}</td>
                  <td>{x.deliveredBy?.name}</td>
                  <td>{x.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

     
    </Layout>
  )
}

export default MemberOrderHistoryPage
