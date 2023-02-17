import axios from 'axios';

// api
const api = 'http://127.0.0.1:3000/api/v1/messages';

// Actions
const FETCH_GREETINGS = 'FETCH_GREETINGS';

// Initial State
const initialState = {
  greetings: [],
};

// Action for greetings
export const GreetingsAction = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

// Fetch Greetings from api
export const fetchGreetingsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(api);
    const data = await response.data;
    console.log(data);
    dispatch(GreetingsAction(data[0]));
  } catch (err) {
    console.log(err);
  }
};

// Reducer
const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return {
        ...state,
        greetings: action.payload,
      };
    default:
      return state;
  }
};

export default greetingsReducer;
