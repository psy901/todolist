import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from './actions';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

/*  equivalent to the below
const todoApp = (state = initialState, action) => {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
};
*/

/**
 * using combineReducers to combine defined reducers
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
