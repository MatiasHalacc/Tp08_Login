import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const imgMedio = require('./assets/FotoMedio.png')

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={{textAlign: 'center', marginTop: '20%', color: 'white', fontSize: 20}} >Login App (Halac)</Text>
      </View>
      <Image source = {imgMedio} style={styles.image}></Image>
      <TextInput style={styles.inputMail} placeholder='Email' />
      <TextInput secureTextEntry style={styles.inputPass} placeholder='Contraseña'/>
      <TouchableOpacity style={styles.botonIngreso}><Text style={{alignSelf: 'center', color: 'white'}}>INGRESAR</Text></TouchableOpacity>
      <Text style={{marginTop: '5%', fontWeight: '600', alignSelf: 'center'}}>Olvidaste la clave?</Text>
      <TouchableOpacity style={{marginTop: '5%', alignSelf: 'center'}}><Text style={{fontWeight: '600'}}>Crear Cuenta</Text></TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#9455f4',
    height: '13%'
  },
  image: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  inputMail: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    height: '5%',
    alignSelf: 'center',
    marginTop: '8%',
    padding: 10,
  },
  inputPass: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    height: '5%',
    alignSelf: 'center',
    marginTop: '2%',
    padding: 10,
  },
  botonIngreso: {
    alignSelf: 'center',
    backgroundColor: '#9455f4',
    marginTop: '10%',
    width: '80%',
    height: '5%',
    borderRadius: 5,
    justifyContent:"center",
    alignContent:"center"
  }
});
