import React from 'react';
import { View,
  StyleSheet,
  TouchableOpacity, 
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Card(props) {
 return (
   <View style={styles.container}>
      <Text style={styles.customer}>Customer: {props.name}</Text>
      <View style={styles.address}>
        <Icon style={{ color: '#004AAD'}} name='map-marker' size={22}/>
        <Text style={{ color: '#004AAD'}}>{props.address}</Text>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.buttonDetails}>
          <Text style={styles.textBtnDetails}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.textBtn}>Accept</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '90%',
    backgroundColor: '#FFF',
    height: 150,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom:15 ,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CFCFCF'
  },
  customer: {
    marginLeft: 15,
    marginTop:10,
    color: '#004AAD'
  },
  address:{
    flexDirection: 'row',
    alignItems:'center',
    marginLeft: 10,
  },

  containerBtn:{
    flexDirection:'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  buttonDetails:{
    backgroundColor:'#FFFF',
    width: '40%',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CFCFCF'
  },
  textBtnDetails:{
    color:'#004AAD',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor:'#004AAD',
    width: '40%',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textBtn:{
    color:'#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})