import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const navigation = useNavigation();

  useEffect(()=>{
    async function getDeliveries(){
      try {
        const data = await AsyncStorage.getItem('user')
        const user = JSON.parse(data)
        const response = await api.get('/deliveries', {
          headers:{
            'x-access-token': user.token
          }
        })
        setDeliveries(response.data)
      } catch(err){
      }
    }
    getDeliveries();
  },[deliveries])
  async function acceptDelivery(id){
    try{
      const data = await AsyncStorage.getItem('user')
      const user = JSON.parse(data)
      await api.get(`/deliveries/accept/${id}`, {
        headers:{
          'x-access-token': user.token
        }
      }) 
    } catch(err){
      console.log(err)
    }
  }

  async function logout() {
    navigation.navigate('Login')
    await AsyncStorage.clear()
  
  }
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.text}>Available Deliveries</Text>
      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Entypo name='log-out' size={30} color='#FFF' style={{ marginRight: 15}}/>
      </TouchableOpacity>
    </View>
    <FlatList
      data={deliveries}
      keyExtractor={item => item.id}
      renderItem={({item})=> {
        if(item.status == 0){
          return <Card onPress={()=>acceptDelivery(item.id)} name={item.customer} address={item.address}/>
        }
      }}
    />
   </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F4F9FC'
  },
  header:{
    backgroundColor: '#004AAD',
    height: '9%',
    marginBottom: 20,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  text:{
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  }
})