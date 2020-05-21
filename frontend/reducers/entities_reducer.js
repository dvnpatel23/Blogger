import { combineReducers } from 'redux';

import posts from './posts_reducer';
// import reviews from './reviews_reducer';
import users from './users_reducer';

export default combineReducers({
    users,
    posts
});
