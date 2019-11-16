export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            console.log("Action Payload: ", action.payload);
            return [...state, {
                item: action.payload,
                completed: false,
                id: state.length+1
            }];
        case "TOGGLE_COMPLETION":
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, 
                        completed: !todo.completed
                    }  
                } else {
                    return todo; 
                }
            });
        
        case "CLEAR_TODOS":
            return state.filter(todo => {
                return !todo.completed;
            })

        default:
            return state;
    }
};