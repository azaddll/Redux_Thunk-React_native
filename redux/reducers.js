import {SETUSERNAME, SETUSERAGE} from './actionType';


const initialState = {
  name: '',
  age: '',
};


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERNAME:
      return {...state, name: action.payload};
    case SETUSERAGE:
      return {...state, age: action.payload};
    default:
      return state;
  }
};
