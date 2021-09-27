import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Location = () => {

    const [text, setText] = useState('')

    const { todos } = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'ADD_TODO',
            payload: text
        })
    }

    return (
        <div className="my-5">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="ADD" />
            </form>
            {
                todos.map((todo) => <p key={todo}>{todo}</p>)
            }
        </div>
    )
}

export default Location
