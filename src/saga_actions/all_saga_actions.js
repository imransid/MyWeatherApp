import { takeEvery, select, call, put } from 'redux-saga/effects';
import { AsyncStorage, ToastAndroid } from 'react-native';
import actionType from '../constant/index';
//'9axAC5hA1iZZ4ua0YHCbhQARs3WMH6Di' //emailofimran1992@gmail.com for key

// 'jcAnwJKIpxCWplrUpbPe8L1OGFrbeluG' imrankhanopu1992@gmail.com for key

const key = '9axAC5hA1iZZ4ua0YHCbhQARs3WMH6Di';

// To collect Location Key We Call _requestToLocationApi method. Location key needed to call other all api.
export const _requestToLocationApi = () =>
	fetch(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress.json?apikey=${key}`);

//daily Status
export const _requestToWeatherApi = (location) =>
	fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${location}.json?apikey=${key}`);

// Cureent weather data
export const _requestToCurrentWeatherApi = (location) =>
	fetch(`http://dataservice.accuweather.com/currentconditions/v1/${location}?language=en&details=true&apikey=${key}`);

// Last 12 Hour Data
export const _requestToLast12HourWeatherApi = (location) =>
	fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${location}?apikey=${key}`);

// Last 5 Days Weather Status
export const _requestTo5DayApi = (location) =>
	fetch(
		`http://dataservice.accuweather.com//forecasts/v1/daily/5day/${location}.json?language=en&details=true&metric=true&apikey=${key}`
	);

export const _requestToSaerchLocationWise = (location) =>
	fetch(
		`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${location}&alias=${location}`
	);

export const load_all_api_location_wise = function* (action) {
	try {

		const requestToSaerchLocationWise = yield call(_requestToSaerchLocationWise, action.val);
		const Resut_Location_API = yield requestToSaerchLocationWise.json();



		console.log('action ', Resut_Location_API, Resut_Location_API[0].Key, Resut_Location_API[0].LocalizedName, Resut_Location_API[0].Country.LocalizedName)

		if (Resut_Location_API.Code == 'ServiceUnavailable') {
			alert('Api request is over than 50 times. Please change the api key or try tommmorow!');
		} else {

			const requestToCurrentWeatherApi = yield call(_requestToCurrentWeatherApi, Resut_Location_API[0].Key);
			const Resut_requestToCurrentWeatherApi = yield requestToCurrentWeatherApi.json();
			const requestToLast12HourWeatherApi = yield call(_requestToLast12HourWeatherApi, Resut_Location_API[0].Key);
			const Resut_requestToLast12HourWeatherApi = yield requestToLast12HourWeatherApi.json();
			const requestTo5DayApi = yield call(_requestTo5DayApi, Resut_Location_API[0].Key);
			const Resut_requestTo5DayApi = yield requestTo5DayApi.json();


			yield put({
				type: actionType.ALL_DATA_LOADED_FROM_API,
				stateName: Resut_Location_API[0].LocalizedName,
				country: Resut_Location_API[0].Country.LocalizedName,
				Humidity: Resut_requestToCurrentWeatherApi[0].RelativeHumidity,
				windSpeed: Resut_requestToCurrentWeatherApi[0].Wind.Speed.Metric.Value,
				Pressure: Resut_requestToCurrentWeatherApi[0].Pressure.Metric.Value,
				Temperature: Resut_requestToCurrentWeatherApi[0].Temperature.Metric.Value,
				WeatherText: Resut_requestToCurrentWeatherApi[0].WeatherText,
				WeatherIcon: Resut_requestToCurrentWeatherApi[0].WeatherIcon,
				HourlyData: Resut_requestToLast12HourWeatherApi,
				Next5DaysData: Resut_requestTo5DayApi,
				Loader: false
			});
		}

	} catch (error) {
		console.log('error is', error)
	}
}

export const load_all_api_data = function* (action) {
	try {



		const requestToLocationApi = yield call(_requestToLocationApi);

		const Resut_Location_API = yield requestToLocationApi.json();

		if (Resut_Location_API.Code == 'ServiceUnavailable') {
			alert('Api request is over than 50 times. Please change the api key or try tommmorow!');
		} else {
			const requestToWeatherApi = yield call(_requestToWeatherApi, Resut_Location_API.Key);
			const Resut_requestToWeatherApi = yield requestToWeatherApi.json();
			const requestToCurrentWeatherApi = yield call(_requestToCurrentWeatherApi, Resut_Location_API.Key);
			const Resut_requestToCurrentWeatherApi = yield requestToCurrentWeatherApi.json();
			const requestToLast12HourWeatherApi = yield call(_requestToLast12HourWeatherApi, Resut_Location_API.Key);
			const Resut_requestToLast12HourWeatherApi = yield requestToLast12HourWeatherApi.json();
			const requestTo5DayApi = yield call(_requestTo5DayApi, Resut_Location_API.Key);
			const Resut_requestTo5DayApi = yield requestTo5DayApi.json();


			yield put({
				type: actionType.ALL_DATA_LOADED_FROM_API,
				stateName: Resut_Location_API.LocalizedName,
				country: Resut_Location_API.Country.LocalizedName,
				Humidity: Resut_requestToCurrentWeatherApi[0].RelativeHumidity,
				windSpeed: Resut_requestToCurrentWeatherApi[0].Wind.Speed.Metric.Value,
				Pressure: Resut_requestToCurrentWeatherApi[0].Pressure.Metric.Value,
				Temperature: Resut_requestToCurrentWeatherApi[0].Temperature.Metric.Value,
				WeatherText: Resut_requestToCurrentWeatherApi[0].WeatherText,
				WeatherIcon: Resut_requestToCurrentWeatherApi[0].WeatherIcon,
				HourlyData: Resut_requestToLast12HourWeatherApi,
				Next5DaysData: Resut_requestTo5DayApi,
				Loader: false
			});
		}
	} catch (error) {
		console.log('error is api call', error);
	}
};
