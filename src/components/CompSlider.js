import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

export default function CompSlider(props) {
  return (
    <View>
      <Slider
        minimumTrackTintColor={'white'}
        maximumTrackTintColor={'white'}
        thumbTintColor={'white'}
        maximumValue={props.maximumValue}
        minimumValue={props.minimumValue}
        step={props.step}
        onValueChange={value => props.setAmount(value.toString())}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontFamily: 'Montserrat-Thin',
    color: 'white',
  },
});
