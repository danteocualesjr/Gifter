import { combineReducers } from 'redux';

import user from './reducers/user';
import gifts from './reducers/gifts';

export default combineReducers({
    user,
    gifts
});