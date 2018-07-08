import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  balance: 2500701,
  username: 'Kenny Ek'
};

export default createStore(reducer, initialState);
