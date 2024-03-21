import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import DisplayScreenMenu from './components/Menu';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 34,
    gap: 10,
    color: '#FFF',
    backgroundColor: '#C8C926'
  },
  categoryRow: {
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 10,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#88891a'
  }
});


function CategoryRow({ categoryName, value}){
  return (
    <View style={styles.categoryRow}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{categoryName}</Text>
      <Text>{value}</Text>
    </View>
  );
}

function ExitCategoryRow({ categoryName}){
  return (
    <TouchableOpacity style={styles.categoryRow}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{categoryName}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack}>
            <Text style={{fontSize: 20}}> {'<'} </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#fff'}}> My account </Text>
        </View>

        <CategoryRow categoryName="User ID" value="256398" />
        <ExitCategoryRow categoryName="Log out" />
    </View>
  );
}