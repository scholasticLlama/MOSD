import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, Image, View, TouchableOpacity } from 'react-native';


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
  }
});


function CountryRows({ values}){
  return (
    
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width:'100%' }}>
      <Text>Search</Text>

      {values.map(server => (
          <TouchableOpacity key={server.city} style={styles.countryRow}>
            <Image style={styles.image} source={server.flagPath}/>
            <View style={styles.text}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{server.country}</Text>
              <Text>{server.city}</Text>
            </View>
          </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default function App() {
  const availableServers = [
    { country: "France", city: "Marseille", flagPath: require('./assets/images/flags/France.png'), isChosen: false },
    { country: "Germany", city: "Frankfurt", flagPath: require('./assets/images/flags/Germany.png'), isChosen: false },
    { country: "Great Britain", city: "London", flagPath: require('./assets/images/flags/Great Britain.png'), isChosen: false },
    { country: "Great Britain", city: "London 1", flagPath: require('./assets/images/flags/Great Britain.png'), isChosen: false },
    { country: "Israel", city: "Jerusalem", flagPath: require('./assets/images/flags/Israel.png'), isChosen: false },
    { country: "Italy", city: "Milan", flagPath: require('./assets/images/flags/Italy.png'), isChosen: false },
    { country: "Japan", city: "Tokyo", flagPath: require('./assets/images/flags/Japan.png'), isChosen: false },
    { country: "Spain", city: "Madrid", flagPath: require('./assets/images/flags/Spain.png'), isChosen: false },
    { country: "USA", city: "Chicago", flagPath: require('./assets/images/flags/USA.png'), isChosen: false },
    { country: "USA", city: "Las Vegas", flagPath: require('./assets/images/flags/USA.png'), isChosen: false },
    { country: "USA", city: "Seattle", flagPath: require('./assets/images/flags/USA.png'), isChosen: false }
  ];

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack}>
            <Text style={{fontSize: 20}}> {'<'} </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 21, color: '#fff'}}> Servers </Text>
        </View>


        <CountryRows values={availableServers}/>

    </SafeAreaView>
  );
}