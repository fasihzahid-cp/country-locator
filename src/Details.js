import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';




const Details = () => {
  const { state } = useLocation();
  const [isComponentVisible, setComponentVisibility] = useState(false);
  const toggleComponentVisibility = () => {
    setComponentVisibility(!isComponentVisible);
  };


  return (
    <div style={{backgroundColor: "#001529"}} >
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Details;