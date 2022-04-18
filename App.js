import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import api from './src/services/Api';

export default function App() {
  
  const [pais, setPais] = useState('')


  async function buscarPais(){
    const retornoPais = await api.get('/pais')
    setPais(retornoPais.nomePais)
  }


  
  
  return (
    <View style={styles.viewContainer}>
    <Text style={styles.text}>Pais : </Text>
   <TextInput
     style={styles.textInput}
     onChangeText={pais => setPais(pais)}
     value={pais}
     placeholder='Exemplo: Alemanha'
     keyboardType={'string'}
   />
   <separator/>
  
   <Separator />
   <Button
     onPress={()=>buscarPais()}
     title='Buscar'
     color='green'
     accessibilityLabel='Clique aqui para Buscar Pais'
   />
   
   <Separator />
   <Text style={styles.input}>
    Paises: {pais} 
   </Text>
 </View>
  );
}
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 25,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    margin: 15,
    borderRadius: 20
  }
});