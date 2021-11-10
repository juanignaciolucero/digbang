import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function WrapButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{hight: '100%', backgroundColor: props.color}}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    flexWrap: 'wrap',
    color: 'white',

    height: 33,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
