import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Layout } from 'antd';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios';

const { Content } = Layout;

const position = [23.6850,  90.3563]
const center =[23.6850,  90.3563]
class App extends Component {

  constructor() {
    super();
    this.state = { summary: null, countries: [] };
  }

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api')
      .then(res => {
        this.setState({ summary: res.data })
      });    
      
      axios
      .get('https://covid19.mathdro.id/api/confirmed')
      .then(res => {
        console.log(res)
        this.setState({ countries: res.data })
      });  
  }


  render() { 
    console.log('render')
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
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <Circle center={center} fillColor="blue" radius={20000} />
              <CircleMarker center={center} color="red" radius={5}>
                <Popup>Popup in CircleMarker</Popup>
              </CircleMarker>
            </Map>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
