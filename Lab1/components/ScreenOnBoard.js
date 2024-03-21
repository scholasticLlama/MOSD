import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DisplayAnImageWithStyle from './Image'
import DisplayCircule from './Circules';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  title: {
    color: '#C8C926',
    fontWeight: 'bold',
    marginTop: 50,
  },
  description: {
    paddingHorizontal: 40,
    marginBottom: 10,
    textAlign: 'center' 
  },
  changeScreen_btn : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  goBack_btn: {
    width: 100,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  goFowward_btn: {
    width: 100,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color:'#FFF',
    backgroundColor: '#000',
  },
  chosenScreen :{
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  }

});

const DisplayScreenOnBoard = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>froggy voyage</Text>
        <DisplayAnImageWithStyle imagePath={props.image} imageName={props.name} type={props.typeHandler}/>
        <Text style={styles.description}>{props.text}</Text>

        <View  style={styles.changeScreen_btn}>
            <TouchableOpacity onPress={() => handleGoBack()}>
              <Text style={styles.goBack_btn}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoForward()}>
              <Text style={styles.goFowward_btn}>Next</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.chosenScreen}>
          <DisplayCircule color="#000"/>
          <DisplayCircule color="#CECECE"/>
          <DisplayCircule color="#000"/>
        </View>

        <StatusBar style="auto" />
      </View>
    );
}

export default DisplayScreenOnBoard;
