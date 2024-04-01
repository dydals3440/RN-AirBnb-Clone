import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text>Stays</Text>
    </View>
  );
};

export default ModalHeaderText;

const styles = StyleSheet.create({});
