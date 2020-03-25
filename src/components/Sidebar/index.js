import React, { Component } from 'react';
import { Layout } from 'antd';
import CountCard from '../CountCard';

const { Sider } = Layout;


class Sidebar extends Component {
  state = {  }

  render() {
    return ( 
      <Sider width={300} breakpoint="lg"  collapsedWidth="0" theme="light" className="site-layout-background light">
        <CountCard></CountCard>

      </Sider>
    );
  }
}
 
export default Sidebar;
