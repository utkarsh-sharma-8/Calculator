import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch } from 'react-native';
import { myColors } from './src/Colors';
import MyKeyboard from './src/MyKeyboard';
import { ThemeContext } from './src/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: '#000000'}]
        }>
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
