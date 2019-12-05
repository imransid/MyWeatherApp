import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	search_city_content:{
		paddingLeft: 25, 
		paddingRight: 25, 
		height: 300
	},
	tab_bar_content: {
		flexDirection: 'row', 
		height: 40, 
		alignSelf: 'center', 
		marginTop: 30
	},
	Loaded_data_content: {
		flexDirection: 'column', 
		flex: 1, 
		backgroundColor: '#ECEFF1'
	},
	Loaded_scrollview_content:{
		backgroundColor: '#ECEFF1', 
		paddingBottom: 30
	},
	scroll_view_content:{
		width: '100%', 
		height: 300
	},
	search_item: {
		fontSize: 15, 
		color: '#2E5977'
	},
	Weather_Container_exta: {
		flexDirection: 'column',
		height: 350,
		paddingLeft: 25,
		paddingRight: 25
	},
	Weather_Container: {
		flexDirection: 'column',
		height: 300,
		paddingLeft: 25,
		paddingRight: 25
	},
	activeButtonA: {
		backgroundColor: '#207DE5',
		width: 70,
		height: 27,
		alignItems: 'center',
		borderRadius: 15,
		paddingTop: 3,
		marginRight: 5
	},
	DeactiveButtonA: {
		backgroundColor: '#ECEFF1',
		width: 70,
		height: 27,
		alignItems: 'center',
		borderRadius: 15,
		paddingTop: 1,
		borderColor: '#A9A9A9',
		borderWidth: 2,
		marginRight: 5
	},
	activeButtonB: {
		backgroundColor: '#207DE5',
		width: 75,
		height: 27,
		alignItems: 'center',
		borderRadius: 15,
		paddingTop: 3,
		marginRight: 5
	},
	DeactiveButtonB: {
		backgroundColor: '#ECEFF1',
		width: 75,
		height: 27,
		alignItems: 'center',
		borderRadius: 15,
		paddingTop: 1,
		borderColor: '#A9A9A9',
		borderWidth: 2,
		marginRight: 5
	},
	activeButtonC: {
		backgroundColor: '#207DE5',
		width: 115,
		height: 27,
		alignItems: 'center',
		borderRadius: 15,
		paddingTop: 3
	},
	DeactiveButtonC: {
		backgroundColor: '#ECEFF1',
		width: 115,
		height: 27,
		alignItems: 'center',
		borderRadius: 15,
		paddingTop: 1,
		borderColor: '#A9A9A9',
		borderWidth: 2
	},
	DeactiveButtonText: {
		color: '#45566B',
		fontWeight: 'bold'
	},
	activeButtonText: {
		color: '#FFF',
		fontWeight: 'bold'
	}
});

export default styles;
