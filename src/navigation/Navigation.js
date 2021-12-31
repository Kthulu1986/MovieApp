import React from 'react';
import DrawerContent from './DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

export default function Navigation(){
    return(
        <Drawer.Navigator 
            initialRouteName="app" 
            //drawercontent es una funcion que retorna el objeto del navegador con sus propiedades. 
            //Por tambien va el valor props como retorno de la funcion
            drawerContent={(props) => <DrawerContent {...props}/>}> 
            <Drawer.Screen name="app" component={StackNavigation}/>     
        </Drawer.Navigator>
    );
}