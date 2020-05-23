import React from "react"

// import r from "@/directives"

import { connect } from "react-redux"
// import store from "@/store"
import { Text, FlatList, ScrollView } from "react-native"

import demo_content from "./demo_content"

// styles //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import "./index.styl"
// import Item from "./item"
import { List } from "@ant-design/react-native"
// import { ListRow } from "teaset"
// import Item from "@ant-design/react-native/lib/list/ListItem"

/**********************************************************************************************************************/

// function renderItem(item:any)
// {
//     console.log(item);
    
//     return(
//         <Item
//             id={item.id}
//             title={item.title}
//         />
//     )
// }



interface _props
{
    store_state:any,
    navigation:any,
}

class Screen_Home extends React.Component<_props>
{
    render()
    {
        let view = null

        if(true)
        {
            view = 
                // <Text
                //     onPress={()=>this.props.navigation.navigate('Screen_Archieve', {item_name: 'item_name'})}
                // >
                //     Screen Home
                // </Text>
                // <FlatList
                //     data={demo_content}
                //     renderItem={(entry)=>renderItem(entry.item)}
                // />
                <ScrollView

                >
                    <List>
                    {
                        demo_content.map
                        (
                            (item, index) =>
                            {
                                return(
                                    <List.Item
                                        key={item.id}
                                        onPress={()=>this.toItem(item)}
                                    >
                                        {item.title}
                                    </List.Item>
                                )
                            }
                        )
                    }
                    </List>
                </ScrollView>
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
    toItem = (item:any) =>
    {
        this.props.navigation.navigate('Screen_Archieve', {item_name: item.title})
    }
}

const mapStateToProps = (state:any) =>
{
    return{
        store_state: state,
    }
}

/**********************************************************************************************************************/

export default connect(mapStateToProps)(Screen_Home)