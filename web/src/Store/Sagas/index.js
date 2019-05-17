import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../Services/api';
import { Creators as LoginActions, Types as LoginTypes } from '../Ducks/login';

function* login(action) {
  try {
    const { data } = action.payload;
    const response = yield call(api, '/session', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    yield put(LoginActions.loginSuccess(response));
  } catch (err) {
    yield put(LoginActions.loginFailure(err));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.REQUEST, login)]);
}
