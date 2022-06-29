import React from 'react';
import { IconButton } from 'react-native-paper';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import New from '../screens/New';
import Popular from '../screens/Popular';
import Search from '../screens/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigation(props){
    console.log(props);
    const {navigation} = props;

    const buttonLeft = (screen) => {  
        console.log(screen)     
        switch(screen){
            case "search":
            case "movie":
                return(
                    <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
                )
            default:
                return(
                    <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
                );
        }
    };
    
    const buttonRight = () =>{
        return <IconButton icon="magnify" onPress={() => navigation.navigate("search")}/>      
    };

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='home' 
                component={Home} 
                options={{title: 'TheMovieApp', headerLeft:() => buttonLeft("home"), headerRight: () => buttonRight(),}}
            />
            <Stack.Screen 
                name='movie' 
                component={Movie} 
                options={{title: '', headerLeft:() => buttonLeft("movie"), headerRight: () => buttonRight(),}}
            />
            <Stack.Screen 
                name='new' 
                component={New} 
                options={{title: 'Nuevas Peliculas', headerLeft:() => buttonLeft("news"), headerRight: () => buttonRight(),}}
            />
            <Stack.Screen 
                name='popular' 
                component={Popular} 
                options={{title: 'Peliculas Populares', headerLeft:() => buttonLeft("popular"), headerRight: () => buttonRight(),}}
            />
            <Stack.Screen 
                name='search' 
                component={Search} 
                options={{title: '', headerLeft:() => buttonLeft("search")}}
            />
        </Stack.Navigator>
    );
}