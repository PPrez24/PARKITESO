import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulación de verificación de sesión
    setTimeout(() => {
      if (!isAuthenticated) {
        router.replace('/login' as any);
      }
    }, 1000);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack />;
}
