import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Thumbnail } from 'native-base';
import MENU from '../Menu/MenuButtons';


// example user Pic Showing from Google
const url = 'https://mpng.pngfly.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg';

class HeaderMenu extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{ height: 60, width: '100%', backgroundColor: '#ECEFF1', flexDirection: 'row' }}>
                <View style={{ width: '20%', alignItems: 'center', paddingTop: 15 }}>
                    <MENU navigation={this.props.props.navigation} />
                </View>
                <View style={{ width: '60%', alignItems: 'center' }}>
                    <Text style={{ color: '#37474F', fontSize: 25 , fontWeight: 'bold', paddingTop: 10 }} >Weather App</Text>
                </View>
                <View style={{ width: '20%', alignItems: 'center', paddingTop: 8 }}>
                    <Thumbnail style={{ width: 43, height: 43, borderColor: '#ECEFF1', borderWidth: 2 }} source={{ uri: url }} />
                </View>
            </View>
        )
    }
}


export default HeaderMenu