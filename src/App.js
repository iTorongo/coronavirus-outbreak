import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Layout } from 'antd';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios';

const { Content } = Layout;

const position = [23.6850,  90.3563]
class App extends Component {

  constructor() {
    super();
    this.state = { summary: null, countries: [] };
  }

  componentDidMount() {
    axios
      .get('https://corona.lmao.ninja/all')
      .then(res => {
        this.setState({ summary: res.data })
      });    
      
      axios
      .get('https://corona.lmao.ninja/countries?sort=cases')
      .then(res => {
        this.setState({ countries: res.data })
      });  
  }


  render() { 
    console.log('render');
    let mapCircleMarkers = this.state.countries.map((item) => {
      let center = [item.countryInfo.lat, item.countryInfo.long];
      return <React.Fragment>
              <CircleMarker center={center} color="red" radius={item.cases > 10000 ? item.cases/1000 : item.cases > 1000 ? item.cases/200 : 5}   
               onMouseOver={(e) => e.target.openPopup()}
               onMouseOut={(e) =>e.target.closePopup()} >
                <Popup>
                  <h1>{item.country}</h1>
                  <label style={{color: 'red'}}>{item.cases.toLocaleString()}</label></Popup>
              </CircleMarker>
            </React.Fragment>
    });
    return (
      <Layout>
        <Sidebar summary={this.state.summary} countries={this.state.countries}></Sidebar>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: 280,
            }}>
            <Map center={position} zoom={3}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {mapCircleMarkers}
            </Map>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
