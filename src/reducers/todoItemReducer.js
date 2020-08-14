// export const todoItemReducer = (state = todoItems, action) => {
//     switch (action.type) {
//         case `${actionTypes.FETCH_ITEMS}`: {
//             return {
//                 ...state,
//                 todoItems: action.payload
//             }
//         }

//         case `${actionTypes.FETCH_ITEMS_SUCCESS}`: {
//             return {
//                 ...state,
//                 todoItems: action.payload
//             };
//         }

//         case `${actionTypes.FETCH_ITEMS_FAILURE}`: {
//             return {
//                 ...state,
//                 error: action.payload.error
//             };
//         }

//         case `${actionTypes.ADD_ITEM}_ASYNC`: {
//             return state = [...state, {
//                 id: action.id,
//                 createdAt: action.createdAt,
//                 taskName: action.taskName,
//                 isCompleted: action.isCompleted
//             }]
//         }

//         case `${actionTypes.REMOVE_ITEM}_ASYNC`: {
//             return state = state.filter((item) => {
//                 return item.id !== action.id;
//             })
//         }

//         case `${actionTypes.TOGGLE_ITEM}_ASYNC`: {
//             return state = state.map((item) => {
//                 let tempItem = { ...item };
//                 if (tempItem.id === action.id) {
//                     tempItem.isCompleted = !tempItem.isCompleted;
//                 }
//                 return tempItem;
//             })
//         }
//         default:
//             return state
//     }
// }

import * as actionTypes from '../actions/types'

// const todoItems = [{
//     id: 0,
//     createdAt: '31/07/2020',
//     taskName: 'Create todo app with redux saga',
//     isCompleted: true
// }]

const todoItems = []

export const todoItemReducer = (state = todoItems, action) => {
    switch (action.type) {
        case `${actionTypes.FETCH_ITEMS}`: {
            return {
                ...state,
                todoItems: action.payload
            }
        }

        case `${actionTypes.FETCH_ITEMS_SUCCESS}`: {
            return {
                ...state,
                todoItems: action.payload
            };
        }

        case `${actionTypes.FETCH_ITEMS_FAILURE}`: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        case actionTypes.ADD_ITEM: {
            return {
                ...state,
                id: action.id,
                taskName: action.taskName,
                isCompleted: action.isCompleted
            }
        }

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
