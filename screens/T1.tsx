import { View, Text,TextInput ,Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useState} from 'react'

const T1 = () => {
const [name,setname] = useState('');
const [data,setdata] = useState('');


const storeData = async () => {
  try {
    await AsyncStorage.setItem('name', name);
  } catch (e) {
    // saving error
  }
  
};
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('name');
    if (value !== null) {
      // value previously stored
      setdata(value)

    }
  } catch (e) {
    // error reading value
  }
};
  return (
    <View style={{flex:1,justifyContent: 'center',}}>
        <Text>{data}</Text>

      <TextInput style={{borderWidth: 1, padding:10,margin: 15,}} placeholder='name' onChangeText={setname}/>
 

      <Button title='save'  onPress={storeData}/>
      <Button title='get' onPress={getData}/>
    </View>
  )
}

export default T1