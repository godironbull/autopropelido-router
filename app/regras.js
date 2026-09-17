import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';

export default function RegrasScreen() {
  const showRuleDetail = (titulo, detalhe) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${detalhe}`);
    } else {
      Alert.alert(titulo, detalhe);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Onde você pode circular?</Text>
      <Text style={styles.infoText}>
        Toque nos cards para ver as diretrizes de trânsito específicas de cada via:
      </Text>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => showRuleDetail(
          'Áreas de Pedestres / Calçadas',
          'Velocidade máxima de até 6 km/h. A prioridade de trânsito é sempre e integralmente do pedestre.'
        )}
      >
        <Text style={styles.tag}>Áreas de Pedestres e Calçadas</Text>
        <Text style={styles.speed}>Limite: até 6 km/h</Text>
        <Text style={styles.tapHint}>Toque para detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => showRuleDetail(
          'Ciclovias e Ciclofaixas',
          'Velocidade máxima de até 20 km/h. Permitida a circulação contínua respeitando bicicletas convencionais.'
        )}
      >
        <Text style={styles.tag}>Ciclovias, Ciclofaixas e Ciclorrotas</Text>
        <Text style={styles.speed}>Limite: até 20 km/h</Text>
        <Text style={styles.tapHint}>Toque para detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => showRuleDetail(
          'Vias Urbanas (Ruas)',
          'Permitido apenas em vias com limite regulamentado de até 40 km/h. O autopropelido deve rodar a no máximo 20 km/h, sempre pelo bordo da pista no mesmo sentido dos veículos.'
        )}
      >
        <Text style={styles.tag}>Ruas com Limite de até 40 km/h</Text>
        <Text style={styles.speed}>Limite: até 20 km/h</Text>
        <Text style={styles.tapHint}>Toque para detalhes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#1e3a8a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  tag: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  speed: {
    fontSize: 15,
    color: '#2563eb',
    fontWeight: 'bold',
    marginTop: 4,
  },
  tapHint: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 6,
  },
});