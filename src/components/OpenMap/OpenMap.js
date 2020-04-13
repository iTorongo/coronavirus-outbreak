import React, { Component } from 'react';
import { Typography, Tag } from 'antd';
import { Map, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import GlobalStyles from '../../styles/global-styles';
import './OpenMap.scss';

const { colors } = GlobalStyles;
const { Title, Text } = Typography;

const centered = [15.1794, 39.7823]

class OpenMap extends Component {
	state = {  }

	getDynamicRadius(cases) {
		return Math.round(Math.log( cases ) / Math.log( 2 )) * ((cases > 100000) ? 2 : 1.2);
	}
	render() { 
		const mapCircleMarkers = this.props.countries.map((item) => {
			let center = [item.countryInfo.lat, item.countryInfo.long];
			return  <React.Fragment key={item.countryInfo._id ? item.countryInfo._id : Math.random(1000,2000)}>
								<CircleMarker center={center} color="red"
									radius={this.getDynamicRadius(item.cases)}  
								 	onClick={ () => this.props.onSelectCountry(item.countryInfo.iso2)} 
									onMouseOver={(e) => e.target.openPopup()}
									onMouseOut={(e) => e.target.closePopup()}>
									<Popup>
										<Title level={3}>{item.country}</Title>
										<div className="popup-count">
											<Text strong>Confirmed: </Text><Text strong style={{color: colors.confirmed}}>{item.cases ? item.cases.toLocaleString() : ''}</Text>
										</div>
										<div className="popup-count">
											<Text strong>Deaths: </Text><Text strong style={{color:colors.deaths}}>{item.deaths ? item.deaths.toLocaleString() : ''}</Text>
										</div>
										<div className="popup-count">
											<Text strong>Recovered: </Text><Text strong style={{color:colors.recovered}}>{item.recovered ? item.recovered.toLocaleString() : ''}</Text>
										</div>
										<div className="popup-count">
											<Text strong>Active: </Text><Text strong style={{color:colors.sick}}>{(item.cases - (item.deaths + item.recovered)).toLocaleString()}</Text>
										</div>
									</Popup>
								</CircleMarker>
							</React.Fragment>
		});
	
		return ( 
			<Map center={centered} zoom={3} minZoom={2} maxZoom={6}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
				{mapCircleMarkers}
			</Map>
		);
	}
}
 

export default OpenMap;