import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EQUIPAMENTOS_OBRIGATORIOS } from '../data/content';

export default function EquipamentosScreen() {
  const [marcados, setMarcados] = useState({});

  const toggleItem = (id) => {
    setMarcados((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const total = EQUIPAMENTOS_OBRIGATORIOS.length;
  const concluidos = EQUIPAMENTOS_OBRIGATORIOS.filter((item) => marcados[item.id]).length;
  const percentual = Math.round((concluidos / total) * 100);

  const marcarTodos = () => {
    const todos = {};
    EQUIPAMENTOS_OBRIGATORIOS.forEach((item) => {
      todos[item.id] = true;
    });
    setMarcados(todos);
  };

  const limparTodos = () => {
    setMarcados({});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Checklist de Equipamentos</Text>
      <Text style={styles.infoText}>
        Itens indispensáveis conforme a Resolução CONTRAN nº 996/2023. Marque os itens que o seu veículo já possui:
      </Text>

      {/* Card de Progresso */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Conformidade Legal</Text>
          <Text style={styles.progressPercentage}>{percentual}%</Text>
        </View>

        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${percentual}%`,
                backgroundColor: percentual === 100 ? '#16a34a' : '#2563eb',
              },
            ]}
          />
        </View>

        <View style={styles.statusMessageWrap}>
          {percentual === 100 ? (
            <View style={styles.statusSuccess}>
              <Ionicons name="checkmark-circle" size={20} color="#16a34a" />
              <Text style={styles.statusSuccessText}>
                Tudo pronto! Seu autopropelido cumpre todos os requisitos de segurança do CONTRAN.
              </Text>
            </View>
          ) : (
            <View style={styles.statusWarning}>
              <Ionicons name="alert-circle-outline" size={20} color="#d97706" />
              <Text style={styles.statusWarningText}>
                {concluidos} de {total} itens marcados. Instale os itens restantes antes de circular em vias públicas.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.bulkActions}>
          <TouchableOpacity style={styles.btnSmall} onPress={marcarTodos} activeOpacity={0.7}>
            <Text style={styles.btnSmallText}>Marcar todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSmallOutline} onPress={limparTodos} activeOpacity={0.7}>
            <Text style={styles.btnSmallOutlineText}>Limpar seleção</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Equipamentos */}
      <View style={styles.cardList}>
        {EQUIPAMENTOS_OBRIGATORIOS.map((item) => {
          const isChecked = !!marcados[item.id];
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.itemRow, isChecked && styles.itemRowChecked]}
              onPress={() => toggleItem(item.id)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isChecked ? 'checkbox' : 'square-outline'}
                size={24}
                color={isChecked ? '#16a34a' : '#9ca3af'}
                style={styles.checkboxIcon}
              />

              <View style={styles.itemContent}>
                <View style={styles.titleWrap}>
                  <Ionicons
                    name={item.icone}
                    size={18}
                    color={isChecked ? '#16a34a' : '#4b5563'}
                    style={styles.leadingIcon}
                  />
                  <Text style={[styles.itemTitle, isChecked && styles.itemTitleChecked]}>
                    {item.nome}
                  </Text>
                </View>
                <Text style={styles.itemDesc}>{item.desc}</Text>
                <Text style={styles.itemExigencia}>{item.exigencia}</Text>
              </View>
            </TouchableOpacity>
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
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 16,
    lineHeight: 20,
  },
  progressCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1f2937',
  },
  progressPercentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  statusMessageWrap: {
    marginBottom: 12,
  },
  statusSuccess: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    padding: 10,
    borderRadius: 8,
    gap: 8,
  },
  statusSuccessText: {
    fontSize: 13,
    color: '#166534',
    flex: 1,
    lineHeight: 18,
    fontWeight: '500',
  },
  statusWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffbeb',
    padding: 10,
    borderRadius: 8,
    gap: 8,
  },
  statusWarningText: {
    fontSize: 13,
    color: '#92400e',
    flex: 1,
    lineHeight: 18,
  },
  bulkActions: {
    flexDirection: 'row',
    gap: 10,
  },
  btnSmall: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnSmallText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '600',
  },
  btnSmallOutline: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnSmallOutlineText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  cardList: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 24,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    borderRadius: 8,
  },
  itemRowChecked: {
    backgroundColor: '#f8fafc',
  },
  checkboxIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  itemContent: {
    flex: 1,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leadingIcon: {
    marginRight: 6,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  itemTitleChecked: {
    color: '#166534',
  },
  itemDesc: {
    fontSize: 13,
    color: '#4b5563',
    marginTop: 3,
    lineHeight: 18,
  },
  itemExigencia: {
    fontSize: 11,
    color: '#2563eb',
    marginTop: 4,
    fontStyle: 'italic',
  },
});