import { takeEvery, select, call, put } from 'redux-saga/effects';
import actionType from '../constant/index';
import { load_all_api_data, load_all_api_location_wise } from '../saga_actions/all_saga_actions'

const rootSaga = function* (){
    yield takeEvery(actionType.INITIAL_APP_LOAD, load_all_api_data)
    yield takeEvery(actionType.SEARCH_LOCATION_WISE, load_all_api_location_wise)
}

export default rootSaga;