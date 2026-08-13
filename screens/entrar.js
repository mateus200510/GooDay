import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Entrar({ navigation, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goBack = () => {
    if (onBack) return onBack();
    if (navigation && navigation.goBack) return navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topBack} onPress={goBack} accessibilityLabel="Voltar para a tela anterior">
        <Text style={styles.topBackText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Acesse</Text>
      <Text style={styles.subheader}>com E-mail e senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.eyeButton} onPress={() => {}} accessibilityLabel="Mostrar senha">
          <Image source={require('../assets/icon.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.rowBetween}>
        <View style={styles.rememberRow}>
          <TouchableOpacity style={styles.checkbox} onPress={() => {}} />
          <Text style={styles.rememberText}>Lembrar senha</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.accessButton} onPress={() => {}}>
          <Text style={styles.accessButtonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation && navigation.navigate('Conta')}
        >
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>Ou continue com</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialIcon}><Image source={require('../assets/Google.png')} style={styles.socialImage} /></TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}><Image source={require('../assets/Facebook (1).png')} style={styles.socialImage} /></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 36,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1f2937',
  },
  subheader: {
    color: '#6b7280',
    marginTop: 6,
    marginBottom: 18,
  },
  label: {
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    height: 48,
    backgroundColor: '#eef2f7',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    marginLeft: 8,
    padding: 8,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#34d399',
    borderRadius: 4,
    marginRight: 8,
  },
  rememberText: {
    color: '#374151',
  },
  forgot: {
    color: '#6b7280',
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  accessButton: {
    backgroundColor: '#19b24a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  accessButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  registerButton: {
    borderWidth: 1,
    borderColor: '#19b24a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#19b24a',
    fontWeight: '600',
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  orText: {
    marginHorizontal: 10,
    color: '#6b7280',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  socialIcon: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  socialImage: {
    width: 44,
    height: 44,
  },
  topBack: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginBottom: 8,
    padding: 8,
  },
  topBackText: {
    fontSize: 28,
    color: '#1f2937',
  },
});
