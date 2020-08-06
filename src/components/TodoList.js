import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleItem, removeItem, fetchTodos } from '../actions'
import { Col, Row, Button, Input } from 'antd'
import { CloseOutlined } from '@ant-design/icons';

const TodoList = (props) => {
    const { filters, todoItems, dispatch } = props
    // console.log(filters, 'filters')
    // console.log(todoItems, 'todoItems')
    useEffect(() => {
        fetchTodos();
    }, [])

    const handleToggleItem = (itemId) => {
        dispatch(toggleItem(itemId))
    }

    const handleDeleteItem = (itemId) => {
        dispatch(removeItem(itemId))
    }

    const getFilteredTodoList = () => {
        const activeFilter = filters.find(filter => filter.active === true)
        switch (activeFilter.filterName) {
            case 'Completed':
                return todoItems.filter((item) => {
                    return item.isCompleted === true;
                });
            case 'Todo':
                return todoItems.filter((item) => {
                    return item.isCompleted === false;
                })
            default:
                return todoItems
        }
    }

    const filteredTodoList = getFilteredTodoList()

    return (
        <div className='todolist'>
            {
                filteredTodoList.map((item) => {
                    return (
                        <Row key={item.id} className='task'>
                            <Col span={1}>
                                <Input type='checkbox' defaultChecked={item.isCompleted} onClick={() => handleToggleItem(item.id)}></Input>
                            </Col>
                            <Col span={23} >
                                <Col onClick={() => handleToggleItem(item.id)}>{item.taskName}</Col>
                            </Col>
                            <Col className='button' >
                                <Button onClick={() => handleDeleteItem(item.id)}><CloseOutlined /></Button>
                            </Col>
                        </Row>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoItems: state.todoItems,
        filters: state.filters
    }
}


export default connect(mapStateToProps, null)(TodoList)   