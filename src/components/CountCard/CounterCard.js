import React, { Component } from 'react';
import { Card, Typography } from 'antd';
import GlobalStyles from '../../styles/global-styles';
import './CountCard.scss'

const { colors }  = GlobalStyles;

const { Title, Text } = Typography


class CountCard extends Component {
  
  getCardColor = (type) => {
    return {
      color: colors[type]
    }
  }

  getActiveStyle = (type) => {
    return {
      borderColor: `1px solid ${colors[type]}`
    }
  }


  render() { 
    if (!this.props.summary) {
      return '';
    }
    const { confirmed, deaths, recovered } = this.props.summary;
    return ( 
      <div className="count-card-container">
        <div className="count-card-section">
          <Card bordered={true} hoverable={true} className="confirmed select">
            <Text strong={true} type="secondary">TOTAL</Text>
            <Title level={2} style={this.getCardColor('confirmed')}>{confirmed.value.toLocaleString()}</Title>
          </Card>
          <Card bordered={true} hoverable={true} className="deaths">
            <Text strong={true} type="secondary">DEATHS</Text>
            <Title level={2}style={this.getCardColor('deaths')}>{deaths.value.toLocaleString()}</Title>
          </Card>
        </div>
        <div className="count-card-section">
          <Card bordered={true} hoverable={true} className="recovered">
            <Text strong={true} type="secondary">RECOVERED</Text>
            <Title level={2}  style={this.getCardColor('recovered')}>{recovered.value.toLocaleString()}</Title>
          </Card>
          <Card bordered={true} hoverable={true} className="sick">
            <Text strong={true} type="secondary">ACTIVE</Text>
            <Title level={2} style={this.getCardColor('sick')}>{(confirmed.value - (deaths.value + recovered.value)).toLocaleString()}</Title>
          </Card>
        </div>
      </div>
    );
  }
}
 
export default CountCard;
