import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  useEffect(() => {
    console.log('Reload listings: ', listings.length);
  }, [category]);
  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({});
