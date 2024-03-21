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
    borderWidth: 7,
    borderRadius: 150,
    borderColor: '#C8C926'
  },

  gifHandler: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    marginBottom: 20,
  }
});

const DisplayAnImageWithStyle = (props) => {
  return (
    <View style={styles.container}>
      <View style = {(props.type == "gifHandler") ? {} :{borderColor: '#000', borderWidth: 2, borderRadius:157, marginBottom: 20}}>
      <Image style={(props.type == "gifHandler") ? styles.gifHandler : styles.imageHandler} source={props.imagePath}/>
      </View>
      <Text>{props.imageName}</Text>
    </View>
  );
};

export default DisplayAnImageWithStyle;