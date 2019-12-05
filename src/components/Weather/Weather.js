import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Label, Container, Content, Button, Card, Text, Grid, Col, List, ListItem } from 'native-base';
import Header from '../../components/header/HeaderMenu';
import styles from './Styles';
import CURRENT_WEATHER_DETAILS from './CurrentWeatherDetails/CurrentWeatherDetails';
import CURRENT_WEATHER_STATUS from './CurrentWeatherStatus/CurrentWeatherStatus';
import HOURLY_WEATHER_DETAILS from './HourlyWeatherDetails/HourlyWeatherDetails';
import NEXT_5_DAYS_Details from './Next5DaysDetails/Next5DaysDetails';
import LOADER from '../loader/Loader';
import { initial_app_load, search_itam_value_update } from '../../actions/Weather';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Hourly_Button: false,
			Today_Button: true,
			Next_5_Days: false,
			Loader: true,
			serach_city_focus: false,
			serach_city_result: []
		};
	}

	componentDidMount() {
		this.props.dispatch(initial_app_load());
	}

	serach_value_update_func = (item) => {

		this.props.dispatch(search_itam_value_update(item));
	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.serach_city_result.length !== 0) {
			this.setState({
				serach_city_result: nextProps.serach_city_result
			})
		}

		if (nextProps.Serach_city_focus !== this.state.serach_city_focus) {
			this.setState({
				serach_city_focus: nextProps.Serach_city_focus
			})
		}

		if (nextProps.loader == false) {
			this.setState({
				Loader: false,
			});
		}
	}

	_stateChange = (val) => {
		if (val == 'Hourly_Button') {
			this.setState({
				Hourly_Button: true,
				Today_Button: false,
				Next_5_Days: false
			});
		} else if (val == 'Today_Button') {
			this.setState({
				Today_Button: true,
				Hourly_Button: false,
				Next_5_Days: false
			});
		} else {
			this.setState({
				Next_5_Days: true,
				Hourly_Button: false,
				Today_Button: false
			});
		}
	};

	WeatherDetails = () => {

		if (this.state.Hourly_Button == true) {
			return <HOURLY_WEATHER_DETAILS />;
		} else if (this.state.Today_Button == true) {
			return <CURRENT_WEATHER_DETAILS />;
		} else if (this.state.Next_5_Days == true) {
			return <NEXT_5_DAYS_Details />;
		}

	};

	Search_Focus = () => {
		// when search is focused 
		return (

			this.state.serach_city_result.length != 0 ?
				<View style={styles.search_city_content}>
					<Card>
						<ScrollView>
							<FlatList
								data={this.state.serach_city_result}
								renderItem={({ item }) => (
									// console.log(item)
									<View>
										<TouchableOpacity onPress={() => this.serach_value_update_func(item)}>
											<Label style={styles.search_item}>{item}</Label>
										</TouchableOpacity>
									</View>
								)
								}
								keyExtractor={item => item}

							/>
						</ScrollView>
					</Card>
				</View> : null




		)
	}

	Without_Search_Focus = () => {
		{/* all details block */ }
		return (
			<View
				style={
					this.state.Next_5_Days == true ? styles.Weather_Container_exta : styles.Weather_Container
				}
			>
				{/* Tab Menu bar  */}


				<View style={styles.tab_bar_content}>
					<View>
						<TouchableOpacity
							style={
								this.state.Today_Button == false ? (
									styles.DeactiveButtonB
								) : (
										styles.activeButtonB
									)
							}
							onPress={() => this._stateChange('Today_Button')}
						>
							<Text
								style={
									this.state.Today_Button == false ? (
										styles.DeactiveButtonText
									) : (
											styles.activeButtonText
										)
								}
							>
								Today
					</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity
							style={
								this.state.Hourly_Button == false ? (
									styles.DeactiveButtonA
								) : (
										styles.activeButtonA
									)
							}
							onPress={() => this._stateChange('Hourly_Button')}
						>
							<Text
								style={
									this.state.Hourly_Button == false ? (
										styles.DeactiveButtonText
									) : (
											styles.activeButtonText
										)
								}
							>
								Hourly
					</Text>
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity
							style={
								this.state.Next_5_Days == false ? styles.DeactiveButtonC : styles.activeButtonC
							}
							onPress={() => this._stateChange('Last_5_Days')}
						>
							<Text
								style={
									this.state.Next_5_Days == false ? (
										styles.DeactiveButtonText
									) : (
											styles.activeButtonText
										)
								}
							>
								Next 5 day's
					</Text>
						</TouchableOpacity>
					</View>
				</View>

				{this.WeatherDetails()}
			</View>
		)
	}




	LoaderAllData = () => {
		return (
			<View style={styles.Loaded_data_content}>
				<Header props={this.props} />
				<ScrollView style={styles.Loaded_scrollview_content}>
					{/* Current Weather Status And Iamge Block */}
					<View style={styles.scroll_view_content}>
						<CURRENT_WEATHER_STATUS />
					</View>

					{
						this.state.serach_city_focus == false ? this.Without_Search_Focus() : this.Search_Focus()
					}

				</ScrollView>
			</View>
		);
	};

	render() {
		return this.state.Loader == true ? <LOADER /> : this.LoaderAllData();
	}
}

const mapStateProps = (state) => {
	let loader = state.WEATHER.loader;
	let Serach_city_focus = state.WEATHER.serach_city_focus;
	let serach_city_result = state.WEATHER.serach_city_result;
	return {
		loader,
		Serach_city_focus,
		serach_city_result
	};
};

export default connect(mapStateProps)(Weather);
