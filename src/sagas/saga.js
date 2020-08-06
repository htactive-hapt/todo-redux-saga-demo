import { takeLatest, put, all } from 'redux-saga/effects';
import { fetch } from 'cross-fetch';

const API_URL = 'https://5f194821e104860016bae927.mockapi.io/todo-ha'

function* handleFetchItemSaga(action) {
    yield fetch(`${API_URL}`, {
        method: 'GET',
        mode: 'cors',
        body: JSON.stringify(action),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            action = { ...action, type: `${action.type}` };
        });
    yield put(action);
}

function* handleAddItemSaga(action) {
    yield fetch(`${API_URL}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(action),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            action = { ...action, type: `${action.type}` };
        });
    yield put(action);
}

function* handleRemoveItemSaga(action) {
    yield fetch(`${API_URL}/${action.id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            action = { ...action, type: `${action.type}` };
        });
    yield put(action);
}

function* handleToggleItemSaga(action) {
    yield fetch(`${API_URL}/${action.id}`, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify(action),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {
            action = { ...action, type: `${action.type}` };
        });
    yield put(action);
}

function* watchFetchItem() {
    yield takeLatest('FETCH_ITEM', handleFetchItemSaga);
}

function* watchAddItem() {
    yield takeLatest('ADD_ITEM', handleAddItemSaga);
}

function* watchRemoveItem() {
    yield takeLatest('REMOVE_ITEM', handleRemoveItemSaga);
}

function* watchToggleItem() {
    yield takeLatest('TOGGLE_ITEM', handleToggleItemSaga);
}

export default function* rootSaga() {
    yield all([
        watchFetchItem(),
        watchAddItem(),
        watchRemoveItem(),
        watchToggleItem()
    ]);
}