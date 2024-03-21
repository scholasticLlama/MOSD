import React, { useState } from 'react';
import { StyleSheet, Text, Switch, View, TouchableOpacity } from 'react-native';


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
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f6d1'
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


function CategoryRow({ categoryName, values, setFunction, currentValue}){
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{categoryName}</Text>

      {values.map(value => (
          <View key={value} style={styles.categoryRow}>
            <Text style={{fontSize: 15, color: currentValue === value ? '#000': '#cecece'}}>{value}</Text>
            <TouchableOpacity style={{borderColor: '#CECECE', borderWidth: 2, borderRadius: 14}} onPress={() => setFunction(value)}>
              <View style={currentValue === value ? styles.radio_btn_ON : styles.radio_btn_OFF}></View>
            </TouchableOpacity>
          </View>
      ))}
      
    </View>
  );
}

function SwitchRow({ categoryName, categoryDescription, isEnabled, setIsEnabled }){
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{categoryName}</Text>
      <View style={styles.categoryRow}>
        <Text style={{fontSize: 15}}>{categoryDescription}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#eaf3c0'}}
          thumbColor={isEnabled ? '#adc926' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const DisplayScreenMenuSettings = () => {
  const [connectionType, setConnectionType] = useState("OpenVPN(TCP)");
  const [obfuscationType, setObfuscationType] = useState("Chameleon");
  const [encriptionType, setEncriptionType] = useState("Auto");

  const [isEnabled_IPv6, setIsEnabled_IPv6] = useState(false);


  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack}>
            <Text style={{fontSize: 20}}> {'<'} </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 21, color: '#fff'}}> Settings </Text>
        </View>

      <CategoryRow categoryName="Connection mode" values={['OpenVPN(TCP)', 'OpenVPN(UPD)', 'IKEv2']} setFunction={setConnectionType} currentValue={connectionType}/>
      <CategoryRow categoryName="Obfuscation type" values={['Chameleon', 'Basic']} setFunction={setObfuscationType} currentValue={obfuscationType}/>
      <CategoryRow categoryName="Encription type" values={['Auto', 'AES-128-GCM', 'BF-CBC']} setFunction={setEncriptionType} currentValue={encriptionType}/>
    
      <SwitchRow categoryName="Bypassing VPN" categoryDescription="Block IPv6" isEnabled={isEnabled_IPv6} setIsEnabled={setIsEnabled_IPv6}/>
    
    </View>
  );
}

export default DisplayScreenMenuSettings;