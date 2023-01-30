import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search"
          onChangeText={() => null}
          value={'searchQuery'}
          autoComplete
        />
      </View>
      <View style={styles.body}>
        <Text>
          list
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: { padding: 10 },
  body: { padding: 10, flex: 1, backgroundColor: 'blue' }
});
