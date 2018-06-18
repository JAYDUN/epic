import {GET_COLUMN1_LIST_SUCCESS,
        GET_COLUMN2_LIST_SUCCESS,
        } from '../actions/getColumn';
import {POST_COLUMN_LIST_SUCCESS} from '../actions/postItem';
import {DELETE_COLUMN_ITEM_SUCCESS} from '../actions/deleteItem';
import {SEARCH_COL1_ITEM,SEARCH_COL2_ITEM} from '../actions/searchItem';

const initState={
    column1:[],
    column2:[],
    postCol:'',
    delCol:'',
}
export default function ColumnList(state=initState,action) {

    switch (action.type){
        case GET_COLUMN1_LIST_SUCCESS:
            return{
                ...state,
                column1:action.response.data,
                postCol:'',
                delCol:'',
            };
        case GET_COLUMN2_LIST_SUCCESS:
            return{
                ...state,
                column2:action.response.data,
                postCol:'',
                delCol:'',
            };
        case POST_COLUMN_LIST_SUCCESS:
            return{
                ...state,
                postCol:action.response,

            };
        case DELETE_COLUMN_ITEM_SUCCESS:
            return{
                ...state,
                delCol:action.response,
            };
        case SEARCH_COL1_ITEM:
            return{
                ...state,
                column1:action.col,
            };
        case SEARCH_COL2_ITEM:
            return{
                ...state,
                column2:action.col,
            };
        default :
            return state;
    }

}