import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useLocation } from 'react-router-dom';
import Drawer from './components/Drawer';
import Sidebar from './components/Sidebar';




const Details = () => {
  const { state } = useLocation();
  const [isComponentVisible, setComponentVisibility] = useState(false);
  const toggleComponentVisibility = () => {
    setComponentVisibility(!isComponentVisible);
  };


  return (
    <div style={{backgroundColor: "#001529"}} >
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{backgroundColor: "#001529"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{ display: "flex", justifyContent: "flex-end", backgroundColor: "#001529", marginLeft: "30px" }}>
              <span style={{ fontSize: "50px" }}>  {state ? state?.name : ''} {state ? state?.flag : ''} </span>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Details;