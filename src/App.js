import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import axios from 'axios';
import MainLayout from './scenes/MainLayout/MainLayout'
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
    return (
      <MainLayout summary={this.state.summary} countries={this.state.countries}></MainLayout>
    );
  }
}

export default App;
