import * as actionTypes from '../actions/types'

const todoItems = [{
    id: 0,
    createdAt: '31/07/2020',
    taskName: 'Create todo app with redux saga',
    isCompleted: true
}]

export const todoItemReducer = (state = todoItems, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            state = [...state, {
                id: action.id,
                taskName: action.taskName,
                isCompleted: action.isCompleted
            }]
            break;
        case actionTypes.REMOVE_ITEM:
            state = state.filter((item) => {
                return item.id !== action.id;
            })
            break;
        case actionTypes.TOGGLE_ITEM:
            state = state.map((item) => {
                let tempItem = { ...item };
                if (tempItem.id === action.id) {
                    tempItem.isCompleted = !tempItem.isCompleted;
                }
                return tempItem;
            })
            break;
        default:
            return state
    }
    return state;
}