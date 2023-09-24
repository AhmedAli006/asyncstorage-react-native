import React, {useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
  const [darkmode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    retrieveSettings();
  }, []);

  const storeSettings = async () => {
    try {
      const settings = {
        darkmode,
        language,
      };

      const settingsString = JSON.stringify(settings);
      await AsyncStorage.setItem('app_settings', settingsString);
    } catch (error) {
      console.error('Error storing settings:', error);
    }
  };

  const retrieveSettings = async () => {
    try {
      const settingsString = await AsyncStorage.getItem('app_settings');

      const settings = JSON.parse(settingsString!);

      setDarkMode(settings.darkmode);
      setLanguage(settings.language);
    } catch (error) {
      console.error(error);
    }
  };

  const UiMode = () => {
    const newTheme = !darkmode;
    setDarkMode(newTheme);

    storeSettings();
  };

  const handleChange = (newLanguage: string) => {
    setLanguage(newLanguage);

    storeSettings();
  };

  useEffect(() => {
    storeSettings();
  }, [darkmode, language]);

  return (
    <View style={darkmode ? styles.dark : styles.light}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          color: darkmode ? 'white' : 'black',
        }}>
        App Settings
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          color: darkmode ? 'white' : 'black',
        }}>
        {language === 'english' ? 'English' : 'Urdu'}
      </Text>

      <View style={styles.settingRow}>
        <Text style={{color: darkmode ? 'white' : 'black'}}>Dark Mode</Text>
        <Switch value={darkmode} onValueChange={UiMode} />
      </View>

      <View style={styles.settingRow}>
        <Text style={{color: darkmode ? 'white' : 'black'}}>Language</Text>
        <Switch
          value={language === 'english'}
          onValueChange={value => handleChange(value ? 'english' : 'urdu')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  light: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
    marginBottom: 20,
  },
});

export default Setting;
