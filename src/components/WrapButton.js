import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function WrapButton(props) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Montserrat-Bold',
      fontSize: props.fontSize || 10,
      flexWrap: 'wrap',
      color: 'white',
      textAlignVertical: 'center',
      textAlign: 'center',
      paddingHorizontal: 2,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          hight: '100%',
          backgroundColor: props.color,
          height: 33,
        }}>
        <Text adjustsFontSizeToFit={true} style={styles.text}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
