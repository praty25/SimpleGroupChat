import callApi from '../../util/apiCaller';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export function addMessage(data){
	return {
		type : String,
		data
	}
}

export function sendMessage(data){
	console.log("darta",data);
	return (dispatch) => {
    return callApi('chat', 'post', {
      data: {
      	//data : send userID
        data: data.message,
      },
    }).then(res => dispatch(addMessage(res.data)));
  };
}