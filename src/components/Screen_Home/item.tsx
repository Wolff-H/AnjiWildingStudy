import React from "react"

// import r from "@/directives"

// import { connect } from "react-redux"
// import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import s from "./item.styl"
import { Button } from "@ant-design/react-native"
import { Text } from "react-native"

/**********************************************************************************************************************/

interface _props
{
    // store_state:any,
    id:number,
    title:string,
}

class Item extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view =
                <Button style={s._}>
                    <Text style={s.button_text}>
                        {this.props.title}

                    </Text>
                </Button>
        }

        return view
    }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        
    }
    // 1 //


    // methods ---------------------------------------------------------------------------------------------------------

}

// const mapStateToProps = (state:any) =>
// {
//     return{
//         store_state: state,
//     }
// }

/**********************************************************************************************************************/

export default Item
// export default connect(mapStateToProps)(ClassName)