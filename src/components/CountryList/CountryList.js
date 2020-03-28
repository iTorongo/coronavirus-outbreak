import React, { Component } from 'react';
import { Typography } from 'antd';
import './CountryList.scss'

const { Title } = Typography;

class CountryList extends Component {
  state = {  }
  render() {
    let countryList = this.props.countries.map((item) => {
      const flagUrl = require(`../../assets/flags/${item.countryInfo.iso2 ? item.countryInfo.iso2.toLowerCase() : 'unknown'}.svg`)
			return <li className="ant-list-item" onClick={ () => this.props.onSelectCountry(item.countryInfo.iso2)}
								key={item.countryInfo._id ? item.countryInfo._id : Math.random(1000,2000)}>
                <div className="ant-list-item-meta">
                  <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar">
                      <img src={flagUrl} alt=""/>
                    </span>
                  </div>
                  <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">{item.country}</h4>
                  </div>
                </div>
                <div className="count">
                  <Title level={4}>{item.cases ? item.cases.toLocaleString() : ''}</Title>
                </div>
             </li>
		});
		
    return (
      <div className="ant-list ant-list-split country-list ">
        <ul className="ant-list-items">
          {countryList}
        </ul>
      </div>
    );
	}
}
 
export default CountryList;
