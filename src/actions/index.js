import * as actionTypes from './types'

let todoItemId = 1

export const fetchTodos = () => {
    return {
        type: actionTypes.FETCH_ITEM
    }
}

export const addItem = taskName => {
    // console.log('add item')
    return {
        type: actionTypes.ADD_ITEM,
        id: ++todoItemId,
        taskName,
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

export const changeFilter = (filterName) => {
    // console.log('changeFilter')
    return {
        type: 'FILTER_CHANGE',
        filterName
    }
}