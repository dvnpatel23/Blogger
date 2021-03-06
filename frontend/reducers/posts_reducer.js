import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from "../actions/post_actions";
import { merge, assign } from "lodash";

let newState;
const postReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
  
            return assign({}, action.posts);
        case RECEIVE_POST:
            debugger
            return assign({}, state, action.post);
    
        case REMOVE_POST:
            newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
};
export default postReducer;