import { createStore, combineReducers, compose } from 'redux'

import $my from '@/commons/my.ts'
import Screens from './Screens'

/**********************************************************************************************************************/


// actions /////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MODULE_PATH = ''
const loadedAssets = `${MODULE_PATH}loadedAssets`
const addJustLoaded = `${MODULE_PATH}addJustLoaded`

// initial state ///////////////////////////////////////////////////////////////////////////////////////////////////////
const initial_state =
{
    username: '',
    password: '',
    using_item: 1,
}

// reducer /////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reducer(state = initial_state, action:store_d.Action)
{
    switch(action.type)
    {
        case loadedAssets:
            return logics.loadedAssets(state)
        case addJustLoaded:
            return logics.addJustLoaded(state, action)
        default:
            return state
    }
}

const logics =
{
    loadedAssets(state:any)
    {
        let state_to_set = $my.deepCopy(state)
        state_to_set.if_loading_assets = false
        // console.log('loadedAssets')
        return state_to_set
    },
    addJustLoaded(state:any, action:store_d.Action)
    {
        let state_to_set = $my.deepCopy(state)
        state_to_set.assets_loaded.push(action.just_loaded)
        // console.log('addJustLoaded')
        return state_to_set
    },

}

/**********************************************************************************************************************/
// declare global
// {
//     interface Window
//     {
//         __REDUX_DEVTOOLS_EXTENSION__:any
//     }
// }

const store = createStore(
    combineReducers(
        {
            _: reducer,
            Screens: Screens,
        }
    ),
    // undefined,
    // compose(
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
)

store.subscribe(
    () => console.log(store.getState())
)

export default store