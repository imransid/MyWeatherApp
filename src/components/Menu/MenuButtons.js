import React, {Component} from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

class DrawerButtons extends Component{

    render(){
        return(
            <Icon 
            name="align-justify" 
            size={30} 
            color="#305977" 
            onPress={() => null}/>
            
        )
    }

}


export default DrawerButtons;

