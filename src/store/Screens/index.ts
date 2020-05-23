import $my from '@/commons/my.ts'

import { combineReducers } from 'redux'
import Map from './Map'

/**********************************************************************************************************************/

// actions /////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MODULE_PATH = 'Screens/'
const useView = `${MODULE_PATH}useView`

// initial state ///////////////////////////////////////////////////////////////////////////////////////////////////////
const initial_state =
{
    using_view: 'login',
}

// reducer /////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reducer(state = initial_state, action:store_d.Action)
{
    switch(action.type)
    {
        case useView:
            return logics.useView(state, action)
        default:
            return state
    }
}

const logics =
{
    useView(state:any, action:store_d.Action)
    {
        let state_to_set = $my.deepCopy(state)
        state_to_set.using_view = action.view_name
        return state_to_set
    }

}

export default combineReducers(
    {
        _: reducer,
        Map: Map,
        // other views ...
    }
)
// action creators /////////////////////////////////////////////////////////////////////////////////////////////////////
// ...