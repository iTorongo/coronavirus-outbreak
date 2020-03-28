import React, { Component } from 'react';
import { Drawer,Row, Col } from 'antd';

class CountryDetails extends Component {
  state = {  }
  render() { 
		return ( 
			<Drawer
				width={640}
				placement="right"
				closable={true}
				onClose={this.props.onClose}
				visible={this.props.visible}>
				<Row>
						<Col span={12}>
						dasdad
						</Col>
						<Col span={12}>
								dasdad
						</Col>
				</Row>
			</Drawer>
  	);
  }
}
 
export default CountryDetails;