import React, {Component} from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import {Button, Card, Text} from 'native-base';
import Icon_S from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';


class CurrentWeatherDetails extends Component {
    render(){
        return(


                        <View style={ styles.defaultWeactherConatainer }>
                                        {/* description box */}
                            <View style={ styles.defaultWeactherHeader }>
                                <Text style={ styles.defaultWeactherText_1 } >Current Weather</Text>
                            </View>
                            
                            <View style={ styles.defaultWeactherContant }>
                                <View  style={ styles.defaultWeatherDescriptionA }>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Text style={ styles.defaultWeactherText_2 }>
                                                {
                                                    this.props.windSpeed
                                                }
                                            </Text>
                                        </View>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Icon_S 
                                                name="weather-windy" 
                                                size={20} 
                                                color="#305977" />
                                        
                                        </View>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Text style={ styles.defaultWeactherText_3 }>
                                                Wind Flow
                                            </Text>
                                        </View>
                                </View>
                                <View  style={ styles.defaultWeatherDescriptionB }>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Text style={ styles.defaultWeactherText_2 }>
                                                {
                                                    this.props.Humidity
                                                }
                                            </Text>
                                        </View>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Icon_S 
                                                name="water-percent" 
                                                size={20} 
                                                color="#305977" />
                                        
                                        </View>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Text style={ styles.defaultWeactherText_3 }>
                                                Humidity
                                            </Text>
                                        </View>
                                </View>
                                <View  style={ styles.defaultWeatherDescriptionC }>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Text style={ styles.defaultWeactherText_2 }>
                                            {
                                                    this.props.Pressure
                                                }
                                            </Text>
                                        </View>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Icon_S 
                                                name="waves" 
                                                size={20} 
                                                color="#305977" />
                                        
                                        </View>
                                        <View style={ styles.defaultWeatherContent }>
                                            <Text style={ styles.defaultWeactherText_3 }>
                                                Pressure
                                            </Text>
                                        </View>
                                </View>

                            </View>
                        
                        </View>

               

        )
    }
}


const mapStateProps = (state) => {
	let Pressure = state.WEATHER.Pressure;
	let windSpeed = state.WEATHER.windSpeed;
	let Humidity = state.WEATHER.Humidity;
	return {
		Pressure,
		windSpeed,
		Humidity
	};
};

export default connect(mapStateProps)(CurrentWeatherDetails);