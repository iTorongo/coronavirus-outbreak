import React, { Component } from 'react';
import { Layout } from 'antd';
import CountCard from '../CountCard/CounterCard';
import CountryList from '../CountryList/CountryList';

const { Sider } = Layout;

class Sidebar extends Component {
  state = {  }
  render() {
    return ( 
      <Sider width={300} breakpoint="lg"  collapsedWidth="0" theme="light" className="site-layout-background light">
        <CountCard summary={this.props.summary}></CountCard>
        <CountryList countries={this.props.countries} onSelectCountry={this.props.onSelectCountry}></CountryList>
      </Sider>
    );
  }
}
 
export default Sidebar;
