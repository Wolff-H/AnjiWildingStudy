import $my from '@/commons/my.ts'

/**********************************************************************************************************************/

// actions /////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MODULE_PATH = 'Screens/Map/'
const toggleModal = `${MODULE_PATH}toggleModal`

// initial state ///////////////////////////////////////////////////////////////////////////////////////////////////////
const initial_state =
{
    if_display: false,
}

// reducer /////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default
function reducer(state = initial_state, action:store_d.Action)
{
    switch(action.type)
    {
        case toggleModal:
            return logics.toggleModal(state)
        default:
            return state
    }
}

const logics =
{
    toggleModal(state:any)
    {
        let state_to_set = $my.deepCopy(state)
        state_to_set.if_display = !state_to_set.if_display
        return state_to_set
    },
}
// action creators /////////////////////////////////////////////////////////////////////////////////////////////////////
// ...