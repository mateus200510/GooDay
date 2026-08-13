import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import RegisterPersonal from './registropessoal';
import Entrar from './screens/entrar';
import Conta from './screens/conta';

export default function App() {
  const [screen, setScreen] = useState('splash'); // 'splash' | 'registropessoal' | 'entrar' | 'conta'

  if (screen === 'registropessoal') {
    return (
      <RegisterPersonal
        onComoDeseja={() => setScreen('conta')}
        onOtherOptions={() => setScreen('entrar')}
        onBack={() => setScreen('splash')}
      />
    );
  }

  if (screen === 'entrar') {
    return <Entrar onBack={() => setScreen('registropessoal')} />;
  }

  if (screen === 'conta') {
    return <Conta onBack={() => setScreen('registropessoal')} />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setScreen('registropessoal')}
        accessibilityLabel="Abrir tela de registro"
      >
        <Image
          source={require('./assets/logotipo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50ed28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 260,
  },
});
