import React from "react"

// import r from "@/directives"

import { connect } from "react-redux"
// import store from "@/store"
// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import s from "./index.styl"
import { Text, View, ScrollView } from "react-native"
import { List, Accordion } from "@ant-design/react-native"

/**********************************************************************************************************************/

interface _props
{
    store_state:any,
    navigation:any,
}

class Screen_Archieve extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view = 
                <View>
                    <ScrollView>
                        <List>
                            <Text style={s.item_title}>资料</Text>
                            <List.Item style={s.item}
                                onPress={()=>this.toWiki()}
                            >
                                百科
                            </List.Item>
                            <List.Item style={s.item}
                                onPress={()=>{}}
                            >
                                县志
                            </List.Item>
                            <Text style={s.item_title}>地图</Text>
                            <List.Item style={s.item}
                                onPress={()=>this.toMap()}
                            >
                                地图
                            </List.Item>
                        </List>
                        <List>
                            <Text style={s.item_title}>年历</Text>
                            <List.Item style={s.item}
                                onPress={()=>{}}
                            >
                                2019
                            </List.Item>
                            <List.Item style={s.item}
                                onPress={()=>{}}
                            >
                                2020
                            </List.Item>
                            <List.Item style={s.item}
                                onPress={()=>{}}
                            >
                                2021
                            </List.Item>
                            <List.Item style={s.item}
                                onPress={()=>{}}
                            >
                                2022
                            </List.Item>
                        </List>
                        <List>
                            <Text style={s.item_title}>分布</Text>
                            <List.Item style={s.item}
                                onPress={()=>{}}
                            >
                                资源点列表
                            </List.Item>
                        </List>


                    </ScrollView>
                </View>
        }

        return view
    }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        active_panels: [] as number[],
    }
    // 1 //


    // methods ---------------------------------------------------------------------------------------------------------
    changePanel = (active_panels:number[]) =>
    {
        this.setState
        (
            {
                active_panels: active_panels,
            }
        )
    }

    toWiki = () =>
    {
        this.props.navigation.navigate('Screen_Wiki')
    }

    toMap = () =>
    {
        this.props.navigation.navigate('Screen_Map')
    }

}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Screen_Archieve)