import Constants from '../Constants';
import Initialstate from '../Initialstate';

function Reducer(state, action) {

  switch (action.type) {
    case Constants.RECEIVE_DATA_ITEMS:
      return Object.assign({}, state, {
        hasreceiveddata: true,
        city: action.city,
        items: action.data
      })
      break;
    
    default:
      return state || Initialstate
  }
}

export default Reducer;
