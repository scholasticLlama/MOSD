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
  categoryContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  categoryName: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: '#cecece',
    backgroundColor: '#f0f6d1'
  },
  categoryRow: {
    width: '95%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#cecece'
  },
  radio_btn_ON:{
    width: 20,
    height: 20,
    backgroundColor: '#baca26',
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 4,
  },
  radio_btn_OFF:{
    width: 20,
    height: 20,
  }
});


function CategoryRow({ categoryName, value}){
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{categoryName}</Text>

      <View style={styles.categoryRow}>
        <Text style={{fontSize: 15, color: '#cecece'}}>OpenVPN(TCP)</Text>
        <TouchableOpacity style={{borderColor: '#CECECE', borderWidth: 2, borderRadius: 14}}>
          <View style={styles.radio_btn_OFF}></View>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryRow}>
        <Text style={{fontSize: 15}}>OpenVPN(UPD)</Text>
        <TouchableOpacity style={{borderColor: '#baca26', borderWidth: 2, borderRadius: 14}}>
          <View style={styles.radio_btn_ON}></View>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryRow}>
        <Text style={{fontSize: 15, color: '#cecece'}}>IKEv2</Text>
        <TouchableOpacity style={{borderColor: '#CECECE', borderWidth: 2, borderRadius: 14}}>
          <View style={styles.radio_btn_OFF}></View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack}>
            <Text style={{fontSize: 20}}> {'<'} </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 21, color: '#fff'}}> Settings </Text>
        </View>

      <CategoryRow categoryName="Connection mode" value="55595" />
      <CategoryRow categoryName="Connection mode" value="55595" />
    </View>
  );
}