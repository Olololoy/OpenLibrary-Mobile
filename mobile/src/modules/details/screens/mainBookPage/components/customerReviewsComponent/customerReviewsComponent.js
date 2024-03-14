import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function CustomerReviewsComponent({data}) {
  return (
    <View style={styles.textWrapperContainer}>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>-Developer Note-</Text>
      <Text style={styles.text}>
        Showing and Adding Customer Review was a part of the problem statement
      </Text>
      <Text style={styles.text}>
        But no publically availbale api of Open Library gave access to Customer
        Reviews data
      </Text>
      <Text style={styles.text}>
        Customer Reviews can only be fetched by HTML Scrapping but may take time
        to implement and so left for now
      </Text>
    </View>
  );
}
