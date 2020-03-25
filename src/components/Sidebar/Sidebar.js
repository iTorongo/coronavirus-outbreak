import React, { Component } from 'react';
import { Layout, List, Avatar, Typography } from 'antd';
import './Sidebar.scss'
import CountCard from '../CountCard/CounterCard';
import it from '../../assets/flags/it.svg';

const { Sider } = Layout;
const { Title } = Typography;

class Sidebar extends Component {
  state = {  }
  render() {
    let countries = this.props.countries.map((item) => {
      // const flagUrl = `${process.env.PUBLIC_URL}/assets/flags/${item.iso2 ? item.iso2.toLowerCase() : ''}.svg`
      return <li className="ant-list-item">
                <div className="ant-list-item-meta">
                  <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar">
                      <img src={it} alt=""/>
                    </span>
                  </div>
                  <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">{item.countryRegion}</h4>
                  </div>
                </div>
                <div className="count">
                 {item.confirmed ? item.confirmed.toLocaleString() : ''}
                </div>
             </li>
    });
    return ( 
      <Sider width={300} breakpoint="lg"  collapsedWidth="0" theme="light" className="site-layout-background light">
        <CountCard summary={this.props.summary}></CountCard>
        <div className="ant-list ant-list-split country-list ">
          <ul className="ant-list-items">
            {countries}
          </ul>
        </div>

        {/* <List
         className="country-list"
          itemLayout="horizontal"
          dataSource={this.props.countries}
          renderItem={item => (
            <List.Item >
              <List.Item.Meta 
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.countryRegion}</a>}
              />
              <div className="count-badge">
                <Title level={4}>{item.confirmed.toLocaleString()}</Title>
              </div>
            </List.Item>
          )}
        /> */}
      </Sider>
    );
  }
}
 
export default Sidebar;
