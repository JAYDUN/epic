import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Column from './reducers/Column';

const rootReducer = combineReducers({

    form:formReducer,
    Column,
});

export default rootReducer;