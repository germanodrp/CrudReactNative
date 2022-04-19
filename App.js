import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacityBase, TouchableOpacity } from 'react-native';


export default function App() {
  
  const [pais, setPais] = useState('')

  async function buscarPais(){
    const retornoPais = await api.get('/pais')
    setPais(retornoPais.nomePais)
  }
  return (
  
  <View style={styles.container}>
     
    <TextInput
      style={styles.textInput}
      onChangeText={setPais}
      value={pais}
      placeholder='Exemplo: Alemanha'
      keyboardType={'string'}
    />
    
    <TouchableOpacity
      style={styles.Button}
      activeOpacity={0.7}
    >
      <Text style={styles.textName}>Buscar</Text>
    </TouchableOpacity>
    
    
    <Text style={styles.input}>
      Paises: {pais} 
    </Text>
 </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 25,
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    margin: 15,
    borderRadius: 20
  },
  Button:{
    backgroundColor: 'green',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
  },
  textName:
    {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});