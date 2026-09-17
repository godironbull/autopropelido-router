import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#1e3a8a' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerActiveTintColor: '#1e3a8a',
          drawerInactiveTintColor: '#4b5563',
          drawerActiveBackgroundColor: '#e0e7ff',
          drawerLabelStyle: { fontSize: 15, fontWeight: '500' },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Guia de Autopropelidos',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="regras"
          options={{
            drawerLabel: 'Limites de Velocidade',
            title: 'Regras de Trânsito',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="speedometer-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="equipamentos"
          options={{
            drawerLabel: 'Itens Obrigatórios',
            title: 'Equipamentos Exigidos',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="shield-checkmark-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});