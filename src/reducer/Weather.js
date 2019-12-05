import actionType from '../constant/index';
import moment from 'moment';
import CityName from '../assets/AppData/All_City_Name';

const initialState = {
	api_id: '',
	loader: '',
	stateName: '',
	country: '',
	today: '',
	Humidity: '',
	serach_city_focus: false,
	serach_city_result: [],
	serach_value_update: ''
};

const TodayDateAndTime = () => {
	let date = new Date().getDate();
	let month = new Date().getMonth() + 1;
	let year = new Date().getFullYear();
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let day = days[new Date().getDay()];
	const Today = day + ', ' + date + '/' + month + '/' + year;

	return Today;
};

const Time_Hour_Convert = (data) => {

	let result = moment(data).format('HH');

	return result
}

const Time_Twelve_Clock_Convert = (data) => {

	let result = moment(data).format('A');

	return result
}

const Image_ReFactor = (data) => {

	let result = data.toString();

	if (result.length == 1) {
		result = '0' + result;
	}

	return result

}

const Date_Convert = (data) => {

	let result = moment(data).format("dddd DD MMMM YYYY");

	return result
}


const Hourly_Data_Gen = (data) => {

	let result = data.map(function (el) {
		var o = Object.assign({}, el);
		o.Hour = Time_Hour_Convert(el.DateTime);
		o.T_Hour_C = Time_Twelve_Clock_Convert(el.DateTime);
		o.WeaTher_hack_icon = Image_ReFactor(el.WeatherIcon);
		return o;
	})

	return result
}

const sun_Rise_Set_Convert = (data) => {
	let result = moment(data).format("h:mm:ss a");

	return result
}

const Next_5Days_Data_Gen = (data) => {


	let ColletData = data.DailyForecasts

	let result = ColletData.map(function (el) {
		var o = Object.assign({}, el);
		o.New5Date = Date_Convert(el.Date);
		o.Sun_Rise = sun_Rise_Set_Convert(el.Sun.Rise);
		o.Sun_Set = sun_Rise_Set_Convert(el.Sun.Set);
		o.WeaTher_hack_img_icon = Image_ReFactor(el.Day.Icon);
		return o;
	})

	return result

}


export default (state = initialState, action) => {
	switch (action.type) {
		case actionType.ALL_DATA_LOADED_FROM_API:
			return ({
				...state,
				today: TodayDateAndTime(),
				stateName: action.stateName,
				country: action.country,
				Humidity: action.Humidity,
				windSpeed: action.windSpeed,
				Pressure: action.Pressure,
				Temperature: action.Temperature,
				WeatherText: action.WeatherText,
				WeatherIcon: action.WeatherIcon,
				HourlyData: Hourly_Data_Gen(action.HourlyData),
				Next5DaysData: Next_5Days_Data_Gen(action.Next5DaysData),
				loader: action.Loader
			})
		case actionType.SEARCH_CITY_FOCUS:
			return ({
				...state,
				serach_city_focus: !state.serach_city_focus
			})
		case actionType.SEARCH_CITY:
			return ({
				...state,
				serach_city_result: searchFuncResult(action.val)
			})
		case actionType.SEARCH_VALUE_UPDATE:
			return ({
				...state,
				serach_value_update: action.val,
				serach_city_focus: !state.serach_city_focus
			})
		case actionType.SEARCH_LOCATION_WISE:
			return ({
				loader: true,
				...state,
			})
		default:
			return state;
	}
};


const searchFuncResult = (data) => {
	let newdata = [];
	for (let [key, value] of Object.entries(CityName)) {
		if (value.toLowerCase().match(data.toLowerCase())) {
			newdata.push(key)
		}
	}
	return newdata

}