import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
} from 'react-native';

export default function Conta({ navigation, onBack }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	const goBack = () => {
		if (onBack) return onBack();
		if (navigation && navigation.goBack) return navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.topBack} onPress={goBack} accessibilityLabel="Voltar">
				<Text style={styles.topBackText}>←</Text>
			</TouchableOpacity>

			<Text style={styles.header}>Cadastrar</Text>
			<Text style={styles.subheader}>Crie sua conta para continuar</Text>

			<Text style={styles.label}>Nome</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu nome"
				value={name}
				onChangeText={setName}
			/>

			<Text style={styles.label}>E-mail</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu e-mail"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>

			<Text style={styles.label}>Senha</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite sua senha"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>

			<Text style={styles.label}>Repita a senha</Text>
			<TextInput
				style={styles.input}
				placeholder="Repita sua senha"
				value={confirm}
				onChangeText={setConfirm}
				secureTextEntry
			/>

			<TouchableOpacity style={styles.registerButton} onPress={() => {}} accessibilityLabel="Cadastrar">
				<Text style={styles.registerButtonText}>Cadastrar</Text>
			</TouchableOpacity>

			<View style={styles.orRow}>
				<View style={styles.line} />
				<Text style={styles.orText}>Ou continue com</Text>
				<View style={styles.line} />
			</View>

			<View style={styles.socialRow}>
				<TouchableOpacity style={styles.socialIcon} onPress={() => {}}>
					<Image source={require('../assets/Google.png')} style={styles.socialImage} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialIcon} onPress={() => {}}>
					<Image source={require('../assets/Facebook (1).png')} style={styles.socialImage} />
				</TouchableOpacity>
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
	topBack: {
		alignSelf: 'flex-start',
		marginLeft: 16,
		marginBottom: 8,
		padding: 8,
	},
	topBackText: {
		fontSize: 24,
		color: '#1f2937',
	},
	header: {
		fontSize: 28,
		fontWeight: '700',
		color: '#111827',
	},
	subheader: {
		color: '#6b7280',
		marginTop: 6,
		marginBottom: 12,
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
	registerButton: {
		backgroundColor: '#19b24a',
		paddingVertical: 14,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 6,
	},
	registerButtonText: {
		color: '#fff',
		fontWeight: '700',
		fontSize: 16,
	},
	orRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 18,
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
});

