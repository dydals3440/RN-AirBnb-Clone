import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { defaultStyles } from '@/constants/Styles';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  const router = useRouter();
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);

  const onClearAll = () => {};
  return (
    <BlurView intensity={70} style={styles.container} tint='light'>
      <Text>BOOK</Text>

      {/* FOOTER */}
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={onClearAll}
            style={{ justifyContent: 'center' }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'mon-sb',
                textDecorationLine: 'underline',
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          >
            <Ionicons
              name='search-outline'
              size={24}
              color={'#fff'}
              style={defaultStyles.btnIcon}
            />
            <Text style={defaultStyles.btnText}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
