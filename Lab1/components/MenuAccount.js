import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 34,
    gap: 10,
    color: '#FFF',
    backgroundColor: '#adc926'
  },
  categoryRow: {
    width: '90%',
    paddingHorizontal: 25,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f6d1'
  }
});


function CategoryRow({ categoryName, value}){
  return (
    <View style={styles.categoryRow}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{categoryName}</Text>
      <Text style={{fontSize: 15}}>{value}</Text>
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

const DisplayScreenMenuAccount = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack} onPress={() => RootNavigation.navigate('Menu')}>
            <Image style={{width: 30, height: 30 }} source={require('../assets/images/goBack.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#fff'}}> My account </Text>
        </View>

        <CategoryRow categoryName="User ID" value="256398" />
        <ExitCategoryRow categoryName="Log out" />
    </View>
  );
}

export default DisplayScreenMenuAccount;