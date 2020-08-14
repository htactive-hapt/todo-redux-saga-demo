import * as actionTypes from '../actions/types'

const filters = [
    { filterName: 'Show All', active: true },
    { filterName: 'Completed', active: false },
    { filterName: 'Todo', active: false }
]

export const filterLinkReducer = (state = filters, action) => {
    switch (action.type) {
        case actionTypes.FILTER_CHANGE:
            state = state.map((filter) => {
                let filterOption = { ...filter };
                if (filterOption.filterName === action.filterName) {
                    filterOption.active = true;
                } else {
                    filterOption.active = false;
                }
                return filterOption;
            });
            break;
        default:
            return state
    }
    return state;
}
