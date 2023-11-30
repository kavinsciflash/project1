import { takeEvery, put } from '@redux-saga/core/effects';
import AuthenticationService from 'service/authentication.service';
import { getUserError, getUserFetch, getUserSuccess } from './userLogin.slice';

export const fetchUserDetailSaga = function* (action) {
    try {
        const res = yield AuthenticationService.login(action.payload);
        localStorage.setItem('token', res.token);
        yield put({
            type: getUserSuccess.type,
            payload: res
        });
    } catch (e) {
        yield put({
            type: getUserError.type,
            payload: e
        });
    }
}

export const fetchUserDetailWatch = function* () {
    yield takeEvery(getUserFetch, fetchUserDetailSaga);
}