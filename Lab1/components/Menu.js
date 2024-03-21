import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity, BackHandler } from 'react-native';

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
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#88891a'
  }

});



function CategoryRow({ categoryName, categoryDescription}){
  return (
    <View style={styles.categoryRow}>
      <View style={styles.categotyText}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{categoryName}</Text>
        <Text style={{color: '#808080'}}>{categoryDescription}</Text>
      </View>
      <TouchableOpacity style={styles.goForward}>
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
          <TouchableOpacity style={styles.goBack}>
            <Text style={{fontSize: 20}}> {'<'} </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#fff'}}> Settings </Text>
        </View>
        <CategoryRow categoryName="My account" categoryDescription="more info, log out" />
        <CategoryRow categoryName="Additional features" categoryDescription="more info & more" />
        <ExitCategoryRow categoryName="Exit" categoryDescription="close app" />
    </View>
  );
}

export default DisplayScreenMenu;