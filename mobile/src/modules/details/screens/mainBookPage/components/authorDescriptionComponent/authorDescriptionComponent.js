import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function AuthorDescriptionComponent({data}) {
  // const newDataArray = data.split('.');
  // console.log(newDataArray);
  // const data1 = newDataArray.slice(0, 5).reduce((a, v) => {
  //   a = a + '.' + v;
  // }, '');
  // const data2 =
  //   newDataArray.length > 5
  //     ? newDataArray.slice(5, newDataArray.length).reduce((a, v) => {
  //         a = a + '.' + v;
  //       }, '')
  //     : null;
  return (
    <View style={styles.textWrapperContainer}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}
