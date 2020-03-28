import React, { Component } from 'react';
import { Layout } from 'antd';
import OpenMap from '../../components/OpenMap/OpenMap';

const { Content } = Layout;
class Home extends Component {
    state = {  }
    render() { 
        return (
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: 280,
            }}>
						<OpenMap countries={this.props.countries}  onSelectCountry={this.props.onSelectCountry}></OpenMap>
          </Content>
        </Layout>
        );
    }
}
 
export default Home;