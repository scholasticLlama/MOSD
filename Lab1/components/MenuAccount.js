import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { auth, db } from '../firebase';
import { useNavigation } from '@react-navigation/core'
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';


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
    paddingHorizontal: 25,
    paddingVertical: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f6d1'
  },
  userInfoRow: {
    width: '95%',
    paddingHorizontal: 25,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f6d1'
  }
});


const readData = async () => {
  try {
    const docRef = doc(db, "usersHistory", auth.currentUser?.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const info = docSnap.data();
      return info;
    }
    
  } catch(e){
    alert(e)
    return null;
  }
}

function CategoryRow({ info }){
  const sortedKeys = Object.keys(info).sort();
  sortedKeys.map((fieldName) =>
  console.log(`Value for key '${fieldName}':`, info[fieldName]))
  
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width:'100%' }}>
      {sortedKeys.map(city => (
          <View key={city} style={styles.categoryRow}>
            <Text style={{fontSize: 15}}>{city}</Text>
            <Text>{info[city]} time{info[city] > 1 ? 's' : ''}</Text>
          </View>
      ))}
      </ScrollView>
  );
}

const DisplayScreenMenuAccount = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const handleSingOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login")
    })
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Image style={{width: 30, height: 30 }} source={require('../assets/images/goBack.png')}/>
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#fff'}}> My account </Text>
        </View>

        
        <View style={styles.categoryContainer}>

          <Text style={styles.categoryName}>Account Management</Text>

          <View style={styles.userInfoRow}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>User email</Text>
            <Text style={{fontSize: 15}}>{auth.currentUser?.email}</Text>
          </View>

          <TouchableOpacity style={styles.userInfoRow} onPress={handleSingOut}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Log out</Text>
          </TouchableOpacity>

          

        </View>
        {data != null &&
        <>
        <Text style={styles.categoryName}>Connection history</Text>
        <CategoryRow info={data} />
        </>}
        
      

    </View>
  );
}

export default DisplayScreenMenuAccount;