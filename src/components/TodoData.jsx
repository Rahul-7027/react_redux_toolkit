import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../Slices/Todo'
import { fetchTask } from '../store/store'
import { MdDelete } from 'react-icons/md'


const TodoData = () => {

    const [data, setData] = useState("")

    const disptach = useDispatch()

    const store = useSelector((store) => store.todo.tasks)
    console.log(5555,store)
    const handleSubmit = (event) => {
        event.preventDefault()
        return disptach(addTodo(data))
    }

    const handleChanged = (event) => {
        setData(event.target.value)
    }

    const handleDelete = (id) => {
        console.log("deleting ...")
        return disptach(deleteTodo(id))

    }

    const HandleFetchData = () => {
        disptach(fetchTask())
    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="todo-app">
                        <h1>
                            <i className='fa-regular fa-pen-to-square'></i>To-do List:
                        </h1>
                        <div className="row">
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={data} onChange={handleChanged} id='input-box' placeholder='Add a new task' />
                                <button>Add Task</button>
                            </form>
                            <button onClick={HandleFetchData}>Fetch All</button>
                        </div>
                        <hr />
                        <ul id='list-container'>
                            {store && store.map((element, index) => (
                                <li key={index}>
                                    <p>{index}: {element}</p>
                                    <div className="icon-style">
                                        <MdDelete onClick={() => handleDelete(index)} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoData
