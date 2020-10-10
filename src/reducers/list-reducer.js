const SET_WORK_TO_LIST = 'SET_WORK_TO_LIST';
const REMOVE_WORK_LIST = 'REMOVE_WORK_LIST';
const NEW_WORK_BODY = "NEW_WORK_BODY";
const CLEAR_LIST = 'CLEAR_LIST';
const CHANGE_TEXT = 'CHANGE_TEXT';

let initialState = {
    works: [],
    newWorkBody: ""
}

export const listReducer = (state = initialState, action) =>{
    let copyState = {...state}
    copyState.works = [...state.works]
    switch (action.type) {
        case SET_WORK_TO_LIST:
            if(!state.newWorkBody) {
                alert("Enter Something Please")
            }else {
                copyState.works.push(
                    {
                        userId: copyState.works.length,
                        completed: true,
                        title: state.newWorkBody,
                        changeText: true
                    })
                    copyState.newWorkBody = ""
            }
            return copyState
        case NEW_WORK_BODY:
            return {...state, newWorkBody: action.body}
        case REMOVE_WORK_LIST:
            return {...state, works: state.works.filter(id => "button"+id.userId !== action.userId)}
        case CLEAR_LIST:
            return {...copyState, works: []}
        case CHANGE_TEXT:
            return {
                ...copyState,
                works: copyState.works.map(a=>{
                    if(a.userId == action.userId){
                        return {...a, title: action.text}
                    }else{
                        return a
                    }
                })
                }
        default:
            return state;
    }
}



export const setWorkToListAC = (title) => ({type: SET_WORK_TO_LIST, title})
export const removeWorkListAC = (userId) => ({type: REMOVE_WORK_LIST, userId})
export const setNewWorkBodyAC = body => ({type:NEW_WORK_BODY, body})
export const clearListAC = () => ({type: CLEAR_LIST})
export const changeTextAC =(userId,text) => ({type: CHANGE_TEXT, userId, text})