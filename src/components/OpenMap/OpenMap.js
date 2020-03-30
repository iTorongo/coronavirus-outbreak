import React, { Component } from 'react';
import { Typography, Tag } from 'antd';
import { Map, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import GlobalStyles from '../../styles/global-styles';
import './OpenMap.scss';

const { colors } = GlobalStyles;
const { Title, Text } = Typography;

const position = [23.6850,  90.3563]

class OpenMap extends Component {
	state = {  }
	render() { 
		const mapCircleMarkers = this.props.countries.map((item) => {
			let center = [item.countryInfo.lat, item.countryInfo.long];
			return <React.Fragment key={item.countryInfo._id ? item.countryInfo._id : Math.random(1000,2000)}>
								<CircleMarker center={center} color="red"
									radius={item.cases > 10000 ? item.cases/1000 : item.cases > 1000 ? item.cases/200 : 5}  
								 	onClick={ () => this.props.onSelectCountry(item.countryInfo.iso2)} 
									onMouseOver={(e) => e.target.openPopup()}
									onMouseOut={(e) => e.target.closePopup()}>
									<Popup>
										<Title level={3}>{item.country}</Title>
										<div className="popup-count">
											<Text>Confirmed: </Text><Tag color={colors.confirmed}>{item.cases.toLocaleString()}</Tag>
										</div>
										<div className="popup-count">
											<Text>Deaths: </Text><Tag color={colors.deaths}>{item.deaths.toLocaleString()}</Tag>
										</div>
										<div className="popup-count">
											<Text>Recovered: </Text><Tag color={colors.recovered}>{item.recovered.toLocaleString()}</Tag>
										</div>
										<div className="popup-count">
											<Text>Active: </Text><Tag  color={colors.sick}>{(item.cases - (item.deaths + item.recovered)).toLocaleString()}</Tag>
										</div>
									</Popup>
								</CircleMarker>
							</React.Fragment>
		});
	
		return ( 
			<Map center={position} zoom={3}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
				{mapCircleMarkers}
			</Map>
		);
	}
}
 

export default OpenMap;