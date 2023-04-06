import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function App() {


  return (

    <View style={styles.container}>
     <Text style={styles.titulo}>SEJA BEM VINDO</Text>
      
      <View style={styles.box}></View>
      <FontAwesome5 name="house-user" size={24} color="black" />
      <Text> Digite seu Endereço:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='Rua amarela 123'
      />
      <View style={styles.box2}></View>
      <Fontisto name="blood-drop" size={24} color="red" />
      <Text> Digite seu tipo sanguíneo:</Text>
      <TextInput
        style={styles.input}
        placeholder='Ex: A, B, AB, O (+ ou -)'
        maxLength={3}
      />
      <View style={styles.box3}></View>
      <MaterialCommunityIcons name="key-outline" size={24} color="black" />
      <Text> Digite seu CPF:</Text>
      <TextInput
        style={styles.input}
        placeholder='"000.000.000.00"'
        keyboardType='numeric'
        maxLength={14}
      />

      <Text> Uma bolsa de sangue pode salvar até 4 vidas!!!</Text>
      <View style={styles.botão}>
        <Button
          title="CADASTRE-SE"
          onPress={() => Alert.alert("Seu cadastro foi realizado com sucesso")}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    borderWidth: 1,
    BorderColor: 'white',
    padding: 4,
    margin: 7,
    width: 200,
    marginBottom: 50,
  },
    box2: {
      borderWidth: 1,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      
    },
    Box3: {
      borderWidth: 1,
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      
      
    },
    titulo: {
     
     marginTop: 150,
    }





  }
);