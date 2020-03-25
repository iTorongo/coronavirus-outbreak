import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Layout } from 'antd';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import Sidebar from './components/Sidebar/'

const { Content } = Layout;

function App() {

  const position = [23.6850,  90.3563]
  const center =[23.6850,  90.3563]

  const sidebarProperty = {
    visible: true,
    placement: 'left' 
  };

  return (
      <Layout>
        <Sidebar ></Sidebar>
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

export default App;
