import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
	state = {  }
	render() { 
		if(!this.props.isLoading) {
				return '';
		}
		return ( 
			<div className="loader-wrapper">
				<div className="loader">
					<div className="item1"></div>
					<div className="item2"></div>
					<div className="item3"></div>
				</div>
			</div>
		);
	}
}
 
export default Loader;