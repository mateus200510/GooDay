import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RegisterPersonal({ onOtherOptions } ) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/casual_dog.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.googleButton} onPress={() => {}} accessibilityLabel="Acessar com Google">
        <Image source={require('./assets/Google.png')} style={styles.googleIcon} resizeMode="contain" />
        <Text style={styles.googleButtonText}>Como deseja acessar?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlineButton} onPress={onOtherOptions} accessibilityLabel="Outras opções">
        <Text style={styles.outlineButtonText}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  illustration: {
    width: '90%',
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 6,
    marginBottom: 18,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#19b24a',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 8,
  },
  googleIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  outlineButton: {
    marginTop: 12,
    width: '90%',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#19b24a',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  outlineButtonText: {
    color: '#19b24a',
    fontSize: 16,
    fontWeight: '600',
  },
});
