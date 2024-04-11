import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    margin: 20,
    alignItems: 'center'
  },
  imageHandler: {
    width: 300,
    height: 400,
    resizeMode: 'stretch',
    marginBottom: 20,
  },

  gifHandler: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    marginBottom: 20,
  },

  imageText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: '#adc926'
  }
});

const DisplayAnImageWithStyle = (props) => {
  return (
    <View style={styles.container}>
      <View>
      <Image style={(props.type == "gifHandler") ? styles.gifHandler : styles.imageHandler} source={props.imagePath}/>
      </View>
      <Text style={(props.type == "gifHandler") ? {} : styles.imageText}>{props.imageName}</Text>
    </View>
  );
};

export default DisplayAnImageWithStyle;