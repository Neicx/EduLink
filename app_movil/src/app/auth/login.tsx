import {Text, View, TextInput, Button} from 'react-native';

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Usuario</Text>
      <TextInput style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1, margin: 10}} />
      <Text>Contraseña</Text>
      <TextInput style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1, margin: 10}} />
      <Button title="Entrar" onPress={() => console.log('Entrar')} />
    </View>
  );
};

export default Login;
