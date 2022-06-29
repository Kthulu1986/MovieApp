import { createContext } from 'react';

const PreferencesContext = createContext ({
    theme: '',
    toggleTheme: () => {},
});
//debe retornar el contexto
export default PreferencesContext;