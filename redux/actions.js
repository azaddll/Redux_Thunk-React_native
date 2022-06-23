import {SETUSERNAME, SETUSERAGE} from './actionType';

export const setUserName = username => {
  return {
    type: SETUSERNAME,
    payload: username,
  };
};


export const setUserAge = userAge => {
  return {
    type: SETUSERAGE,
    payload: userAge,
  };
};
