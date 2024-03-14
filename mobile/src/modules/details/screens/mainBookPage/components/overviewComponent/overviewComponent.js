import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function OverviewComponent(props) {
  const {data} = props;
  return (
    <View style={styles.textWrapperContainer}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}
