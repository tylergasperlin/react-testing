import React from 'react'

export const CommentBox = () => {
    const [comment, setComment] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault();
        setComment('')
        console.log(comment)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4> Add a comment </h4>
            <textarea onChange={(e) => setComment(e.target.value)} value={comment}/>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    )
}

export default CommentBox;