import { combineReducers } from 'redux';

// import slices
import globalSlice from './slices/globalSlice';

const rootReducer = combineReducers({
    global: globalSlice,
});

export default rootReducer;