import React, {useState} from 'react' 
import { View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper';

export default function DrawerContent(props) {
    
    const {navigation} = props;
    const[active, setActive] = useState("home");
  
    const onChangeScreen = (screen) => {
        //seteamos el screen que viene desde el onpress
        setActive(screen);
        navigation.navigate(screen);
    };

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Inicio" active={active === "home"} onPress={() => onChangeScreen("home")}/>
                <Drawer.Item label="Peliculas populares" active={active === "popular"} onPress={() => onChangeScreen("popular")}/>
                <Drawer.Item label="Nuevas Peliculas" active={active === "new"} onPress={() => onChangeScreen("new")}/>
            </Drawer.Section>     
        </DrawerContentScrollView>
    )
}
