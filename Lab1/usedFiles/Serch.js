import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';


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
        <Image style={{width: 30, height: 30 }} source={require('./assets/images/close1.png')}/>
        </TouchableOpacity>
    </View>
  );
}

function ServerTable({ servers, filterText }) {
  const rows = [];

  servers.forEach((server) => {
    if ( server.country.toLowerCase().indexOf(filterText.toLowerCase()) === -1 && server.city.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(<ServerRow server={server} key={server.city} />);
  });

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width:'100%' }}>
      {rows}
    </ScrollView>
  );
}

function ServerRow({ server }){
  return (
    <TouchableOpacity style={styles.countryRow}>
      <Image style={styles.image} source={server.flagPath}/>
      <View style={styles.text}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{server.country}</Text>
        <Text>{server.city}</Text>
      </View>
    </TouchableOpacity>
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
  const [filterText, setFilterText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack}>
            <Text style={{fontSize: 20}}> {'<'} </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 21, color: '#fff'}}> Servers </Text>
        </View>

        <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
        <ServerTable servers={availableServers} filterText={filterText}/>

    </SafeAreaView>
  );
}