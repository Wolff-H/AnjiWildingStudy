import React from "react"

// import r from "@/directives"

import { connect } from "react-redux"
// import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./index.styl"
import { Text } from "react-native"
import { getInfo } from "src/api"
import WebView from 'react-native-webview'

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
    navigation:any,
}

class Screen_Wiki extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view = 
                <WebView
                    source={{uri: 'https://baike.baidu.com/item/%E9%87%91%E9%92%B1%E6%9D%BE/828303'}}
                />
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
    async getInfo()
    {
        try
        {
            let response = await fetch('https://www.ga3hu.com/external/apps/amp/backend/get-info.php')
            let json = await response.json()
            console.log(json)
        }
        catch(error)
        {
            console.log(error)
        }
    }
}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Screen_Wiki)