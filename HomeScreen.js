import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(Array.from({ length: 6 }, (_, i) => i));
  const [clickedIndex, setClickedIndex] = useState(null);
  const [categories, setCategories] = useState([]);

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
  
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://si-sdm.id/ecourse/api/web/v1/courses/all');
        const result = await response.json();
  
        // Ensure that result.items is an array
        if (Array.isArray(result.items)) {
          setCategories(result.items);
        } else {
          console.error('API response does not contain an array of items:', result);
          setCategories([]); // Set an empty array as a fallback
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    loadFont();
    fetchCategories();
  }, []);
  
  if (!fontLoaded) {
    return null;
  }

  

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    
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
    width: 520,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 20,
  },
};


  const itemTexts = Array.isArray(categories) ? categories.map(category => category.category) : [];

  const handlePressLeft = () => {
  
  };

  const handlePressRight = () => {
    
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontFamily: 'raleway-medium', color: '#838383', fontSize: 15, marginTop: 70, marginLeft: 13, top: -20 }}>Kategori</Text>
          <Text style={{ fontFamily: 'raleway-medium', color: 'black', fontSize: 21, marginTop: -25, marginLeft: 13, top: 10 }}>Programming</Text>
      
    </View>
    
    
    
    

        <View style={{ position: 'absolute', top: 81, marginLeft: 151 }}>
          <Icon name="chevron-down" size={25} color="#838383" />
        </View>
        
        <View style={{ position: 'absolute', top: 70, right: 10 }}>
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
      
      
      
      
      <Icon name="search" size={29} color="#838383" style={{ position: 'absolute', left: 20, top: 126 }} />
        
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
        {categories.map((course, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('DetailProduk', { course_name: course.course_name, course_id: course.id })}
          >
            <View style={{ width: 237, height: 290, marginRight: 10, top: 20, marginLeft: 6, borderRadius: 21, overflow: 'hidden' }}>
              <Image
                source={course.course_name === 'Course1' ? require('./assets/image/1.jpeg') : require('./assets/image/2.jpeg')}
                style={{ width: '100%', height: '100%', borderRadius: 21 }}
              />
              <View style={{ position: 'absolute', bottom: 5, left: 0, right: 0, height: 100, borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: 0.3 }} />
              <View style={{ position: 'absolute', top: 203, left: 10 }}>
                <Text style={{ color: 'white', fontFamily: 'raleway-medium', fontSize: 17 }}>
                  {course.course_name}
                </Text>
                <Text style={{ color: 'white', fontFamily: 'raleway-medium', fontSize: 12, marginTop: 5 }}>
                  {course.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>


    
    
    

          

      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: 'gray', 
        fontSize: 15, 
        marginLeft: 300,
        marginTop: 35,
        top: -430,
        bottom: 356 }}>
            See more
      </Text>
      
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 20, 
        marginLeft: 15,
        marginTop: 40,
        bottom: 410,
        top: -493 }}>
            Populer
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#858585', 
        fontSize: 15, 
        marginLeft: 206,
        marginTop: -45,
        top: -115,
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
        marginTop: -25,
        top: 101,
        left: 93,
        }}>
            1 Certificate
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#858585', 
        fontSize: 14, 
        marginLeft: 95,
        left: 93,
        marginTop: -8,
        top: -2,
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
        marginTop: -18,
        top: 88,
        bottom: 70, }}>
            20 Video
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#858585', 
        fontSize: 14, 
        marginLeft: 15,
        left: 93,
        marginTop: -10,
        top: -12,
        bottom: 35, }}>
            60 Video
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#0A8ED9', 
        fontSize: 14, 
        marginLeft: 15,
        left: 93,
        marginTop: -23,
        top: 55,
        bottom: 35, }}>
            Rp. 200.000 / paket
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-regular', 
        color: '#0A8ED9', 
        fontSize: 14, 
        marginLeft: 15,
        left: 93,
        marginTop: -30,
        top: -25,
        bottom: 35, }}>
            Free
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 17, 
        marginLeft: 15,
        left: 93,
        marginTop: -20,
        top: 35,
        bottom: 35, }}>
            React advance 30 hari
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 17, 
        marginLeft: 15,
        left: 93,
        marginTop: -30,
        top: -48,
        bottom: 35, }}>
            Laravel dalam 20 hari
      </Text>
      <Text style={{ 
        fontFamily: 'raleway-medium', 
        color: 'black', 
        fontSize: 20, 
        marginLeft: 15,
        marginTop: -70,
        top: -70,
        bottom: 35, }}>
            Rekomendasi
      </Text>
      
      
      <View
      style={{
        width: 51,
        height: 51,
        backgroundColor: '#42bcf5',
        marginVertical: 10,
        top: -605,
        left: 340,
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
    <TouchableOpacity onPress={() => navigation.navigate('DetailProduk', { course_name: 'Belajar PHP', pengajar: 'Riza Agustiansyah, S.T., M.T., Ph.D', course_id: 1 })}>
  <View style={{ width: 85, height: 83, marginRight: 10, top: -100, marginLeft: 14, borderRadius: 21, overflow: 'hidden' }}>
    <Image source={require('./assets/image/bawah1.jpeg')} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('DetailProduk', { course_name: 'Belajar React Native', pengajar: 'ARI FAJAR SANTOSO', course_id: 2 })}>
  <View style={{ width: 85, height: 83, marginRight: 10, top: -10, marginLeft: 14, borderRadius: 21, overflow: 'hidden', marginTop: -80 }}>
    <Image source={require('./assets/image/bawah2.jpeg')} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
  </View>
</TouchableOpacity>



      
    </View>
    
  );
};

export default HomeScreen;
