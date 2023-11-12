import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailProduk = ({ navigation }) => {
  return (
    <View>
      <Text>Detail Produk</Text>
      <Button
        title="Ke Halaman Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}

export default DetailProduk;
