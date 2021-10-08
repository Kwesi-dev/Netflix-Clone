export const getListsStart = ()=>({
    type: "GET_LISTS_START"
})
export const getListsSuccess = (lists)=>({
    type: "GET_LISTS_SUCCESS",
    payload: lists
})
export const getListsFailure = ()=>({
    type: "GET_LISTS_FAILURE"
})

//delete list
export const deleteListStart = ()=>({
    type: "DELETE_LISTS_START"
})
export const deleteListSuccess = (id)=>({
    type: "DELETE_LISTS_SUCCESS",
    payload: id
})
export const deleteListFailure = ()=>({
    type: "DELETE_LISTS_FAILURE"
})

//create list
export const createListStart = ()=>({
    type: "CREATE_LIST_START"
})
export const createListSuccess = (list)=>({
    type: "CREATE_LIST_SUCCESS",
    payload: list
})
export const createListFailure = ()=>({
    type: "CREATE_LIST_FAILURE"
})

//update list
export const updateListStart = ()=>({
    type: "UPDATE_LIST_START"
})
export const updateListSuccess = (list, id)=>({
    type: "UPDATE_LIST_SUCCESS",
    payload: [list, id]
})
export const updateListFailure = ()=>({
    type: "UPDATE_LIST_FAILURE"
})
