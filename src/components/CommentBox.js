import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';

export const CommentBox = () => {
    const [comment, setComment] = React.useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.saveComment(comment));
        setComment('');
    };

    const handleClick = () => {
        dispatch(actions.fetchComments())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4> Add a comment </h4>
                <textarea onChange={(e) => setComment(e.target.value)} value={comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={handleClick}>Fetch Comments</button>
        </div>
    );
};

export default CommentBox;
