import { SEND_MESSAGE } from './DashboardActions';

const initialState = { data: [] };

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE :
      return {
        data: action.data
      };

    default:
      return state;
  }
}

export default MessageReducer