import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { REGRAS_VIAS } from '../data/content';

export default function RegrasScreen() {
  const [expandedId, setExpandedId] = useState('calcada');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Onde você pode circular?</Text>
      <Text style={styles.infoText}>
        Toque nos cards para expandir as diretrizes e exigências legais para cada tipo de via:
      </Text>

      {REGRAS_VIAS.map((regra) => {
        const isExpanded = expandedId === regra.id;
        return (
          <View key={regra.id} style={[styles.card, { borderLeftColor: regra.badgeColor }]}>
            <TouchableOpacity
              style={styles.cardHeader}
              activeOpacity={0.7}
              onPress={() => toggleExpand(regra.id)}
            >
              <View style={styles.headerLeft}>
                <View style={[styles.iconContainer, { backgroundColor: `${regra.badgeColor}15` }]}>
                  <Ionicons name={regra.icone} size={22} color={regra.badgeColor} />
                </View>
                <View style={styles.headerTitles}>
                  <Text style={styles.tag}>{regra.titulo}</Text>
                  <View style={[styles.badge, { backgroundColor: `${regra.badgeColor}20` }]}>
                    <Text style={[styles.speed, { color: regra.badgeColor }]}>{regra.limite}</Text>
                  </View>
                </View>
              </View>

              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#6b7280"
              />
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.cardContent}>
                <Text style={styles.detalhesText}>{regra.detalhes}</Text>

                <View style={styles.dicasContainer}>
                  <Text style={styles.dicasTitle}>Orientações de Segurança:</Text>
                  {regra.dicas.map((dica, idx) => (
                    <View key={idx} style={styles.dicaRow}>
                      <Ionicons name="checkmark-circle-outline" size={16} color={regra.badgeColor} />
                      <Text style={styles.dicaText}>{dica}</Text>
                    </View>
                  ))}
                </View>

                <Text style={styles.baseLegal}>{regra.baseLegal}</Text>
              </View>
            )}
          </View>
        );
      })}

      <View style={styles.warningBox}>
        <Ionicons name="alert-circle" size={22} color="#dc2626" />
        <View style={styles.warningContent}>
          <Text style={styles.warningTitle}>Atenção às Rodovias!</Text>
          <Text style={styles.warningText}>
            É terminantemente proibido transitar com autopropelidos em rodovias e vias de trânsito rápido com velocidades acima de 40 km/h sem ciclovia segregada.
          </Text>
        </View>
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
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 18,
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 14,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTitles: {
    flex: 1,
  },
  tag: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginTop: 4,
  },
  speed: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 12,
  },
  detalhesText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 21,
    marginBottom: 12,
  },
  dicasContainer: {
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 8,
    gap: 8,
    marginBottom: 12,
  },
  dicasTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 2,
  },
  dicaRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  dicaText: {
    fontSize: 13,
    color: '#4b5563',
    flex: 1,
    lineHeight: 18,
  },
  baseLegal: {
    fontSize: 11,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  warningBox: {
    flexDirection: 'row',
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 10,
    padding: 14,
    marginTop: 8,
    marginBottom: 24,
    gap: 12,
    alignItems: 'flex-start',
  },
  warningContent: {
    flex: 1,
  },
  warningTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#991b1b',
    marginBottom: 2,
  },
  warningText: {
    fontSize: 12,
    color: '#b91c1c',
    lineHeight: 18,
  },
});