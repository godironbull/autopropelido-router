import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COMPARATIVO_CATEGORIAS, FAQ_ITENS } from '../data/content';

export default function ComparativoScreen() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [tabAtiva, setTabAtiva] = useState('autopropelido');

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const categoriaSelecionada = COMPARATIVO_CATEGORIAS.find((c) => c.id === tabAtiva);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Comparativo & Legislação</Text>
      <Text style={styles.subheading}>
        Entenda as diferenças fundamentais estabelecidas pela Resolução CONTRAN nº 996/2023:
      </Text>

      {/* Seletor de Categorias */}
      <View style={styles.tabsContainer}>
        {COMPARATIVO_CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.tabButton,
              tabAtiva === cat.id && { backgroundColor: cat.cor, borderColor: cat.cor },
            ]}
            onPress={() => setTabAtiva(cat.id)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                tabAtiva === cat.id && styles.tabTextActive,
              ]}
              numberOfLines={1}
            >
              {cat.categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Card da Categoria Selecionada */}
      {categoriaSelecionada && (
        <View style={[styles.detailCard, { borderTopColor: categoriaSelecionada.cor }]}>
          <View style={styles.detailHeader}>
            <Text style={[styles.detailTitle, { color: categoriaSelecionada.cor }]}>
              {categoriaSelecionada.categoria}
            </Text>
            <Text style={styles.detailSubtitle}>{categoriaSelecionada.subtitulo}</Text>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Potência Máxima</Text>
                <Text style={styles.gridValue}>{categoriaSelecionada.potencia}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Velocidade Máxima</Text>
                <Text style={styles.gridValue}>{categoriaSelecionada.velocidade}</Text>
              </View>
            </View>

            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Acelerador</Text>
                <Text style={styles.gridValue}>{categoriaSelecionada.acelerador}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Dimensões</Text>
                <Text style={styles.gridValue}>{categoriaSelecionada.dimensoes}</Text>
              </View>
            </View>

            <View style={styles.highlightSection}>
              <View style={styles.badgeRow}>
                <Ionicons
                  name={categoriaSelecionada.cnh.startsWith('SIM') ? 'alert-circle' : 'checkmark-circle'}
                  size={20}
                  color={categoriaSelecionada.cnh.startsWith('SIM') ? '#dc2626' : '#16a34a'}
                />
                <Text style={styles.highlightText}>
                  <Text style={styles.boldText}>Habilitação: </Text>
                  {categoriaSelecionada.cnh}
                </Text>
              </View>

              <View style={styles.badgeRow}>
                <Ionicons
                  name={categoriaSelecionada.emplacamento.startsWith('SIM') ? 'alert-circle' : 'checkmark-circle'}
                  size={20}
                  color={categoriaSelecionada.emplacamento.startsWith('SIM') ? '#dc2626' : '#16a34a'}
                />
                <Text style={styles.highlightText}>
                  <Text style={styles.boldText}>Emplacamento: </Text>
                  {categoriaSelecionada.emplacamento}
                </Text>
              </View>

              <View style={styles.badgeRow}>
                <Ionicons name="shield-checkmark" size={20} color="#2563eb" />
                <Text style={styles.highlightText}>
                  <Text style={styles.boldText}>Capacete: </Text>
                  {categoriaSelecionada.capacete}
                </Text>
              </View>

              <View style={styles.badgeRow}>
                <Ionicons name="navigate-circle-outline" size={20} color="#4b5563" />
                <Text style={styles.highlightText}>
                  <Text style={styles.boldText}>Vias Permitidas: </Text>
                  {categoriaSelecionada.ondeRodar}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Seção FAQ */}
      <Text style={styles.faqTitle}>Dúvidas Frequentes (FAQ)</Text>
      <Text style={styles.faqSubtitle}>Toque nas perguntas para ler a resposta fundamentada na lei:</Text>

      <View style={styles.faqContainer}>
        {FAQ_ITENS.map((faq) => {
          const isOpen = activeFaq === faq.id;
          return (
            <View key={faq.id} style={styles.faqItem}>
              <TouchableOpacity
                style={styles.faqHeader}
                onPress={() => toggleFaq(faq.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.faqQuestion}>{faq.pergunta}</Text>
                <Ionicons
                  name={isOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#4b5563"
                />
              </TouchableOpacity>

              {isOpen && (
                <View style={styles.faqBody}>
                  <Text style={styles.faqAnswer}>{faq.resposta}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    maxWidth: 640,
    width: '100%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  subheading: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
    marginBottom: 16,
    lineHeight: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4b5563',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderTopWidth: 5,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  detailHeader: {
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    paddingBottom: 10,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailSubtitle: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  infoGrid: {
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 8,
  },
  gridLabel: {
    fontSize: 11,
    color: '#6b7280',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  gridValue: {
    fontSize: 13,
    color: '#1f2937',
    marginTop: 3,
    fontWeight: '500',
  },
  highlightSection: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    gap: 10,
    marginTop: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  highlightText: {
    fontSize: 13,
    color: '#374151',
    flex: 1,
    lineHeight: 18,
  },
  boldText: {
    fontWeight: '700',
    color: '#111827',
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  faqSubtitle: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 14,
  },
  faqContainer: {
    gap: 10,
    marginBottom: 30,
  },
  faqItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
    marginRight: 10,
  },
  faqBody: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 10,
  },
  faqAnswer: {
    fontSize: 13,
    color: '#4b5563',
    lineHeight: 20,
  },
});
