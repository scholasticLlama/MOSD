import React, {useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, Image, View, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import DisplayAnImageWithStyle from './Image';
import * as RootNavigation from './RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 50,
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
  headerAdds: {
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
    paddingHorizontal: 10,
    paddingVertical: 10,
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
        <Text style={{fontSize: 15}}>{categoryName}</Text>
        <Text>{value}</Text>      
      </View>
  );
}

const DisplayMainScreen = (props) => {
  const drawer = useRef(null);
  const drawerPosition = 'right';
  const server = (props.isRunning) ? props.server : {};

  const contentElems = [
    {image: require('../assets/images/frogW.gif'), imageName: "Not connected", textBtn: "Leap!" },
    {image: require('../assets/images/frogC.gif'), imageName: "Connected", textBtn: "Stop leaping" },
  ];
 
  const navigationView = () => (
    <View style={[styles.container, {justifyContent: 'flex-start', paddingTop: 0}]}>
      <View style={styles.headerAdds}>
        <TouchableOpacity style={styles.goBack} onPress={() => drawer.current.closeDrawer()}>
          <Image style={{width: 30, height: 30 }} source={require('../assets/images/goBack.png')}/>
        </TouchableOpacity>
        <Text style={{fontSize: 21, color: '#fff'}}> Connection info </Text>
      </View>

      {Object.keys(server).length === 0 ? (
      <View style={{ flex:1, justifyContent: 'center' }}>
        <Text>The is no connection right now</Text>
      </View>
      ) : (
        <>
          <CategoryRow categoryName="Country" value={server.country} />
          <CategoryRow categoryName="City" value={server.city} />
          <CategoryRow categoryName="IP-address" value={server.ipAddress} />
          <CategoryRow categoryName="Time of running" value="00:00:01" />
        </>
      )}
      

    </View>
  );
  
  function connectingButton(){
    if (!props.isRunning){
      props.setRunning(1);
      
    } else {
      props.setRunning(0);
    }
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>

      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => RootNavigation.navigate('Menu')}>
            <Image style={{width: 40, height: 40}} source={require('../assets/images/Settings.png')}/>
            </TouchableOpacity>

            <View style={styles.right}>
              <Text style={{textAlign:'right'}}>
              {Object.keys(server).length === 0 ? 'No connection\n' : `${server.ipAddress}\nConnected`}
              </Text>

              <TouchableOpacity style={styles.info} onPress={() => drawer.current.openDrawer()}>
                <Text style= {{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>i</Text>
              </TouchableOpacity>
            </View>
        </View>
        <DisplayAnImageWithStyle imagePath={contentElems[props.isRunning].image} imageName={contentElems[props.isRunning].imageName} type="gifHandler"/>
        
        <View style={styles.bottom}>
        <TouchableOpacity style={styles.server} onPress={() => RootNavigation.navigate('Server')}>
          <Text>Server: {props.server.country.toUpperCase()}, {props.server.city.toUpperCase()} {props.server.flag}</Text>
          <Text>{'>'}</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.connecting, {backgroundColor: (props.isRunning) ? '#000' : '#fff'}]} onPress={connectingButton}>
          <Text style={{color: (!props.isRunning) ? '#000' : '#fff'}}>{contentElems[props.isRunning].textBtn}</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

export default DisplayMainScreen;
