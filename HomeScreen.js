import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(Array.from({ length: 6 }, (_, i) => i));
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
        'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
        'raleway-thin': require('./assets/fonts/Raleway-Thin.ttf'),
        'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    // You can use offsetX to determine how much the user has scrolled horizontally
  };

  const handleItemClick = (index) => {
    setClickedIndex(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      
      <TouchableOpacity onPress={() => handleItemClick(index)}>
        <View
          style={{
            width: 100,
            height: 50,
            backgroundColor: clickedIndex === index ? '#42bcf5' : '#F7F7F7',
            marginHorizontal: 10,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
            top: 1
          }}
          
        >
          <Text style={{ color: clickedIndex === index ? '#fff' : '#77797a', fontFamily: 'raleway-regular' }}>
            {itemTexts[index]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const styles = {
  smallBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue', // Change the color as needed
    borderRadius: 10,
    marginTop: 20,
  },
};


  const itemTexts = ['Flutter', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Python'];

  const handlePressLeft = () => {
    // Add logic for sliding left
  };

  const handlePressRight = () => {
    // Add logic for sliding right
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontFamily: 'raleway-medium', color: '#838383', fontSize: 15, marginTop: 20, marginLeft: 13 }}>Kategori</Text>
          <Text style={{ fontFamily: 'raleway-medium', color: 'black', fontSize: 21, marginTop: 3, marginLeft: 13 }}>Programming</Text>
      
    </View>
    
    
    
    

        <View style={{ position: 'absolute', top: 49, marginLeft: 151 }}>
          <Icon name="chevron-down" size={25} color="#838383" />
        </View>
        
        <View style={{ position: 'absolute', top: 34, right: 10 }}>
          <Icon name="notifications-outline" size={30} color="black" />
        </View>
        
      </View>
      
      
      

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 50, top: 10, right: 37 }}>
        <TextInput
          style={{
            flex: 1,
            height: 51,
            borderColor: 'gray',
            paddingLeft: 45,
            borderRadius: 5,
            backgroundColor: '#F7F7F7',
            fontSize: 17,
            fontFamily: 'raleway-regular',
          }}
          placeholder="Cari Course"
        />
        
        
        
      </View >
      
      
      
      
      <Icon name="search" size={29} color="#838383" style={{ position: 'absolute', left: 20, top: 106 }} />
        
      <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      top={40}
      showsHorizontalScrollIndicator={false} 
    />
    
    

    <ScrollView
      horizontal
      contentContainerStyle={{ flexDirection: 'row' }}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity onPress={() => navigation.navigate('DetailProduk')}>
        <View style={{ width: 237, height: 290, marginRight: 10, top: 20, marginLeft: 6, borderRadius: 21, overflow: 'hidden' }}>
          <Image source={require('./assets/image/1.jpeg')} style={{ width: '100%', height: '100%', borderRadius: 21 }} />
          <View style={{ position: 'absolute', bottom: 5, left: 0, right: 0, height: 100, borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: 0.3 }} />
          <View style={{ position: 'absolute', top: 203, left: 10 }}>
            <Text style={{ color: 'white', fontFamily: 'raleway-medium', fontSize: 17 }}>
              React Native untuk Pemula
            </Text>
            <Text style={{ color: 'white', fontFamily: 'raleway-medium', fontSize: 12, marginTop: 5 }}>
              Course untuk pemula
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DetailProduk')}>
        <View style={{ width: 237, height: 290, marginRight: 10, top: 20, marginLeft: 6, borderRadius: 21, overflow: 'hidden' }}>
          <Image source={require('./assets/image/2.jpeg')} style={{ width: '100%', height: '100%', borderRadius: 21 }} />
          <View style={{ position: 'absolute', bottom: 5, left: 0, right: 0, height: 100, borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: 0.1 }} />
          <View style={{ position: 'absolute', top: 203, left: 10 }}>
            <Text style={{ color: 'white', fontFamily: 'raleway-medium', fontSize: 17 }}>
              React Native untuk Pemula
            </Text>
            <Text style={{ color: 'white', fontFamily: 'raleway-medium', fontSize: 12, marginTop: 5 }}>
              Course untuk pemula
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      
      

    </ScrollView>
    
    
    

          

      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: 'gray', 
        fontSize: 15, 
        marginLeft: 300,
        marginTop: -10,
        bottom: 356 }}>
            See more
      </Text>
      
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 20, 
        marginLeft: 15,
        marginTop: 30,
        bottom: 410 }}>
            Populer
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#858585', 
        fontSize: 15, 
        marginLeft: 206,
        marginTop: -20,
        top: -77,
        left: 93,
        }}>
            See more
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#858585', 
        fontSize: 14, 
        marginLeft: 95,
        left: 93,
        marginTop: -8,
        top: -9,
        left: 93,
        }}>
            4 Quiz
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#858585', 
        fontSize: 14, 
        marginLeft: 15,
        left: 93,
        marginTop: -10,
        top: -18,
        bottom: 35, }}>
            60 Video
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#0A8ED9', 
        fontSize: 14, 
        marginLeft: 15,
        left: 93,
        marginTop: -30,
        top: -30,
        bottom: 35, }}>
            Free
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 17, 
        marginLeft: 15,
        left: 93,
        marginTop: -30,
        top: -45,
        bottom: 35, }}>
            Laravel dalam 20 hari
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 20, 
        marginLeft: 15,
        marginTop: -70,
        bottom: 35, }}>
            Rekomendasi
      </Text>
      
      
      <View
      style={{
        width: 51,
        height: 51,
        backgroundColor: '#42bcf5',
        marginVertical: 10,
        top: -546,
        left: 320,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      
      
      
    >
      
      
      
      <Icon name="options" size={32} color="white" />
    
      
    </View>
       <TouchableOpacity onPress={() => navigation.navigate('DetailProduk')}>
        <View style={{ width: 85, height: 83, backgroundColor: 'green', marginRight: 10, top: -100, marginLeft: 14, borderRadius: 21 }}>
        </View>
      </TouchableOpacity>
      
    </View>
    
  );
};

export default HomeScreen;
