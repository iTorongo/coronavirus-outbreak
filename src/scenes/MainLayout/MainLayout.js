import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import Sidebar from '../../components/Sidebar/Sidebar'
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import Home from '../Home/Home';

const position = [23.6850,  90.3563]

class MainLayout extends Component {

		state = { isVisiblecountryDetails: false, countryDetails: null };

		showCountryDetails = () => {
			this.setState({
				isVisiblecountryDetails: true,
			});
		};

		onCloseCountryDetails = () => {
			this.setState({
				isVisiblecountryDetails: false,
			});
		};

		handleCountrySelect = (countryIso2) => {
			axios
				.get(`https://corona.lmao.ninja/countries/${countryIso2}`)
				.then(res => {
					this.setState({ countryDetails: res.data })
				}); 
				this.showCountryDetails();
		};

    render() { 
      return (       
        <Layout>
            <Sidebar summary={this.props.summary} countries={this.props.countries} onSelectCountry={this.handleCountrySelect}></Sidebar>
            <Home position={position} countries={this.props.countries}  onSelectCountry={this.handleCountrySelect}></Home>
						<CountryDetails visible={this.state.isVisiblecountryDetails} onClose={this.onCloseCountryDetails} details={this.state.countryDetails}></CountryDetails>
        </Layout>
      );
    }
}
 
export default MainLayout;