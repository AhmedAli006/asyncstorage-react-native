import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}: any) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');


//  const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('user');
//      if (value != null) {
//        navigation.navigate('home');
//      }
//     } catch (e) {
//       // error reading value
//     }
//   };
// useEffect(()=>{
// getData()
// },[])
  useEffect(() => {
    const checkUserData = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        navigation.navigate('home');
      }
    };

    checkUserData();
  }, []);



  const login = async () => {
  
    await AsyncStorage.setItem('user', username ).then(()=>{

    navigation.navigate('home');
    });

   
  };
  
  const showdata = () => {
    // navigation.navigate('home', {
    //   showdata: data,
    // });
  };

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Image
              style={{width: 150, height: 180, objectFit: 'contain'}}
              source={require('../assets/logo.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 15, marginLeft: 20}}>
          <Text style={s.inBoxTxt}>Create Your Account</Text>
        </View>
      <TextInput
  style={s.SgInp}
  value={username}
  onChangeText={e => setusername(e)}
  placeholder="User name"
/>
        <TextInput
          style={s.SgInp}
          value={email}
          onChangeText={e => setemail(e)}
          placeholder="Email"
        />
        <TextInput
          style={s.SgInp}
          value={password}
          onChangeText={e => setpassword(e)}
          placeholder="Password"
        />

        <TouchableOpacity onPress={login} style={s.lgBtn}>
          <Text style={s.lgbtxt}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={s.bottomBox}>
        <View style={s.row}>
          <View
            style={{
              borderRadius: 60,
              backgroundColor: '#f0f0f0',
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/google.png')}
              style={{
                width: 40,
                height: 35,
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 60,
              backgroundColor: '#f0f0f0',
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Image
              source={require('../assets/facebook.png')}
              style={{
                width: 25,
                height: 35,
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 60,
              backgroundColor: '#f0f0f0',
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/apple.png')}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={s.signuptxt}>
            Already have an Account?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('login', {screen: 'signup'});
              }}>
              <Text style={s.span}>LogIn Here</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
};
const colors = {
  dark: '#101233',
  primary: '#1f319d',
  gray: '#bdbdbd',
  white: ' white',
};

const s = StyleSheet.create({
  //   txtBox:{
  //     top:90 ,
  // right:200,
  //   },
  span: {
    color: '#1f319d',
  },
  signuptxt: {
    color: 'black',
    fontWeight: '300',
    fontSize: 17,
    marginBottom: 35,
  },

  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    // position: 'absolute',
    // top: 130,
    // left: 110,
  },

  bottomBox: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    // position: 'absolute',
    // top: 490,
    flex: 1,
  },

  lgbtxt: {
    color: '#f0f0f0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lgBtn: {
    backgroundColor: '#1f319d',
    paddingVertical: 12,
    marginHorizontal: 30,
    marginVertical: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  SgInp: {
    paddingVertical: 11,
    paddingHorizontal: 30,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'gray',
    marginVertical: 10,
    marginHorizontal: 25,
  },
  inBoxTxt: {
    color: 'black',
    fontSize: 22,
    // marginTop: 60,
    fontWeight: '600',
  },
});
export default Signup;
