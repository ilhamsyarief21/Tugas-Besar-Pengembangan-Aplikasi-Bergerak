import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Font from 'expo-font';
import { useRoute } from '@react-navigation/native';

const Checkout = () => {
  const route = useRoute();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPackets, setTotalPackets] = useState(0);
  const [voucherCode, setVoucherCode] = useState('');

  const loadFonts = async () => {
    await Font.loadAsync({
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const handleHitung = () => {
    const pricePerPackage = 250000;
    const enteredQuantity = parseInt(quantity) || 0;
    let calculatedTotalPrice = pricePerPackage * enteredQuantity;

    if (voucherCode === 'POTONGAN50%') {
      const discountPercentage = 50;
      const discountAmount = (calculatedTotalPrice * discountPercentage) / 100;
      calculatedTotalPrice -= discountAmount;

      // Alert for successful voucher application
      Alert.alert('Berhasil', 'Voucher Berhasil Dipasang!');
    } else {
      // Alert for incorrect voucher code
      Alert.alert('Error', 'Kode Voucher Tidak Ditemukan!');
    }

    setTotalPrice(calculatedTotalPrice);
    setTotalPackets(enteredQuantity);
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.course_name}</Text>

      <View style={styles.box}></View>
      <Text style={{ bottom: 75, fontFamily: 'raleway-medium' }}>Price</Text>
      <Text style={{ bottom: 75, fontFamily: 'raleway-bold', fontSize: 23 }}>
        Rp. {route.params.price} / paket
      </Text>
      <Text style={{ bottom: 75, fontFamily: 'raleway-medium', fontSize: 15, top: -50, left: 30 }}>
        Jumlah paket
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        transparent={true}
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />
      <Text style={{ bottom: 75, fontFamily: 'raleway-medium', fontSize: 15, top: -50, left: 30 }}>
        Voucher Code
      </Text>
      <TextInput
        style={styles.input1}
        keyboardType="default"
        transparent={true}
        value={voucherCode}
        onChangeText={(text) => setVoucherCode(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleHitung}>
        <Text style={{ fontFamily: 'raleway-medium', fontSize: 18, color: 'black' }}>Hitung</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={handleHitung}>
        <Text style={{ fontFamily: 'raleway-medium', fontSize: 18, color: 'black' }}>Checkout</Text>
      </TouchableOpacity>
      <Text style={{ bottom: 75, fontFamily: 'raleway-medium', fontSize: 15, top: -50, left: 30 }}>
        Jumlah Paket: {totalPackets}
      </Text>
      <Text style={{ bottom: 75, fontFamily: 'raleway-medium', fontSize: 12, top: -15, left: 30, color: '#858585' }}>
        Total Pembayaran
      </Text>
      <Text style={{ bottom: 75, fontFamily: 'raleway-bold', fontSize: 24, top: -10, left: 32 }}>
        Rp. {totalPrice}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
    marginVertical: 20,
    top: -20,
    left: 18,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    top: 50,
    fontFamily: 'raleway-bold',
  },
  box: {
    width: 500,
    height: 80,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 60,
  },
  input: {
    height: 50,
    width: 285,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    paddingHorizontal: 10,
    left: 18,
    borderRadius: 10,
    top: -45,
  },
  input1: {
    height: 50,
    width: 285,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    paddingHorizontal: 10,
    left: 18,
    borderRadius: 10,
    top: -45,
  },
  button: {
    width: 130,
    height: 60,
    borderWidth: 2,
    top: 200,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    left: 18,
  },
  button1: {
    width: 130,
    height: 60,
    borderWidth: 2,
    top: 200,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: -70,
    left: 190,
  },
});

export default Checkout;
