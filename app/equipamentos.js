import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function EquipamentosScreen() {
  const equipamentos = [
    { nome: 'Velocímetro', desc: 'Indicador ou mostrador de velocidade em tempo real.' },
    { nome: 'Campainha ou buzina', desc: 'Dispositivo sonoro para alertar pedestres e veículos.' },
    { nome: 'Sinalização dianteira', desc: 'Luz branca ou amarela para condução noturna.' },
    { nome: 'Sinalização traseira', desc: 'Luz ou refletor de cor vermelha.' },
    { nome: 'Sinalizadores laterais', desc: 'Refletores nas laterais e pedais/apoios de pé.' },
    { nome: 'Espelho retrovisor', desc: 'Obrigatório do lado esquerdo do condutor.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Equipamentos Exigidos</Text>
      <Text style={styles.infoText}>
        Itens indispensáveis conforme regulamentação de trânsito para autopropelidos:
      </Text>

      <View style={styles.cardList}>
        {equipamentos.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.checkIcon}>✓</Text>
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.nome}</Text>
              <Text style={styles.itemDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
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
  cardList: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  checkIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
    marginRight: 12,
    marginTop: 2,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  itemDesc: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
    lineHeight: 18,
  },
});