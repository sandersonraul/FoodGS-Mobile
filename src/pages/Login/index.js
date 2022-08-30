import React, { useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import Input from '../../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  async function signIn(){
    const data = { email, password }
    try{
      const res = await api.get("/login", {
        auth:{
          username: data.email,
          password: data.password
        }
      })
      if(res.status === 200){
        await AsyncStorage.setItem('user', JSON.stringify({
          id: res.data[0].id,
          name: res.data[0].name,
          email: res.data[0].email,
          token: res.data[1].token,
        }))
        navigation.navigate('Deliveries')
      }
    } catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={{width: 220, height: 220, borderRadius: 150, alignSelf: 'center', marginTop: 55}} 
      />
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.textHeader}>Welcome</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.form}>
        <Input
         iconName={'account'}
         placeholder='Email'
         value={email}
         onChangeText={setEmail}
         autoCapitalize='none'
         keyboardType='email-address'
        />
        <Input
         iconName={'lock-outline'} 
         placeholder='Password' 
         secureTextEntry
         onChangeText={setPassword}
         autoCapitalize='none'
        />
      </Animatable.View>
      <Animatable.View animation="fadeInUp">
        <TouchableOpacity onPress={()=>signIn()} style={styles.button}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Don't have account? Create now!</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header:{},
  textHeader:{
    marginBottom: 45,
    fontSize: 30,
    fontWeight: 'bold',
  },
  form:{
    height: 130,
    justifyContent:'space-around',
  },
  button:{
    backgroundColor: '#004AAD',
    width: 350,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
  },
  textBtn:{
    fontSize: 18,
    color: '#FFF',
    fontWeight:'bold',
    alignSelf:'center'
  },
  register:{
    marginTop: 10
  },
  registerText:{
    color:'#A1A1A1'
  }

})