 import {combineReducers} from 'redux'
 import {ADDCOUNT,INPUTVALUE, ITEMSTATEvALUE, ITEMITEMLIST,DELETELLIST} from './actionType'
 import  { defaultState } from './dataDefault';

const count = (state = defaultState, action)=>{
     switch (action.type) {
        case ADDCOUNT:
               return action.data
             break;
        case INPUTVALUE:
            console.log(444)
            const arr = []
            arr.push(action.data)
            return arr
            break;
        case ITEMSTATEvALUE:
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.data
            console.log(newState)
                return newState
                break;

        case ITEMITEMLIST:
            let newStates = JSON.parse(JSON.stringify(state))
            newStates.list = [...newStates.list, action.data]
            return newStates
            break;
        case DELETELLIST:
            console.log(action.data)
            let newStat = JSON.parse(JSON.stringify(state))
            newStat.list.splice(action.data, 1)
            return newStat
            break;
        default:
             return state
             break;
     }
}

const name = (state = 0, action)=>{
    switch (action.type) {
       case 'ADDCOUNT':
           return action.data
           break;
        default: 
           return state
           break;
    }
}

 export default combineReducers({
    count,
    name
 })