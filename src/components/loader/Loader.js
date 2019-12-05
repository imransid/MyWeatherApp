import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Spinner } from 'native-base';

class Loader extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image source={require('../../assets/icn_weather.gif')} style={{ height: '100%', width: '100%' }} />
				{/* <Spinner color="green" /> */}
			</View>
		);
	}
}

export default Loader;
