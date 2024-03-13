import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';
import {ms} from 'react-native-size-matters/extend';
import {urlCreator} from '../../utils/commonFunctions.js';

export default function BookCarousel(props) {
  const {data = [], title = '', titleMargin = 30, navigate} = props;
  console.log(navigate);
  const renderTitle = title === '' ? false : true;

  // url (url creator), title, author
  //image url broken case how to get to know and how to handle ??
  // watchlisted not handling here
  // multiple authors

  function renderItem({item, index}) {
    const final_url = urlCreator(item?.cover_i, 'medium');
    //TODO: handle multiple authors
    // const authorName = !(item?.authors?.length > 1) ? item.authors[0].name : (item.authors[0].name + ', ' + item.authors[1].name.slice(0,4) + '...');
    const authorName = item.author_name[0];
    //TODO: handle spaces at the end of ellipsis
    // const titleName = item?.title?.length > 10 ? item?.title.slice(0,16) + '..' : item?.title;
    const titleName = item.title;
    const marginLeft = index === 0 ? ms(30) : 0;

    return (
      <Pressable
        style={[styles.item.outerContainer, {marginLeft}]}
        onPress={() => {
          console.log('euuasdf');
          navigate('MainBookPage', item);
        }}>
        <View
          style={{
            elevation: 4,
            shadowColor: 'black',
            borderRadius: ms(20),
            width: ms(160), // CHECK: maybe not needed
          }}>
          <Image
            style={styles.item.image}
            source={{uri: final_url}}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.item.titleText} numberOfLines={1}>
          {titleName}
        </Text>
        <Text style={styles.item.authorText} numberOfLines={1}>
          {authorName}
        </Text>
      </Pressable>
    );
  }

  function keyExtractor(item) {
    return item?.key?.toString();
  }

  return (
    <View style={styles.outerContainer}>
      {renderTitle ? (
        <Text style={[styles.titleText, {marginLeft: ms(titleMargin)}]}>
          {title}
        </Text>
      ) : null}
      <FlatList
        style={styles.flatlistOuterContainer}
        contentContainerStyle={styles.flatlistContentContainer}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        //header for the initial margin
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
