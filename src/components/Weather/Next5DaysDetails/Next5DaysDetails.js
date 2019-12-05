import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { ListItem, Card, Text, Grid, Col, List, Row, Thumbnail } from 'native-base';
import Icon_S from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Styles from './Styles';

class Next5DaysDetails extends Component {
	render() {

		return (
			<View style={Styles.Next5DaysDataConatainer}>
				{/* description box Hourly Weather */}

				<ScrollView
					horizontal={true}
					contentContainerStyle={{ height: 200 }}
					style={{ scaleX: 1 }}
					showsHorizontalScrollIndicator={true}>
					{this.props.Next5DaysData.map((e, j) => (

						<Grid key={j} >
							<Col style={{ width: 500 }}>
								<Row>
									<Text style={ Styles.Next5DaysDataTextA }>
										{e.New5Date}
									</Text>
								</Row>
								{/* Sun Rise Time */}
								<Row>
									<Icon_S name="sunrise"
										size={20}
										color="#305977" />
									<Text style={ Styles.Next5DaysDataTextB }>
										{" " + 'Sun Rise : '}
									</Text>

									<Text style={ Styles.Next5DaysDataTextC }>
										{e.Sun_Rise + ' '}
									</Text>
								</Row>
								{/* Sun Set Time */}
								<Row>
									<Icon_S name="sunset"
										size={20}
										color="#305977" />

									<Text style={ Styles.Next5DaysDataTextB }>
										{" " + 'Sun Set : '}
									</Text>

									<Text style={ Styles.Next5DaysDataTextC }>
										{' ' + e.Sun_Set}
									</Text>
								</Row>
								{/* Temperature */}
								<Row>
									<Icon name="temperature-celsius"
										size={20}
										color="#305977" />

									<Text style={ Styles.Next5DaysDataTextB }>
										{" " + 'Temperature :  MAX(' + e.Temperature.Maximum.Value + " " + e.Temperature.Maximum.Unit + ')  '}
									</Text>

									<Text style={ Styles.Next5DaysDataTextB }> 
									{/* TextB */}
										{' MIN('+ e.Temperature.Minimum.Value + " " + e.Temperature.Minimum.Unit + ')  '}
									</Text>
								</Row>
								{/* Weather Status */}
						

								<Row>

									<Thumbnail style={{marginLeft: -6}} square small source={{ uri: `https://developer.accuweather.com/sites/default/files/${e.WeaTher_hack_img_icon}-s.png` }} />

									<Text style={ Styles.Next5DaysDataTextC }>
										{" " + e.Day.LongPhrase }
									</Text>

								</Row>
							</Col>

						</Grid>
					))}
				</ScrollView>

			</View>
		);
	}
}

const mapStateProps = state => {
	let Next5DaysData = state.WEATHER.Next5DaysData;
	return {
		Next5DaysData,
	};
};

export default connect(mapStateProps)(Next5DaysDetails);
