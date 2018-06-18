import axios from 'axios';
import {api} from './getColumn';

export const DELETE_COLUMN_ITEM_PENDING="DELETE_COLUMN_ITEM_PENDING";
export const DELETE_COLUMN_ITEM_SUCCESS="DELETE_COLUMN_ITEM_SUCCESS";

export const deleteColumnItem = (dispatch,col,id) => {
    const url = `${api}/${col}/${id}`
    dispatch({
        type:DELETE_COLUMN_ITEM_PENDING,
    });
    axios.delete(url)
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type:DELETE_COLUMN_ITEM_SUCCESS,
                    response:col
                })
            }
        })

}