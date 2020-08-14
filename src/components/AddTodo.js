import React, { useState } from 'react';
import { Row, Input } from 'antd'
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AddTodo = (props) => {
    const { dispatch } = props
    const [taskName, setTaskName] = useState('Chua go gi')
    // console.log(taskName, 'taskName')
    // console.log(dispatch, 'dispatch')

    const handleChange = event => {
        setTaskName(event.target.value)
    }

    const handleAddItem = (event) => {
        if (event.key === 'Enter' && taskName) {
            console.log(addItem, 'addItem')
            dispatch(addItem(taskName))
            setTaskName('')
        }
    }

    return (
        <>
            <h2 className='title text-center'><strong>Todo List</strong></h2>
            <Row className='addtodo'>
                <Input
                    className='input-task'
                    onChange={handleChange}
                    value={taskName}
                    onKeyDown={handleAddItem}
                    placeholder='Type here to add a new task'
                />
            </Row>
        </>
    )
}

export default connect()(AddTodo);
