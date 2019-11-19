export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "react",
    completed: false,
    id: 1
  },
  {
    item: "styled component",
    completed: false,
    id: 2
  },
  {
    item: "reducers",
    completed: false,
    id: 3
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE_COMPLETION":
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });

    case "CLEAR_TODOS":
      return state.filter(todo => {
        return !todo.completed;
      });

    default:
      return state;
  }
};
