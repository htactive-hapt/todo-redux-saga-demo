import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../actions'

const Filter = (props) => {
    const { filters, dispatch } = props

    const handleFilterChange = (filter) => {
        if (!filter.active) {
            dispatch(changeFilter(filter.filterName))
        }
    }

    return (
        <div className="filter">
            {
                filters.map((filter) => {
                    return (
                        <p
                            className='filter-option'
                            key={filter.filterName}
                            onClick={() => handleFilterChange(filter)}
                            style={{ textDecoration: filter.active ? 'underline' : 'none' }}>
                            {filter.filterName}
                        </p>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps, null)(Filter)