import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '700'
  },
  outter: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    width: 12,
    height: 12,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  mood: {
    marginHorizontal: 15,
    alignItems: 'center'
  },
  feeling: {
    fontSize: 22,
    textTransform: 'capitalize'
  }
});


export default function App() {
  const [mood, setMood] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How do you feel?</Text>


      <View style={styles.wrapper}>
        {['happy', 'sad'].map(feeling=> (
          <View key={feeling} style={styles.mood}>
            <Text style={styles.feeling}>{feeling}</Text>
            <TouchableOpacity style={styles.outter} onPress={() => setMood(feeling)}>
              {mood === feeling && <View style={styles.inner} />}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}