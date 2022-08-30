import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import CardDelivery from '../../components/CardDelivery';
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function MyDeliveries() {
  const [myDeliveries, setMyDeliveries] = useState([]);
  const navigation = useNavigation();
  useEffect(()=>{
    async function getDeliveries() {
      try{
        const data = await AsyncStorage.getItem('user')
        const user = JSON.parse(data)
        const response = await api.get(`/couriers/${user.id}/deliveries`, {
          headers:{
            'x-access-token': user.token
          }
        })
        if(response.status == 200){
          setMyDeliveries(response.data)
        }
      } catch(err){
      }
    }
    getDeliveries()
  }, [myDeliveries])


  async function logout() {
    navigation.navigate('Login')
    await AsyncStorage.clear()
  
  }

  async function delivered(id){
    try{
      const data = await AsyncStorage.getItem('user')
      const user = JSON.parse(data)
      await api.get(`/deliveries/delivered/${id}`, {
        headers:{
          'x-access-token': user.token
        }
      })
    } catch(err){
      console.log(err)
    }
  }

 return (
  <View style={styles.container}>
  <View style={styles.header}>
    <Text style={styles.text}>Your Deliveries</Text>
    <TouchableOpacity style={styles.btn} onPress={logout}>
      <Entypo name='log-out' size={30} color='#FFF' style={{ marginRight: 15}}/>
    </TouchableOpacity>
  </View>
  <FlatList data={myDeliveries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardDelivery  onPress={()=>delivered(item.id)} name={item.customer} address={item.address} status={item.status} />
        )}
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