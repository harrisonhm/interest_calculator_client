import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api'
import { setHistory } from '../slices/interestCalculationSlice';

function* fetchInterestCalculationHistory() {
   try {
      console.log("Hello")
      const history = yield call(Api.get('interest_calculations'));
      console.log(history)
      yield put(setHistory(history));
   } catch (e) {
      yield put({type: "INTEREST_CALCULATION_HISTORY_FETCH_FAILED", message: e.message});
   }
}

function* interestCalculationSaga() {
  yield takeLatest("INTEREST_CALCULATION_HISTORY_FETCH_REQUESTED", fetchInterestCalculationHistory);
}

export default interestCalculationSaga;