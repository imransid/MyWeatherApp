import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Label, Container, Content, Button, Card, Text } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './Styles';
import { Search_City, Search_City_Focus, Location_wise_api_update } from "../../../actions/Weather";

class CurrentWeatherStatus extends Component {
	constructor(props) {
		super(props)
		this.state = {
			serach_value_updater: ''
		}

	}

	search_wise_api_update = () => {
		this.state.serach_value_updater !== '' ? this.props.dispatch(Location_wise_api_update(this.state.serach_value_updater)) : null
	}

	search_city_now = (val) => {

		this.setState({
			serach_value_updater: val
		})

		this.props.dispatch(Search_City(val));

	}
	search_city_focus = () => {
		this.props.dispatch(Search_City_Focus());
	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.Serach_value_update !== this.state.serach_value_updater) {
			this.setState({
				serach_value_updater: nextProps.Serach_value_update
			})
		}
	}

	render() {
		return (
			<View style={styles.current_weather_container}>
				{/* Wather Status a nd Iamge Block */}
				<View style={styles.current_weather_contant}>
					<View style={styles.current_weather_status}>
						<Label style={styles.current_weather_status_text_A}>{this.props.Temperature}º</Label>
						<Label style={styles.current_weather_status_text_B}>{this.props.stateName}</Label>
						<Label style={styles.current_weather_status_text_C}>{this.props.WeatherText}</Label>
					</View>
					<View>
						<Image
							style={styles.current_weather_status_image}
							source={require('../../../assets/googleweather.gif')}
						/>
					</View>
				</View>

				{/* search Block */}
				<View>
					<Card style={styles.current_weather_serach_box}>
						<View style={styles.current_weather_serach_content}>
							<View>
								<TouchableOpacity style={styles.iconEdit}>
									<Icon name="search" size={35} color="#90A4AE" onPress={() => null} />
								</TouchableOpacity>
							</View>
							<View style={styles.current_weather_serach_textBox}>
								<TextInput
									style={styles.current_weather_serach_textBoxExta}
									placeholder={'Find a different city'}
									onFocus={(val) => this.search_city_focus()}
									onChangeText={(val) => this.search_city_now(val)}
									value={this.state.serach_value_updater}
								//onBlur={ (event) => this.search_city_focus() }	
								/>
							</View>
							<View>
								<Button style={styles.iconButton} onPress={() => this.search_wise_api_update()}>
									<Text>OK</Text>
								</Button>
							</View>
						</View>
					</Card>
				</View>
			</View>
		);
	}
}

const mapStateProps = (state) => {
	let WeatherText = state.WEATHER.WeatherText;
	let stateName = state.WEATHER.stateName;
	let Temperature = state.WEATHER.Temperature;
	let Serach_value_update = state.WEATHER.serach_value_update;

	return {
		WeatherText,
		stateName,
		Temperature,
		Serach_value_update
	};
};

export default connect(mapStateProps)(CurrentWeatherStatus);
