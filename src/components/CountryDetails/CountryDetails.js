import React, { Component } from 'react';
import { Drawer,Row, Col, Statistic, Card, PageHeader } from 'antd';
import GlobalStyles from '../../styles/global-styles';
import './CountryDetails.scss';

const { colors } = GlobalStyles;

class CountryDetails extends Component {
  state = {  }
  render() { 
		if (!this.props.details) {
			return '';
		}
		const { 
			country, 
			countryInfo,
			cases,
			todayCases,
			deaths,
			todayDeaths,
			recovered,
			active,
			updated } = this.props.details;

		const flagUrl = require(`../../assets/flags/${countryInfo.iso2 ? countryInfo.iso2.toLowerCase() : 'unknown'}.svg`)

		return ( 
			<Drawer
				width={640}
				placement="right"
				closable={true}
				onClose={this.props.onClose}
				visible={this.props.visible}>
				<PageHeader
					title={country}
					className="country-details-header"
					subTitle={ 'Last Update: ' + new Date(updated).toLocaleDateString()}
					avatar={{ src: flagUrl }}>
				</PageHeader>
				<Row gutter={[8, 16]}>
					<Col span={24}>
						<Card title="Todays Update">
							<Row gutter={[8, 16]}>
								<Col span={12}>
									<Statistic
										title="Confirmed"
										value={todayCases}
										valueStyle={{ color: colors.confirmed }}	/>		
								</Col>
								<Col span={12}>			
									<Statistic
										title="Deaths"
										value={todayDeaths}
										valueStyle={{ color: colors.deaths }}	/>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row gutter={[8, 16]}>
					<Col span={12}>
						<Card>
							<Statistic
								title="Total Cases"
								value={cases}
								valueStyle={{ color: colors.confirmed }}
							/>
						</Card>
					</Col>
					<Col span={12}>
						<Card>
							<Statistic
								title="Deaths"
								value={deaths}
								valueStyle={{ color: colors.deaths }}
							/>
						</Card>
					</Col>
				</Row>
				<Row gutter={[8, 16]}>
					<Col span={12}>
						<Card>
							<Statistic
								title="Recovered"
								value={recovered}
								valueStyle={{ color: colors.recovered }}
							/>
						</Card>
					</Col>
					<Col span={12}>
						<Card>
							<Statistic
								title="Active Cases"
								value={active}
								valueStyle={{ color: colors.sick }}
							/>
						</Card>
					</Col>
				</Row>
			</Drawer>
  	);
  }
}
 
export default CountryDetails;