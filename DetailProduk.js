import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const DetailProduk = ({ route }) => {
  const { course_name } = route.params;setFontLoaded
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: -25, left: -75 });
  const [instructorName, setInstructorName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
        'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
        'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      });
      setFontLoaded(true);
    };

    const fetchInstructorName = async () => {
      try {
        const response = await fetch('http://si-sdm.id/ecourse/api/web/v1/courses/all');
        const data = await response.json();
    
        console.log('API Response:', data);
    
        // Find the course with the specified course_id
        const course = data.items.find(item => item.id === route.params.course_id);
    
        if (course) {
          // Log the instructor's name
          const instructorName = course.pengajar;
          console.log('Nama Pengajar:', instructorName);
    
          setInstructorName(instructorName);
        } else {
          console.error('Course not found for course_id:', route.params.course_id);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFont();
    fetchInstructorName();
  }, []);

  if (!fontLoaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);

    // Ubah posisi tombol setelah ditekan
    const newButtonPosition = showMore ? { top: -25, left: -18 } : { top: -25, left: 38 };
    setButtonPosition(newButtonPosition);
  };

  const longText = `Course ini dirancang khusus untuk mereka yang benar-benar baru dan ingin memulai perjalanan belajar tentang React Native. Dengan fokus pada pemula, kursus ini memberikan pemahaman mendalam tentang dasar-dasar React Native, membantu Anda membangun fondasi yang kuat dalam pengembangan aplikasi mobile menggunakan teknologi ini`;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Checkout', { course_name: course_name });
  };
  

  const ilham = () => {
    navigation.navigate('Home'); // 'Checkout' adalah nama stack/halaman yang ingin Anda arahkan
  };

  const galleryImages = [
    { source: require('./assets/image/3.jpeg'), width: 75, height: 75 },
    { source: require('./assets/image/4.jpeg'), width: 75, height: 75 },
    { source: require('./assets/image/5.jpeg'), width: 75, height: 75 },
    { source: require('./assets/image/6.jpeg'), width: 75, height: 75 },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
      <View style={{ width: 358.103, height: 324.965, borderRadius: 21.379, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./assets/image/1.jpeg')}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 21.379,
            backgroundColor: 'black',
            opacity: 0.7,
          }}
          resizeMode="cover"
        />
        <FontAwesome name="bed" size={15} color="white" style={{ marginTop: -15, top: -30, left: -138 }} />
        <FontAwesome name="bath" size={15} color="white" style={{ marginTop: -15, top: -32, left: -20 }} />
        <Text style={{ fontFamily: 'raleway-bold', position: 'absolute', top: '63%', color: 'white', left: 30, marginTop: 20, fontSize: 20 }}>
          {course_name}
        </Text>
      </View>
      <TouchableOpacity onPress={ilham}>
        <FontAwesome
          name="angle-left"
          size={25}
          color="white"
          style={{ marginTop: -25, top: -280, left: -150 }}
        />
      </TouchableOpacity>
      <FontAwesome
        name="bookmark"
        size={22}
        color="white"
        style={{ marginTop: -23, top: -280, left: 140 }}
      />
      <Text style={{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontFamily: 'raleway-medium'
      }}>
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
        fontFamily: 'raleway-regular'
      }}>
        {showMore ? longText : `${longText.slice(0, 200)}...`}
      </Text>
      <TouchableOpacity onPress={toggleShowMore} style={{ marginTop: 10, marginLeft: 20, ...buttonPosition }}>
        <Text style={{ color: '#49aee7', fontSize: 12 }}>{showMore ? 'Show Less' : 'Show More'}</Text>
      </TouchableOpacity>
      <Image
        source={require('./assets/image/terbaru.png')} // Ganti dengan path gambar Anda
        style={{
          width: 45,
          height: 45,
          borderRadius: 30,
          marginTop: -10,
          marginLeft: 20,
          left: -165,
        }} />
      <Text style={{
        fontFamily: 'raleway-regular',
        position: 'absolute',
        top: '50%',
        color: 'white',
        top: 190,
        left: 80,
        marginTop: 137
      }}>6 Bedroom</Text>
      <Text style={{
        fontFamily: 'raleway-regular',
        position: 'absolute',
        top: '50%',
        color: 'white',
        top: 188,
        left: 198,
        marginTop: 137
      }}>4 Bathroom</Text>
      <View style={{ marginTop: 20, paddingHorizontal: 20, left: -36, top: -65 }}>
        <Text style={{ fontSize: 12, fontFamily: 'raleway-medium' }}>{instructorName}</Text>
        <Text style={{ fontSize: 12, fontFamily: 'raleway-regular', color: '#858585' }}>Main Tutor</Text>
      </View>
      <View style={{ width: 29.31, height: 29.31, backgroundColor: '#82c4e9', marginTop: -90, top: -8, left: 100, borderRadius: 5 }} />
      <FontAwesome name="phone" size={15} color="white" style={{ marginTop: -16, left: 100, top: -14 }} />
      <View style={{ width: 29.31, height: 29.31, backgroundColor: '#82c4e9', marginTop: -90, top: 53, left: 140, borderRadius: 5 }} />
      <FontAwesome name="comment" size={15} color="white" style={{ marginTop: -10, top: 40, left: 140 }} />

      {/* Tulisan "Gallery" di bawahnya */}
      <Text style={{ fontSize: 17, fontFamily: 'raleway-medium', marginTop: 75, left: -145 }}>Gallery</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
        {galleryImages.map((image, index) => (
          <Image
            key={index}
            source={image.source}
            style={{
              width: image.width,
              height: image.height,
              borderRadius: 10,
              marginHorizontal: 5,
              marginLeft: 10,
              left: -6,
            }}
          />
        ))}
      </View>
      <Text style={{ fontSize: 12, color: '#858585', marginLeft: -320, top: 20, fontFamily: 'raleway-medium' }}>Price</Text>
      <Text style={{ fontSize: 17, color: 'black', marginLeft: -190, top: 20, fontFamily: 'raleway-medium' }}>Rp. 250.000 / paket</Text>
      <TouchableOpacity onPress={handlePress}>
        <View style={{
          width: 90,
          height: 50,
          backgroundColor: '#82c4e9',
          marginTop: 3,
          top: -23,
          left: 120,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'raleway-bold' }}>Ambil</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default DetailProduk;
