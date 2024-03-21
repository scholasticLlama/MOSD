import React, {useRef} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Button, DrawerLayoutAndroid } from 'react-native';
import DisplayAnImageWithStyle from './Image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginVertical: 50,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  description: {
    paddingHorizontal: 40,
    marginBottom: 10,
    textAlign: 'center',
    
  },
  writeTaskWrapper : {
    marginBottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center'
  },
  addWrapper : {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText : {},
  server:{
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },

  bottom: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },

  connecting: {
    width: '80%',
    height: 60,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  info: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#000',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    gap: 10
  },

  containerInside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },

});

const DisplayMainScreen = (props) => {
  const drawer = useRef(null);
  const drawerPosition = 'right'
 
  const navigationView = () => (
    <View style={[styles.containerInside, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>

      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => openMenu()}>
            <Image style={{width: 40, height: 40}} source={require('../assets/images/Settings.png')}/>
            </TouchableOpacity>

            <View style={styles.right}>
              <Text style={{textAlign:'right'}}>153.20.1.0{'\n'}No connection</Text>

              <TouchableOpacity style={styles.info} onPress={() => drawer.current.openDrawer()}>
                <Text style= {{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>i</Text>
              </TouchableOpacity>
            </View>
        </View>
        <DisplayAnImageWithStyle imagePath={require('../assets/images/frogC.gif')} imageName="Connecting..."/>
        
        <View style={styles.bottom}>
        <TouchableOpacity style={styles.server} onPress={() => viewRegions()}>
          <Text>Server: ITALY, ROME 🇮🇹</Text>
          <Text>{'>'}</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.connecting} onPress={() => connectingButton()}>
          <Text>Still leaping...</Text>
        </TouchableOpacity>
        </View>
    </View>
    </DrawerLayoutAndroid>
  );
}

export default DisplayMainScreen;
