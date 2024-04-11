import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DisplayAnImageWithStyle from './Image'
import * as RootNavigation from './RootNavigation';

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
    color: '#adc926',
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

function  DisplayCircule({ number, currentPage }){
  return (
        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: (number == currentPage) ? '#CECECE' : '#000' }} />
  );
}


const DisplayScreenOnBoard = (props) => {
    const contentElems = [
      {image: require('../assets/images/frog_1.png'), imageName: "Leap into secure browsing!", text: "Safeguard your digital adventures with our hoppy encryption, ensuring your online journeys remain ribbit-ingly private and secure." },
      {image: require('../assets/images/frog_2.png'), imageName: "Explore the world with a leap!", text: "Our network offering a lily pad of servers in diverse locations. Hop from one to another for a boundary-breaking browsing experience." },
      {image: require('../assets/images/frog_3.png'), imageName: "Slip through the pads unnoticed!", text: "You can blend seamlessly into the online ecosystem, ensuring your presence remains as discreet as a frog in the reeds." },
    ];
    
    function handleGoBack(){
      if (props.currentPage >= 2)
        props.setCurrentPage(props.currentPage - 1)
      if (props.currentPage == 1){
        RootNavigation.navigate('Main')
        props.setCurrentPage(props.currentPage + 3)
      }        
    }

    function handleGoForward(){
      if (props.currentPage > 2)
        RootNavigation.navigate('Main')
      props.setCurrentPage(props.currentPage + 1)
    }

    

    return (
      <View style={styles.container}>
        <Text style={styles.title}>froggy voyage</Text>
        <DisplayAnImageWithStyle imagePath={contentElems[props.currentPage - 1].image} imageName={contentElems[props.currentPage - 1].imageName} type="imageHandler"/>
        <Text style={styles.description}>{contentElems[props.currentPage - 1].text}</Text>

        <View style={styles.changeScreen_btn}>
            <TouchableOpacity onPress={handleGoBack}>
              <Text style={styles.goBack_btn}>{props.currentPage === 1 ? 'Skip' : 'Previous'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoForward}>
              <Text style={styles.goFowward_btn}>Next</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.chosenScreen}>
          <DisplayCircule number="1" currentPage={props.currentPage}/>
          <DisplayCircule number="2" currentPage={props.currentPage}/>
          <DisplayCircule number="3" currentPage={props.currentPage}/>
        </View>

        <StatusBar style="auto" />
      </View>
    );
}

export default DisplayScreenOnBoard;
