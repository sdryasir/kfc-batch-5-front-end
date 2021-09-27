export const todoReducer = function (state = { todos: [] }, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}


//todos: ['asd', 'asd', 'asdsa']



// const person = {
//     name: 'Yasir',
//     age: 25,
//     qual: "MCS"
// }


// {... person }


// name:"yasir", age:25, qual:"MCS"
