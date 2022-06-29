import React, {useMemo, useState} from 'react';
import { Provider as PaperProvider, DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper, DefaultTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { StatusBar } from 'react-native';
import PreferencesContext from './src/context/PreferencesContext';

export default function App() {

  const [theme, setTheme] = useState ("dark");

  DefaultThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#15212b';

  //si theme cambia , hara recargar el HOOK
  const toggleTheme = () => {
    setTheme (theme === "dark" ? "light" : "dark");
  }
  //hook para controlar estado de theme, en el caso que la variable theme cambie el hook se recarga
  const preference = useMemo (
    ()=>({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preference}>
        <PaperProvider theme={theme === "dark" ? DarkThemePaper : DefaultTheme}>
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
        <NavigationContainer theme={theme === "dark" ? DarkThemeNavigation : DefaultTheme}>          
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  
  );
}
