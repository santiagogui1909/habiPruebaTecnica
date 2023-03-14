import { formReducer } from '../Reducer/FormReducer';
import { stateBtns } from '../Reducer/EstateReducer';
import {createStore, combineReducers} from 'redux';

// Agroup the diferents states, for control of information
const reducersGroup = combineReducers({
    formReducer,
    stateBtns
})
  
export const store = createStore(reducersGroup);