import callApi from '../../util/apiCaller';

export const SIGN_IN = 'SIGN_IN';

export function signInUser(data) {
	return {
		type : String,
		data
	}	
}

export function authentication(userData) {
	console.log("data in authentication",userData);
	return (dispatch) => {
    return callApi('userAuthentication', 'post', {
      userData: {
        email: userData.email,
        password: userData.password
      },
    }).then(res => dispatch(signInUser(res.data)))
  };
}