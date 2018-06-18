export const SEARCH_COL1_ITEM = "SEARCH_COL1_ITEM";

export const searchCol1Item = (newCol) => {
    return{
        type:SEARCH_COL1_ITEM,
        col:newCol
    }
};

export const SEARCH_COL2_ITEM = "SEARCH_COL2_ITEM";

export const searchCol2Item = (newCol) => {
    return{
        type:SEARCH_COL2_ITEM,
        col:newCol
    }
}