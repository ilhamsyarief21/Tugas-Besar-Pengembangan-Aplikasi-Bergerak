import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

const DetailProduk = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: -25, left: -75 });

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
        'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
        'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
        // Add more fonts if needed
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Return null or loading indicator until the font is loaded
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);

    // Ubah posisi tombol setelah ditekan
    const newButtonPosition = showMore ? { top: -25, left: -18 } : { top: -25, left: 38 };
    setButtonPosition(newButtonPosition);
  };

  const longText = `Course ini dirancang khusus untuk mereka yang benar-benar baru dan ingin memulai perjalanan belajar tentang React Native. Dengan fokus pada pemula, kursus ini memberikan pemahaman mendalam tentang dasar-dasar React Native, membantu Anda membangun fondasi yang kuat dalam pengembangan aplikasi mobile menggunakan teknologi ini`;

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
      <View style={{ width: 358.103, height: 324.965, borderRadius: 21.379, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'raleway-medium' }}>React Native Untuk Pemula</Text>
        <Text style={{ fontFamily: 'raleway-medium' }}>Course Untuk Pemula</Text>
      </View>
      <Text style={{ 
        marginTop: 20, 
        marginLeft: 20, 
        fontSize: 16, 
        alignSelf: 'flex-start', 
        textAlign: 'left',
        fontFamily: 'raleway-medium' }}>
        Deskripsi
      </Text>
      <Text style={{ 
        marginTop: 10, 
        marginLeft: 20, 
        fontSize: 12, 
        alignSelf: 'flex-start', 
        textAlign: 'left',
        marginLeft: 25,
        left: -4,
        fontFamily: 'raleway-regular' }}>
        {showMore ? longText : `${longText.slice(0, 200)}...`}
      </Text>
      <TouchableOpacity onPress={toggleShowMore} style={{ marginTop: 10, marginLeft: 20, ...buttonPosition }}>
        <Text style={{ color: '#0A8ED9', fontSize: 12 }}>{showMore ? 'Show Less' : 'Show More'}</Text>
      </TouchableOpacity>
        <View style={{ width: 45, height: 45, borderRadius: 30, backgroundColor: '#0A8ED9', marginTop: -10, marginLeft: 20, left: -165 }} />
        <View style={{ marginTop: 20, paddingHorizontal: 20 , left: -70, top: -65}}>
          <Text style={{ fontSize: 17,fontFamily: 'raleway-medium' }}>Ilham Syarief</Text>
          <Text style={{ fontSize: 12, fontFamily: 'raleway-regular', color: '#858585' }}>Main Tutor</Text>
        </View>
        <View style={{ width: 29.31 , height: 29.31, backgroundColor: 'lightgray', marginTop: 20 }}>  
        </View>
         <View style={{ width: 29.31 , height: 29.31, backgroundColor: 'lightgray', marginTop: 20 }}>  
         </View>

    </View>
  );
}

export default DetailProduk;
