export default function HomeScreen({ route, navigation }) {
    const user = route.params?.user;
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Bienvenido a la HomeScreen</Text>
        {user ? <Text>Usuario: {user.name}</Text> : <Text>No autenticado</Text>}
        <Button title="Cerrar Sesión" onPress={() => navigation.navigate("Login")} />
      </View>
    );
  }
  