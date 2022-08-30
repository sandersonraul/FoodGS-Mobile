import React from 'react';
import { View,
  StyleSheet,
  TouchableOpacity, 
  Text
} from 'react-native';


export default function CardDelivery(props) {
 return (
   <View style={styles.container}>
      <Text style={{ color: '#004AAD', fontWeight: 'bold', marginTop:10}}>Customer: {props.name}</Text>
      <View style={styles.address}>
        <Text style={{ color: '#004AAD', fontWeight: 'bold'}}>Address: {props.address}</Text>
      </View>
      {props.status == 1 ? 
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.textBtn}>Delivered</Text>
          </TouchableOpacity>
        </View>
      : <View style={styles.containerBtn}>
      <TouchableOpacity disabled={true} style={styles.button} onPress={props.onPress}>
        <Text style={styles.textBtn}>Delivered</Text>
      </TouchableOpacity>
    </View> }
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '90%',
    backgroundColor: '#FFF',
    height: 260,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom:15 ,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CFCFCF'
  },
  containerBtn:{
    flexDirection:'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
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
    backgroundColor:'#29AD6D',
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