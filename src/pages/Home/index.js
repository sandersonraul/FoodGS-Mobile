import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <View style={styles.logo}>
      <Animatable.Image
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={{width: 220, height: 220, borderRadius: 150, alignSelf: 'center'}} 
      />
    </View>
    <Animatable.View delay={600} animation="fadeInUp" style={styles.content}>
      <Text style={styles.title}>The best food delivery service!</Text>
      <Text style={styles.text}>Sign in with account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#004AAD',
  },
  logo:{
    flex: 2,
    justifyContent: 'center',
    alignItems:'center',
  }, 
  content:{
    flex: 1,
    backgroundColor:'#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#004AAD'
  },
  text:{
    color: '#A1A1A1',
    fontSize: 15,
  },
  button:{
    position: 'absolute',
    backgroundColor:'#004AAD',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    bottom:'15%', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight:'bold'
  }
})