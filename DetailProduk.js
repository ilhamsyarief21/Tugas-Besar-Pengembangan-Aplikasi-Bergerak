import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const DetailProduk = ({ route }) => {
  const { course_name } = route.params;
  const [fontLoaded, setFontLoaded] = useState(false);
  const [instructorName, setInstructorName] = useState('');
  const [price, setPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const loadFont = async () => {
      try {
        await Font.loadAsync({
          'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
          'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
          'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setIsLoading(false);
      }
    };

    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://si-sdm.id/ecourse/api/web/v1/courses/get-item?id=${route.params.course_id}`);
        const data = await response.json();
    
        console.log('API Response:', data);
    
        if (data.status === 'ok') {
          const course = data.data;
          const instructorName = course.pengajar;
          const price = course.harga;
          const descriptionFromAPI = course.deskripsi;
          const durationFromAPI = course.durasi;
    
          console.log('Nama Pengajar:', instructorName);
          console.log('Harga:', price);
          console.log('Deskripsi dari API:', descriptionFromAPI);
          console.log('Durasi dari API:', durationFromAPI);
    
          setInstructorName(instructorName);
          setPrice(price);
          setDescription(descriptionFromAPI);
          setDuration(durationFromAPI);
        } else {
          console.error('Failed to fetch course details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFont();
    fetchCourseDetails();
  }, []);

  const handlePress = () => {
    navigation.navigate('Checkout', {
      course_name: course_name,
      price: price,
    });
  };

  const ilham = () => {
    navigation.navigate('Home');
  };

  const galleryImages = [
    { source: require('./assets/image/12.jpg'), width: 75, height: 75 },
    { source: require('./assets/image/13.jpg'), width: 75, height: 75 },
    { source: require('./assets/image/14.jpg'), width: 75, height: 75 },
    { source: require('./assets/image/15.jpg'), width: 75, height: 75 },
  ];
  

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50 }}>
      <View style={{ width: 358.103, height: 324.965, borderRadius: 21.379, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./assets/image/11.jpg')}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 21.379,
            backgroundColor: 'black',
            opacity: 0.7,
          }}
          resizeMode="cover"
        />
        <FontAwesome5 name="stopwatch" size={15} color="white" style={{ marginTop: -15, top: -30, left: -138 }} />
        <Text style={{ fontFamily: 'raleway-bold', position: 'absolute', top: '63%', color: 'white', left: 30, marginTop: 20, fontSize: 20 }}>
          {course_name}
        </Text>
      </View>
      <TouchableOpacity onPress={ilham}>
        <FontAwesome5
          name="angle-left"
          size={25}
          color="white"
          style={{ marginTop: -25, top: -280, left: -150 }}
        />
      </TouchableOpacity>
      <FontAwesome5
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
        {description}
      </Text>
      <Image
        source={require('./assets/image/terbaru.png')}
        style={{
          width: 45,
          height: 45,
          borderRadius: 30,
          marginTop: 50,
          marginLeft: 20,
          left: -165,
        }}
      />
      <Text style={{
        fontFamily: 'raleway-regular',
        position: 'absolute',
        top: '50%',
        color: 'white',
        top: 190,
        left: 80,
        marginTop: 137
      }}>{duration !== null ? `${duration} Hari` : 'Loading...'}</Text>

      <View style={{ marginTop: 20, paddingHorizontal: 20, left: -36, top: -65 }}>
        <Text style={{ fontSize: 12, fontFamily: 'raleway-medium' }}>{instructorName}</Text>
        <Text style={{ fontSize: 12, fontFamily: 'raleway-regular', color: '#858585' }}>Main Tutor</Text>
      </View>
      <View style={{ width: 29.31, height: 29.31, backgroundColor: '#82c4e9', marginTop: -90, top: -8, left: 100, borderRadius: 5 }} />
      <FontAwesome5 name="phone" size={15} color="white" style={{ marginTop: -16, left: 100, top: -14 }} />
      <View style={{ width: 29.31, height: 29.31, backgroundColor: '#82c4e9', marginTop: -90, top: 53, left: 140, borderRadius: 5 }} />
      <FontAwesome5 name="comment" size={15} color="white" style={{ marginTop: -10, top: 40, left: 140 }} />

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
      <Text style={{ fontSize: 17, color: 'black', marginLeft: -190, top: 20, fontFamily: 'raleway-medium' }}>
        {price !== null ? `Rp. ${price} / paket` : 'Loading...'}
      </Text>
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
