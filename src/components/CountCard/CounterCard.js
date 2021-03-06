import React, { Component } from 'react';
import { Card, Typography } from 'antd';
import GlobalStyles from '../../styles/global-styles';
import './CountCard.scss';
import  worldometers from '../../assets/worldometer.jpg';

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
    const { cases, deaths, recovered } = this.props.summary;
    return ( 
      <div className="count-card-container">
        <div className="count-card-section">
          <Card bordered={true} hoverable={true} className="confirmed select">
            <Text strong={true} type="secondary">TOTAL</Text>
            <Title level={3} style={this.getCardColor('confirmed')}>{cases.toLocaleString()}</Title>
          </Card>
          <Card bordered={true} hoverable={true} className="deaths">
            <Text strong={true} type="secondary">DEATHS</Text>
            <Title level={3}style={this.getCardColor('deaths')}>{deaths.toLocaleString()}</Title>
          </Card>
        </div>
        <div className="count-card-section">
          <Card bordered={true} hoverable={true} className="recovered">
            <Text strong={true} type="secondary">RECOVERED</Text>
            <Title level={3}  style={this.getCardColor('recovered')}>{recovered.toLocaleString()}</Title>
          </Card>
          <Card bordered={true} hoverable={true} className="sick">
            <Text strong={true} type="secondary">ACTIVE</Text>
            <Title level={3} style={this.getCardColor('sick')}>{(cases - (deaths + recovered)).toLocaleString()}</Title>
          </Card>
        </div>
        <div className="data-source">
          <span>Source: </span> <a target="_blank" rel="noopener noreferer"  href="https://www.worldometers.info/coronavirus/"> <img src={worldometers} alt="worldometers"/></a>
        </div>
      </div>
    );
  }
}
 
export default CountCard;
