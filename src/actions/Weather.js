import actionType from '../constant/index';

export function initial_app_load() {
	return {
		type: actionType.INITIAL_APP_LOAD
	};
}

export const Search_City = (val) => ({ /// Search city
	type: actionType.SEARCH_CITY,
	val: val
  })

export const Search_City_Focus = () => ({ /// hide and show Search
	type: actionType.SEARCH_CITY_FOCUS,
  })

export const search_itam_value_update = (val) => ({ /// value update input box
	type: actionType.SEARCH_VALUE_UPDATE,
	val: val
  })

export const Location_wise_api_update = (val) => ({
	type: actionType.SEARCH_LOCATION_WISE,
	val: val
})

