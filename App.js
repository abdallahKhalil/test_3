import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    <SafeAreaView>
      <View style={{ height:400}}>
        <Image style={{ 
          width:'100%',
          resizeMode:'contain',
          top: -100,
        }}
       source={require('./assets/onboardImage.png')}/>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight:'bold', textAlign:'center', marginTop:20}}>
            Maki Bar
          </Text>
          <Text style={{fontSize:16, textAlign:'center', color:'gray'}}>
            If you Love Sushi Then you Love Us
          </Text>
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.currentIndicator}/>
        <View style={styles.indicator}/>
        <View style={styles.indicator}/>
      </View>
      <View style={styles.btnContainer}>
         <Text style={{fontSize:24,fontWeight: 'bold'}}
         >Give it a Try</Text>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.icon}>
        <Ionicons name="home" size={32} color="gray" />
        </View >
        <View style={styles.icon}>
        <Ionicons name="search" size={32} color="gray" />
        </View>
        <View style={styles.icon}>
        <Ionicons name="wallet" size={32} color="gray" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal:50,
    justifyContent: 'center',
    paddingBottom:40,
  },
  indicatorContainer:{
    height:50,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:150,
  },
  currentIndicator:{
    height:12,
    width:30,
    borderRadius:10,
    backgroundColor:'#F9813A',
    marginHorizontal:5,
  },
  indicator:{
    height:12,
    width:12,
    borderRadius:6,
    backgroundColor:'gray',
    marginHorizontal:5,
  },
  btnContainer:{
    width:'75%',
    height:85,
    borderRadius:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F9813A',
    marginTop:30,
    marginHorizontal:50,

  },
  navContainer:{
    flexDirection: 'row',
    marginHorizontal:50,
    alignContent:'center',
    marginTop:55,
    borderTopColor: 'gray',
  },
  icon:{
    marginHorizontal:40,
  },
 
});
