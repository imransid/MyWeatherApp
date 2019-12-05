import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    defaultWeactherConatainer : {
        flexDirection: "column", 
        height: 200
    },
    defaultWeatherDescriptionA : {
        width: '32%', 
        flexDirection: 'column', 
        alignSelf: 'center', 
        backgroundColor: '#FFF', 
        marginLeft: 1, 
        marginRight: 1, 
        height: 100, 
        paddingTop: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    defaultWeatherDescriptionB : {
        width: '33%', 
        flexDirection: 'column', 
        alignSelf: 'center', 
        backgroundColor: '#FFF', 
        marginLeft: 1, 
        marginRight: 1, 
        height: 100, 
        paddingTop: 10
    },
    defaultWeatherDescriptionC : {
        width: '32%', 
        flexDirection: 'column', 
        alignSelf: 'center', 
        backgroundColor: '#FFF', 
        marginLeft: 1, 
        marginRight: 1, 
        height: 100, 
        paddingTop: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    defaultWeatherContent : {
        width: '100%', 
        alignItems: 'center'
    },
    defaultWeactherText_1 : {
        color: '#37474F', 
        fontSize: 28, 
        fontWeight: 'bold'
    },
    defaultWeactherText_2 : {
        color: '#37474F', 
        fontSize: 27, 
        fontWeight: 'bold'
    },
    defaultWeactherText_3 : {
        color: '#37474F', 
        fontSize: 13, 
        fontWeight: 'bold'
    },
    defaultWeactherHeader : {
        width: '100%', 
        height: 32, 
        marginTop : 10, 
        alignItems: 'center'
    },
    defaultWeactherContant: {
        width: '100%', 
        height: '70%', 
        flexDirection: 'row'
    }

});

export default styles;
