const initialValue={
    item:[]
}
const itemReducer=(state=initialValue,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return {...state,items:[...state.item,action.payload]}
            case "REMOVE_ITEM":
                return {...state,items:state.items.filter((item)=>item.id!==action.payload)}
                default:
                    return state;
    }
}
export default itemReducer;