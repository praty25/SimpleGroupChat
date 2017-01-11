import { SIGN_IN } from './LoginActions';

const initialState = { data: [] };

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN :
      return {
        data: action.data
      };

    default:
      return state;
  }
}

export default LoginReducer