import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
 
  Image,

} from 'react-native';


const Login = ({ navigation }:any) => {
  
  return (
    <>

      
      <View style={{backgroundColor: 'white',}}>
        <View style={{alignItems: 'center',}}>
            <Image style={{width:180,height:180, objectFit:'contain',marginVertical: 40,}} source={require('../assets/logo.png')}
/>
        </View>
        <View style={{marginBottom: 15,marginLeft: 20, }}>
          <Text style={s.inBoxTxt}>Login To Your Account</Text>
   
        </View>
        
        <TextInput style={s.SgInp} placeholder="Email" />
        <TextInput style={s.SgInp} placeholder="Password" />


        <TouchableOpacity style={s.lgBtn}>
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
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          
              <Text style={s.signuptxt}>
              Don't have an account? <TouchableOpacity onPress={()=>{
                navigation.navigate("signup")

              }}><Text style={s.span}>Sign Up Here</Text></TouchableOpacity>
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
  white: ' #f0f0f0',
};

const s = StyleSheet.create({

  span: {
    color: colors.primary,
  },
  signuptxt: {
    color: colors.dark,
    fontWeight: '300',
    fontSize:17,
    marginBottom: 35,
  },

  row: {
    justifyContent: 'center',
alignItems: 'center',
    flexDirection: 'row',
    flex:1,
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
    backgroundColor: colors.primary,
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
    borderColor: colors.gray,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  inBoxTxt: {
    color: colors.dark,
    fontSize: 22,
    // marginTop: 60,
    fontWeight: '600',
  },




 
});
export default Login;
