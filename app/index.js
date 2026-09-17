import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mobilidade Individual</Text>
      <Text style={styles.subtitle}>Resolução CONTRAN nº 996/2023</Text>

      <View style={styles.card}>
        <Text style={styles.cardHeader}>O que é um Autopropelido?</Text>
        <Text style={styles.cardBody}>
          Equipamento de mobilidade individual dotado de motor elétrico, sem pedal de assistência, com potência de até 1.000 W, velocidade máxima de fabricação de até 32 km/h e largura de até 70 cm. Exemplos: patinetes elétricos, monociclos e hoverboards.
        </Text>
      </View>

      <Link href="/regras" asChild>
        <View style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Regras e Limites de Velocidade →</Text>
        </View>
      </Link>

      <Link href="/equipamentos" asChild>
        <View style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Equipamentos Obrigatórios →</Text>
        </View>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 20,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  buttonPrimary: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e3a8a',
  },
  buttonSecondaryText: {
    color: '#1e3a8a',
    fontWeight: '600',
    fontSize: 15,
  },
});