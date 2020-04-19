import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import axios from 'axios';
import MainLayout from './scenes/MainLayout/MainLayout'
class App extends Component {

  constructor() {
    super();
    this.state = { summary: null, countries: [], isLoading: true };
  }

  componentDidMount() {
    axios
      .get('https://corona.lmao.ninja/v2/all')
      .then(res => {
        this.setState({ summary: res.data })
      });    
      
      axios
      .get('https://corona.lmao.ninja/v2/countries?sort=cases')
      .then(res => {
        this.setState({ countries: res.data, isLoading: false })
      });  
  }

  render() { 
    return (
      <MainLayout summary={this.state.summary} countries={this.state.countries} isLoading={this.state.isLoading}></MainLayout>
    );
  }
}

export default App;
