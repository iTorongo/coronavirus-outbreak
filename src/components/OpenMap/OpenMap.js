import React, { Component } from 'react';
import { Map, TileLayer, Popup, CircleMarker } from 'react-leaflet';

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
									onMouseOut={(e) =>e.target.closePopup()}>
									<Popup>
										<h1>{item.country}</h1>
										<label style={{color: 'red'}}>{item.cases.toLocaleString()}</label>
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