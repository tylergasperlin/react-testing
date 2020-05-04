import React from 'react'
import { useSelector } from 'react-redux'

export const CommentList = () => {
    const comments = useSelector(state => state.comments)

    const renderComments = () => {
        return comments.map(comment => {
            return <li style={{color:'green'}} key={comment}> {comment} </li>
        })
    }

    return (
        <div>
            <ul>
                {renderComments()}
            </ul>
        </div>
    )
}

export default CommentList;
