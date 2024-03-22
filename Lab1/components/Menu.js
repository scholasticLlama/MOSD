import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity, BackHandler } from 'react-native';
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
    gap: 10,
    color: '#FFF',
    backgroundColor: '#adc926'
  },
  categoryRow: {
    width: '95%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f6d1'
  }

});



function CategoryRow({ categoryName, categoryDescription, screen }){
  return (
    <View style={styles.categoryRow}>
      <View style={styles.categotyText}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{categoryName}</Text>
        <Text style={{color: '#808080'}}>{categoryDescription}</Text>
      </View>
      <TouchableOpacity style={styles.goForward} onPress={() => RootNavigation.navigate(screen)}>
        <Text style={{fontSize: 20}}> {'>'} </Text>
      </TouchableOpacity>
    </View>
  );
}

function ExitCategoryRow({ categoryName, categoryDescription}){
  return (
    <TouchableOpacity style={styles.categoryRow} onPress={() => BackHandler.exitApp()}>
      <View style={styles.categotyText}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{categoryName}</Text>
        <Text style={{color: '#808080'}}>{categoryDescription}</Text>
      </View>
    </TouchableOpacity>
  );
}


const DisplayScreenMenu = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack} onPress={() => RootNavigation.navigate('Main')} >
            <Image style={{width: 30, height: 30 }} source={require('../assets/images/goBack.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#fff'}}> Settings </Text>
        </View>
        <CategoryRow categoryName="My account" categoryDescription="Get user info, log out" screen='Account'/>
        <CategoryRow categoryName="Additional features" categoryDescription="Connection types" screen='Settings' />
        <ExitCategoryRow categoryName="Exit" categoryDescription="Turn off app" />
    </View>
  );
}

export default DisplayScreenMenu;