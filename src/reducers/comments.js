import { SAVE_COMMENT } from 'action/types'
import { saveComment } from '../actions';


export default function (state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...saveComment, action.payload]
        default: 
            return state;
    }
}