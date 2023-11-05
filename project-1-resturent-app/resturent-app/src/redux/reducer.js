import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
}

export const Reducer = (state = initialState, action) => {
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        console.log(comment);
        console.log(Array.isArray(state.comments));
        return {
            comments: [...state.comments, comment]
        }
    }
    return state;
}



