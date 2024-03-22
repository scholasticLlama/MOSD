import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
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
  countryRow: {
    width: '95%',
    paddingHorizontal: 10,
    paddingVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f6d1'
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
  search: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CECECE'
   
  }
});


function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <View style={styles.search}>
      <TextInput 
        style={{ width: '90%' }}
        value={filterText} 
        placeholder="Search..." 
        onChangeText={(text) => onFilterTextChange(text)} />
        <TouchableOpacity style={{ width: '15%', justifyContent: 'center', alignItems: 'center'}} onPress={() => onFilterTextChange('')}>
        <Image style={{width: 30, height: 30 }} source={require('../assets/images/close1.png')}/>
        </TouchableOpacity>
    </View>
  );
}

function ServerTable({ servers, filterText, currentServer, setCurrentServer }) {
  const rows = [];

  servers.forEach((server) => {
    if ( server.country.toLowerCase().indexOf(filterText.toLowerCase()) === -1 && server.city.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(<ServerRow server={server} currentServer={currentServer} setCurrentServer={setCurrentServer} key={server.city} />);
  });

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width:'100%' }}>
      {rows}
    </ScrollView>
  );
}

function ServerRow({ server, currentServer, setCurrentServer }){
  return (
    <TouchableOpacity style={styles.countryRow} onPress={() => {
      setCurrentServer(server);
      RootNavigation.navigate('Main')
      }}>
      <Image style={styles.image} source={server.flagPath}/>
      <View style={styles.text}>
        <Text style={{ color: currentServer.city === server.city ? '#adc926': '#000', fontSize: 15, fontWeight: 'bold' }} >{server.country}</Text>
        <Text style={{ color: currentServer.city === server.city ? '#adc926': '#000' }}>{server.city}</Text>
      </View>
    </TouchableOpacity>
  );
}

const DisplayScreenServer = (props) => {
  const availableServers = [
    { country: "France", city: "Marseille", flag: '🇫🇷', flagPath: require('../assets/images/flags/France.png'), isChosen: false },
    { country: "Germany", city: "Frankfurt", flag: '🇩🇪', flagPath: require('../assets/images/flags/Germany.png'), isChosen: false },
    { country: "Great Britain", city: "London", flag: '🇬🇧', flagPath: require('../assets/images/flags/Great Britain.png'), isChosen: false },
    { country: "Great Britain", city: "London 1", flag: '🇬🇧', flagPath: require('../assets/images/flags/Great Britain.png'), isChosen: false },
    { country: "Israel", city: "Jerusalem", flag: '🇮🇱', flagPath: require('../assets/images/flags/Israel.png'), isChosen: false },
    { country: "Italy", city: "Milan", flag: '🇮🇹', flagPath: require('../assets/images/flags/Italy.png'), isChosen: false },
    { country: "Japan", city: "Tokyo", flag: '🇯🇵', flagPath: require('../assets/images/flags/Japan.png'), isChosen: false },
    { country: "Spain", city: "Madrid", flag: '🇪🇸', flagPath: require('../assets/images/flags/Spain.png'), isChosen: false },
    { country: "USA", city: "Chicago", flag: '🇺🇸', flagPath: require('../assets/images/flags/USA.png'), isChosen: false },
    { country: "USA", city: "Las Vegas", flag: '🇺🇸', flagPath: require('../assets/images/flags/USA.png'), isChosen: false },
    { country: "USA", city: "Seattle", flag: '🇺🇸', flagPath: require('../assets/images/flags/USA.png'), isChosen: false }
  ];
  const [filterText, setFilterText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack} onPress={() => RootNavigation.navigate('Main')}>
            <Image style={{width: 30, height: 30 }} source={require('../assets/images/goBack.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 21, color: '#fff'}}> Servers </Text>
        </View>

        <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
        <ServerTable servers={availableServers} filterText={filterText} currentServer={props.currentServer} setCurrentServer={props.setCurrentServer}/>

    </SafeAreaView>
  );
}

export default DisplayScreenServer;