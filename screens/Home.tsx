import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home =  ({ navigation, route  }:any) => {
     
  const [userName, setUserName] = useState('');

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('signup');
    } catch (e) {
      // clear error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        setUserName(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Welcome, {userName}</Text>
      <Button title="Logout" onPress={clearData} />
    </View>
  );
}




export default Home


