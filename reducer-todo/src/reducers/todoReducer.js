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

        default:
            return state;
    }
};