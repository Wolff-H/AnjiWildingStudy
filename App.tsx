/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import store from '@/store'

import Screen_Login from '@/components/Screen_Login'
import Screen_Home from '@/components/Screen_Home'
import Screen_Archieve from '@/components/Screen_Archieve'
import Screen_Map from '@/components/Screen_Map'
import Screen_Wiki from '@/components/Screen_Wiki'

// 样式 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// @ts-ignore
import s from './App.styl'

/**********************************************************************************************************************/

const Stack = createStackNavigator()

const ScreensConfigs =
{
    Login:
    {
        headerShown: false,
    },
    Home:
    {
        // headerShown: false,
        title: '目录',
        headerStyle:
        {
            backgroundColor: '#f2f2f2',
        },
    },
    Archieve(route:any)
    {
        return{
            title: '档案 / '+route.params.item_name,
            headerStyle:
            {
                backgroundColor: '#f2f2f2',
            },
        }
    },
    Wiki(route:any)
    {
        return{
            title: '档案 / '+route.params.item_name+' / 百科',
            headerStyle:
            {
                backgroundColor: '#f2f2f2',
            },
        }
    },
    Map:
    {
        title: '地图',
        headerStyle:
        {
            backgroundColor: '#f2f2f2',
        },
    }
}







class App extends React.Component
{
    render()
    {
        return(
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Screen_Login">
                        <Stack.Screen
                            name="Screen_Login"
                            component={Screen_Login}
                            options={ScreensConfigs.Login}
                        />
                        <Stack.Screen
                            name="Screen_Home"
                            component={Screen_Home}
                            options={ScreensConfigs.Home}
                        />
                        <Stack.Screen
                            name="Screen_Archieve"
                            component={Screen_Archieve}
                            options={({route: route})=>ScreensConfigs.Archieve(route)}
                            // options={({route:route}) => ({title: '档案'(route.params as any).item_name})}
                        />
                        <Stack.Screen
                            name="Screen_Map"
                            component={Screen_Map}
                            options={ScreensConfigs.Map}
                        />
                        <Stack.Screen
                            name="Screen_Wiki"
                            component={Screen_Wiki}
                            // options={({route: route})=>ScreensConfigs.Wiki(route)}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }

    // data ------------------------------------------------------------------------------------------------------------
    // 0 //
    state =
    {
        
    }
    // 1 //


    // methods ---------------------------------------------------------------------------------------------------------

    // lifecycles ------------------------------------------------------------------------------------------------------
}

export default App
