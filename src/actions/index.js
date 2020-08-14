import * as actionTypes from './types'

let todoItemId = 1

export const fetchTodos = () => {
    return {
        type: actionTypes.FETCH_ITEMS,
    }
};

export const fetchTodosSuccess = todoItems => {
    // console.log('fetchTodosSuccess')
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        payload: todoItems
    }
}

export const fetchTodosFailure = error => {
    // console.log('fetchTodosFailure')
    return {
        type: actionTypes.FETCH_ITEMS_FAILURE,
        payload: error
    }
}

export const addItem = taskName => {
    // console.log('add item')
    let timeNow = new Date().toLocaleString()
    return {
        type: actionTypes.ADD_ITEM,
        id: ++todoItemId,
        taskName,
        createdAt: timeNow,
        isCompleted: false
    }
}

export const toggleItem = itemId => {
    // console.log('toggle item')
    return {
        type: actionTypes.TOGGLE_ITEM,
        id: itemId
    }
}

export const removeItem = itemId => {
    // console.log('removeItem')
    return {
        type: actionTypes.REMOVE_ITEM,
        id: itemId
    }
}

export const changeFilter = filterName => {
    // console.log('changeFilter')
    return {
        type: 'FILTER_CHANGE',
        filterName
    }
}