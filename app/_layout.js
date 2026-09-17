import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1e3a8a' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#f3f4f6' },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'Guia de Autopropelidos' }} 
      />
      <Stack.Screen 
        name="regras" 
        options={{ title: 'Limites de Velocidade' }} 
      />
      <Stack.Screen 
        name="equipamentos" 
        options={{ title: 'Itens Obrigatórios' }} 
      />
    </Stack>
  );
}