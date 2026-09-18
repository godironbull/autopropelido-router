import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SimuladorScreen() {
  const router = useRouter();

  // Estados das respostas
  const [aceleracao, setAceleracao] = useState(null); // 'pedal' | 'acelerador'
  const [velocidade, setVelocidade] = useState(null); // 'ate_32' | 'ate_50' | 'acima_50'
  const [potencia, setPotencia] = useState(null); // 'ate_1000' | 'ate_4000' | 'acima_4000'
  const [formato, setFormato] = useState(null); // 'patinete' | 'bicicleta' | 'scooter_veiculo'

  const todasRespondidas = aceleracao && velocidade && potencia && formato;

  // Lógica de cálculo conforme Resolução CONTRAN 996/2023
  const calcularResultado = () => {
    if (!todasRespondidas) return null;

    if (velocidade === 'acima_50' || potencia === 'acima_4000') {
      return {
        tipo: 'Motocicleta / Motoneta Elétrica',
        cor: '#991b1b',
        badgeBg: '#fee2e2',
        icone: 'speedometer',
        descricao:
          'Seu veículo ultrapassa 50 km/h de fábrica ou 4.000 W de potência. Enquadra-se como veículo automotor convencional.',
        cnh: 'SIM — CNH Categoria A',
        placa: 'SIM — Emplacamento e licenciamento obrigatórios no Detran',
        capacete: 'SIM — Capacete motociclístico fechado com viseira',
        vias: 'Pista de rolamento com veículos normais. PROIBIDO em ciclovias e calçadas.',
        detalhe: 'Sujeito a todas as penalidades e exigências do Código de Trânsito Brasileiro (CTB).',
      };
    }

    if (
      velocidade === 'ate_50' ||
      potencia === 'ate_4000' ||
      (aceleracao === 'acelerador' && formato === 'scooter_veiculo')
    ) {
      return {
        tipo: 'Ciclomotor',
        cor: '#dc2626',
        badgeBg: '#fef2f2',
        icone: 'flash',
        descricao:
          'Veículo de até 50 km/h de fabricação e até 4.000 W (4 kW) com acelerador manual.',
        cnh: 'SIM — Exige CNH Categoria A ou ACC (Autorização para Conduzir Ciclomotores)',
        placa: 'SIM — Exige registro e placa no Detran',
        capacete: 'SIM — Capacete de moto com viseira/óculos de proteção',
        vias: 'Apenas pistas comuns de trânsito. TOTALMENTE PROIBIDO em ciclovias e calçadas.',
        detalhe:
          'Desde a Res. 996/2023, ciclomotores elétricos não podem trafegar em ciclovias mesmo com velocidade baixa.',
      };
    }

    if (aceleracao === 'pedal' && formato === 'bicicleta') {
      return {
        tipo: 'Bicicleta Elétrica (Pedelec)',
        cor: '#16a34a',
        badgeBg: '#dcfce7',
        icone: 'bicycle',
        descricao:
          'Bicicleta dotada de motor auxiliar de até 1.000 W que só funciona enquanto você pedala (sem acelerador manual contínuo).',
        cnh: 'NÃO — Livre de habilitação',
        placa: 'NÃO — Sem necessidade de emplacamento',
        capacete: 'Recomendado capacete de ciclista',
        vias: 'Ciclovias, ciclofaixas e vias urbanas compartilhadas.',
        detalhe: 'O motor deve cortar o auxílio automaticamente ao atingir 32 km/h.',
      };
    }

    return {
      tipo: 'Autopropelido de Mobilidade Individual',
      cor: '#2563eb',
      badgeBg: '#dbeafe',
      icone: 'walk',
      descricao:
        'Patinete elétrico, monociclo, hoverboard ou equipamento similar de até 1.000 W, até 32 km/h e largura de até 70 cm.',
      cnh: 'NÃO — Não exige CNH nem ACC',
      placa: 'NÃO — Não precisa de placa ou registro',
      capacete: 'Recomendado capacete ciclístico para segurança',
      vias: 'Calçadas (até 6 km/h), Ciclovias (até 20 km/h) e Ruas de até 40 km/h (rodando a no máx 20 km/h).',
      detalhe: 'Deve obrigatoriamente possuir os equipamentos de segurança previstos pelo CONTRAN.',
    };
  };

  const resultado = calcularResultado();

  const resetar = () => {
    setAceleracao(null);
    setVelocidade(null);
    setPotencia(null);
    setFormato(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Simulador de Enquadramento</Text>
        <Text style={styles.subtitle}>
          Descubra se o seu veículo elétrico é um Autopropelido, Bike Elétrica ou Ciclomotor pela Resolução CONTRAN nº 996/2023.
        </Text>
      </View>

      {/* Pergunta 1: Formato / Tipo do veículo */}
      <View style={styles.questionCard}>
        <Text style={styles.questionNumber}>1. Formato do veículo</Text>
        <Text style={styles.questionTitle}>Qual o tipo físico do seu veículo elétrico?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.optionButton, formato === 'patinete' && styles.optionSelected]}
            onPress={() => setFormato('patinete')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={formato === 'patinete' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, formato === 'patinete' && styles.optionTextSelected]}>
              Patinete, hoverboard ou monociclo (largura até 70 cm)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, formato === 'bicicleta' && styles.optionSelected]}
            onPress={() => setFormato('bicicleta')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={formato === 'bicicleta' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, formato === 'bicicleta' && styles.optionTextSelected]}>
              Bicicleta convencional (com pedais e quadro de bike)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, formato === 'scooter_veiculo' && styles.optionSelected]}
            onPress={() => setFormato('scooter_veiculo')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={formato === 'scooter_veiculo' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, formato === 'scooter_veiculo' && styles.optionTextSelected]}>
              Scooter grande, motoneta ou assento veicular amplo
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pergunta 2: Aceleração */}
      <View style={styles.questionCard}>
        <Text style={styles.questionNumber}>2. Modo de aceleração</Text>
        <Text style={styles.questionTitle}>Como o motor elétrico é ativado?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.optionButton, aceleracao === 'pedal' && styles.optionSelected]}
            onPress={() => setAceleracao('pedal')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={aceleracao === 'pedal' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, aceleracao === 'pedal' && styles.optionTextSelected]}>
              Apenas pedal assistido (o motor só auxilia enquanto pedalo)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, aceleracao === 'acelerador' && styles.optionSelected]}
            onPress={() => setAceleracao('acelerador')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={aceleracao === 'acelerador' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, aceleracao === 'acelerador' && styles.optionTextSelected]}>
              Acelerador manual no punho ou polegar (acelera sem pedalar)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pergunta 3: Velocidade máxima de fábrica */}
      <View style={styles.questionCard}>
        <Text style={styles.questionNumber}>3. Velocidade máxima</Text>
        <Text style={styles.questionTitle}>Qual a velocidade máxima declarada pelo fabricante?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.optionButton, velocidade === 'ate_32' && styles.optionSelected]}
            onPress={() => setVelocidade('ate_32')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={velocidade === 'ate_32' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, velocidade === 'ate_32' && styles.optionTextSelected]}>
              Até 32 km/h
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, velocidade === 'ate_50' && styles.optionSelected]}
            onPress={() => setVelocidade('ate_50')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={velocidade === 'ate_50' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, velocidade === 'ate_50' && styles.optionTextSelected]}>
              Entre 33 km/h e 50 km/h
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, velocidade === 'acima_50' && styles.optionSelected]}
            onPress={() => setVelocidade('acima_50')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={velocidade === 'acima_50' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, velocidade === 'acima_50' && styles.optionTextSelected]}>
              Acima de 50 km/h
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pergunta 4: Potência do motor */}
      <View style={styles.questionCard}>
        <Text style={styles.questionNumber}>4. Potência do motor</Text>
        <Text style={styles.questionTitle}>Qual a potência nominal do motor elétrico?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.optionButton, potencia === 'ate_1000' && styles.optionSelected]}
            onPress={() => setPotencia('ate_1000')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={potencia === 'ate_1000' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, potencia === 'ate_1000' && styles.optionTextSelected]}>
              Até 1.000 W (1 kW)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, potencia === 'ate_4000' && styles.optionSelected]}
            onPress={() => setPotencia('ate_4000')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={potencia === 'ate_4000' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, potencia === 'ate_4000' && styles.optionTextSelected]}>
              Entre 1.001 W e 4.000 W (4 kW)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, potencia === 'acima_4000' && styles.optionSelected]}
            onPress={() => setPotencia('acima_4000')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="radio-button-on"
              size={18}
              color={potencia === 'acima_4000' ? '#1e3a8a' : '#9ca3af'}
            />
            <Text style={[styles.optionText, potencia === 'acima_4000' && styles.optionTextSelected]}>
              Acima de 4.000 W (ou motor a combustão)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card de Resultado */}
      {resultado ? (
        <View style={[styles.resultCard, { borderColor: resultado.cor }]}>
          <View style={[styles.resultHeader, { backgroundColor: resultado.badgeBg }]}>
            <Ionicons name={resultado.icone} size={28} color={resultado.cor} />
            <View style={styles.resultTitleWrap}>
              <Text style={styles.resultLabel}>Classificação Oficial:</Text>
              <Text style={[styles.resultCategory, { color: resultado.cor }]}>
                {resultado.tipo}
              </Text>
            </View>
          </View>

          <View style={styles.resultBody}>
            <Text style={styles.resultDesc}>{resultado.descricao}</Text>

            <View style={styles.requirementsList}>
              <View style={styles.reqItem}>
                <Ionicons
                  name={resultado.placa.startsWith('SIM') ? 'alert-circle' : 'checkmark-circle'}
                  size={20}
                  color={resultado.placa.startsWith('SIM') ? '#dc2626' : '#16a34a'}
                />
                <View style={styles.reqContent}>
                  <Text style={styles.reqTitle}>Emplacamento / Detran:</Text>
                  <Text style={styles.reqValue}>{resultado.placa}</Text>
                </View>
              </View>

              <View style={styles.reqItem}>
                <Ionicons
                  name={resultado.cnh.startsWith('SIM') ? 'alert-circle' : 'checkmark-circle'}
                  size={20}
                  color={resultado.cnh.startsWith('SIM') ? '#dc2626' : '#16a34a'}
                />
                <View style={styles.reqContent}>
                  <Text style={styles.reqTitle}>Habilitação (CNH/ACC):</Text>
                  <Text style={styles.reqValue}>{resultado.cnh}</Text>
                </View>
              </View>

              <View style={styles.reqItem}>
                <Ionicons name="shield-checkmark" size={20} color="#2563eb" />
                <View style={styles.reqContent}>
                  <Text style={styles.reqTitle}>Capacete:</Text>
                  <Text style={styles.reqValue}>{resultado.capacete}</Text>
                </View>
              </View>

              <View style={styles.reqItem}>
                <Ionicons name="map-outline" size={20} color="#4b5563" />
                <View style={styles.reqContent}>
                  <Text style={styles.reqTitle}>Onde pode circular:</Text>
                  <Text style={styles.reqValue}>{resultado.vias}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.legalNote}>{resultado.detalhe}</Text>

            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => router.push('/equipamentos')}
                activeOpacity={0.8}
              >
                <Text style={styles.btnPrimaryText}>Ver Checklist de Equipamentos →</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnReset} onPress={resetar} activeOpacity={0.8}>
                <Text style={styles.btnResetText}>Refazer Simulação</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.pendingCard}>
          <Ionicons name="information-circle-outline" size={22} color="#6b7280" />
          <Text style={styles.pendingText}>
            Responda as 4 perguntas acima para ver o diagnóstico e as exigências legais do seu veículo.
          </Text>
        </View>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
    lineHeight: 20,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  questionNumber: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563eb',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  optionsContainer: {
    gap: 8,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
  },
  optionSelected: {
    borderColor: '#1e3a8a',
    backgroundColor: '#eff6ff',
  },
  optionText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 10,
    flex: 1,
  },
  optionTextSelected: {
    color: '#1e3a8a',
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 2,
    overflow: 'hidden',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  resultTitleWrap: {
    marginLeft: 12,
    flex: 1,
  },
  resultLabel: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  resultCategory: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultBody: {
    padding: 18,
  },
  resultDesc: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 21,
    marginBottom: 16,
  },
  requirementsList: {
    gap: 12,
    marginBottom: 16,
  },
  reqItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 8,
  },
  reqContent: {
    marginLeft: 10,
    flex: 1,
  },
  reqTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
  },
  reqValue: {
    fontSize: 13,
    color: '#4b5563',
    marginTop: 2,
    lineHeight: 18,
  },
  legalNote: {
    fontSize: 12,
    color: '#6b7280',
    fontStyle: 'italic',
    marginBottom: 18,
    lineHeight: 18,
  },
  actionButtons: {
    gap: 10,
  },
  btnPrimary: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  btnReset: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnResetText: {
    color: '#4b5563',
    fontWeight: '600',
    fontSize: 14,
  },
  pendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  pendingText: {
    fontSize: 13,
    color: '#6b7280',
    flex: 1,
    lineHeight: 18,
  },
});
