import React from 'react';
import Layout from "../components/layout/Layout";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const userprofilepage = () => { 
  return (
    <Layout>
    <Popup trigger={<button>Trigger</button>} position="top left">
      {close => (
        <div>
          Content here
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  );
    </Layout>
  );
};

export default userprofilepage;