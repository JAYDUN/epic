import axios from 'axios';

export const api = 'http://localhost:3000/column';

export const GET_COLUMN1_LIST_PENDING="GET_COLUMN1_LIST_PENDING";
export const GET_COLUMN1_LIST_SUCCESS="GET_COLUMN1_LIST_SUCCESS";

export const getColumn1List = (dispatch) => {
    const url = `${api}/1`;
    dispatch({
        type:GET_COLUMN1_LIST_PENDING,
    });
    axios.get(url)
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type:GET_COLUMN1_LIST_SUCCESS,
                    response:response
                })
            }
        })

}

export const GET_COLUMN2_LIST_PENDING="GET_COLUMN2_LIST_PENDING";

export const GET_COLUMN2_LIST_SUCCESS="GET_COLUMN2_LIST_SUCCESS";

export const getColumn2List = (dispatch) => {
    const url = `${api}/2`;
    dispatch({
        type:GET_COLUMN2_LIST_PENDING,
    });
    axios.get(url)
        .then(response => {
            if(response.status === 200) {
                dispatch({
                    type:GET_COLUMN2_LIST_SUCCESS,
                    response:response
                })
            }
        })

}