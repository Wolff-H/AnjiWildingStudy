import React from "react"

// import r from "@/directives"

import { connect } from "react-redux"
// import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import s from "./index.styl"
import { Text, View, TextInput } from "react-native"
import { Button } from "@ant-design/react-native"
/**********************************************************************************************************************/

interface _props
{
    store_state:any,
    navigation:any,
}

class Screen_Login extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view = 
                <View style={s._}>
                    <Text style={s.title}>
                        安吉野植考
                    </Text>
                    <TextInput style={s.input}
                        placeholder="username"
                    ></TextInput>
                    <TextInput style={s.input}
                        placeholder="password"
                    ></TextInput>
                    <Button style={s.button}
                        type="primary"
                        onPress={()=>this.props.navigation.navigate('Screen_Home')}
                    >
                        sign in
                    </Button>
                    <Text style={s.hyperlink__signup}>
                        sign up
                    </Text>
                </View>
        }

        return view
    }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        if_keep_logged: true,
    }
    // 1 //


    // methods ---------------------------------------------------------------------------------------------------------

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Screen_Login)