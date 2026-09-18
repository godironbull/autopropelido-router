import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.badgeNorma}>
          <Text style={styles.badgeNormaText}>Legislação Atualizada</Text>
        </View>
        <Text style={styles.title}>Mobilidade Elétrica</Text>
        <Text style={styles.subtitle}>
          Guia completo da Resolução CONTRAN nº 996/2023 para autopropelidos, patinetes e bicicletas elétricas.
        </Text>
      </View>

      {/* Destaque Principal: Simulador */}
      <TouchableOpacity
        style={styles.heroCard}
        activeOpacity={0.85}
        onPress={() => router.push('/simulador')}
      >
        <View style={styles.heroHeader}>
          <View style={styles.heroBadge}>
            <Ionicons name="sparkles" size={13} color="#ffffff" />
            <Text style={styles.heroBadgeText}>NOVO SIMULADOR</Text>
          </View>
          <Ionicons name="arrow-forward" size={20} color="#ffffff" />
        </View>

        <Text style={styles.heroTitle}>Qual é a categoria do seu veículo?</Text>
        <Text style={styles.heroSubtitle}>
          Responda 4 perguntas rápidas para saber se o seu veículo precisa de placa no Detran e CNH/ACC ou se roda livre!
        </Text>

        <View style={styles.heroBtn}>
          <Text style={styles.heroBtnText}>Iniciar Diagnóstico Gratuito →</Text>
        </View>
      </TouchableOpacity>

      {/* Métricas da Lei */}
      <View style={styles.metricsGrid}>
        <View style={styles.metricItem}>
          <Ionicons name="flash-outline" size={20} color="#2563eb" />
          <Text style={styles.metricValue}>1.000 W</Text>
          <Text style={styles.metricLabel}>Potência Máx.</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="speedometer-outline" size={20} color="#16a34a" />
          <Text style={styles.metricValue}>32 km/h</Text>
          <Text style={styles.metricLabel}>Velocidade Máx.</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="resize-outline" size={20} color="#d97706" />
          <Text style={styles.metricValue}>70 cm</Text>
          <Text style={styles.metricLabel}>Largura Máx.</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#7c3aed" />
          <Text style={styles.metricValue}>Sem Placa</Text>
          <Text style={styles.metricLabel}>Isento no Detran</Text>
        </View>
      </View>

      {/* Seção de Funcionalidades */}
      <Text style={styles.sectionTitle}>Navegue pelo Guia</Text>

      <TouchableOpacity
        style={styles.navCard}
        activeOpacity={0.7}
        onPress={() => router.push('/regras')}
      >
        <View style={[styles.navIconBox, { backgroundColor: '#eff6ff' }]}>
          <Ionicons name="map-outline" size={24} color="#2563eb" />
        </View>
        <View style={styles.navContent}>
          <Text style={styles.navTitle}>Regras e Vias Permitidas</Text>
          <Text style={styles.navDesc}>
            Onde circular: limites em calçadas (6 km/h), ciclovias (20 km/h) e ruas.
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navCard}
        activeOpacity={0.7}
        onPress={() => router.push('/equipamentos')}
      >
        <View style={[styles.navIconBox, { backgroundColor: '#f0fdf4' }]}>
          <Ionicons name="checkbox-outline" size={24} color="#16a34a" />
        </View>
        <View style={styles.navContent}>
          <Text style={styles.navTitle}>Checklist de Equipamentos</Text>
          <Text style={styles.navDesc}>
            Velocímetro, retrovisor, iluminação e buzina obrigatórios pelo CONTRAN.
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navCard}
        activeOpacity={0.7}
        onPress={() => router.push('/comparativo')}
      >
        <View style={[styles.navIconBox, { backgroundColor: '#fef3c7' }]}>
          <Ionicons name="git-compare-outline" size={24} color="#d97706" />
        </View>
        <View style={styles.navContent}>
          <Text style={styles.navTitle}>Comparativo & Dúvidas (FAQ)</Text>
          <Text style={styles.navDesc}>
            Autopropelido vs Bike Elétrica vs Ciclomotor e respostas sobre carona, idade e multas.
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
      </TouchableOpacity>

      {/* Card O que é Autopropelido */}
      <View style={styles.infoCard}>
        <View style={styles.infoCardHeader}>
          <Ionicons name="information-circle" size={22} color="#1e3a8a" />
          <Text style={styles.infoCardTitle}>O que é um Autopropelido?</Text>
        </View>
        <Text style={styles.infoCardBody}>
          É o equipamento de mobilidade individual dotado de motor elétrico (como patinetes elétricos, monociclos e hoverboards), com potência de até 1.000 W, velocidade máxima de fabricação de até 32 km/h e largura de até 70 cm. Não exige CNH nem emplacamento.
        </Text>
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
  header: {
    marginBottom: 20,
  },
  badgeNorma: {
    alignSelf: 'flex-start',
    backgroundColor: '#dbeafe',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  badgeNormaText: {
    fontSize: 11,
    color: '#1e40af',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
    lineHeight: 20,
  },
  heroCard: {
    backgroundColor: '#1e3a8a',
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  heroBadgeText: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: '700',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#bfdbfe',
    lineHeight: 19,
    marginBottom: 16,
  },
  heroBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  heroBtnText: {
    color: '#1e3a8a',
    fontWeight: '700',
    fontSize: 14,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  metricItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  metricValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  metricLabel: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  navCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  navIconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  navContent: {
    flex: 1,
    marginRight: 8,
  },
  navTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  navDesc: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
    lineHeight: 16,
  },
  infoCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginTop: 10,
    marginBottom: 24,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  infoCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1e3a8a',
  },
  infoCardBody: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
  },
});