import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const { state } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{backgroundColor: "#001529"}} />
        <img src='logo512.png' style={{ height: "75px", margin: "5px"}}/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'State',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'City',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Place',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: "#001529" , height: "80px", display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: 'white',
              backgroundColor: '#0d6efd',
              margin: '5px'
            }}
          />
              <span style={{ fontSize: "30px" , color: "white", marginRight: "10px" }}>  {state ? state?.name : ''} {state ? state?.flag : ''} </span>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
