import React, { Component } from 'react';
import { Card, Typography } from 'antd';
import GlobalStyles from '../../styles/global-styles';

import './Style.scss'

const { Title, Text } = Typography;

const { colors }  = GlobalStyles;

const gridStyle = {
    width: '45%',
    textAlign: 'center',
    cursor: 'pointer',
    margin: 5,
};


class CountCard extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="count-card-container">
        <div className="count-card-section">
          <Card bordered={true} hoverable={true} style={{borderRadius: 10}}>
            <label>TOTAL</label>
            <h3 className="ant-typography" style={{color: colors.total}} >2000000</h3>
          </Card>
          <Card bordered={true} hoverable={true} style={{borderRadius: 10}}>
            <label>DEATH</label>
            <h3 className="ant-typography" style={{color: colors.death}}>20012</h3>
          </Card>
        </div>
        <div className="count-card-section">
          <Card bordered={true} hoverable={true} style={{borderRadius: 10}}>
            <label >RECOVERED</label>
            <h3  className="ant-typography" style={{color: colors.recovered}}>2000000</h3>
          </Card>
          <Card bordered={true} hoverable={true} style={{borderRadius: 10}}>
            <label >ACTIVE</label>
            <h3  className="ant-typography" style={{color: colors.active}}>20012</h3>
          </Card>
        </div>
      </div>
    );
  }
}
 
export default CountCard;