import Immutable from 'immutable';

export default function LoginReducer(state={}, action){
  switch (action.type) {
    case 'LOGIN':
      sessionStorage.setItem('userName',action.userId);
      action.history.push('/');
    default:
      return state;
  }
}
