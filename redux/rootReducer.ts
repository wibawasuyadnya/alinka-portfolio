import { combineReducers } from 'redux';

// import slices
import globalSlice from './store/global/globalSlice';

const rootReducer = combineReducers({
    global: globalSlice,
});

export default rootReducer;