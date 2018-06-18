import axios from 'axios';
import {api} from './getColumn';

export const POST_COLUMN_LIST_PENDING="POST_COLUMN_LIST_PENDING";
export const POST_COLUMN_LIST_SUCCESS="POST_COLUMN_LIST_SUCCESS";

export const postColumnItem = (dispatch,column,item) => {
    dispatch({
        type:POST_COLUMN_LIST_PENDING,
    });
    axios.post(api,{
        column:column,
        item:item,
    })
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type:POST_COLUMN_LIST_SUCCESS,
                    response:column
                })
            }
        })

}