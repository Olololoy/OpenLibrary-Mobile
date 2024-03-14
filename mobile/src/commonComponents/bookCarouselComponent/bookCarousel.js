import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';
import {ms, mvs} from 'react-native-size-matters/extend';
import {urlCreator} from '../../utils/commonFunctions.js';
import {fetchValuesFromItem} from '../../utils/commonFunctions.js';

export default function BookCarousel(props) {
  const {data = [], title = '', titleMargin = 30, navigate} = props;
  // console.log(navigate);
  const renderTitle = title === '' ? false : true;

  const DATA = data.length !== 0 ? data : [{dummy: true, key: 'key'}];

  // url (url creator), title, author
  //image url broken case how to get to know and how to handle ??
  // watchlisted not handling here
  // multiple authors

  function renderItem({item, index}) {
    let final_url_a, authorName_a, titleName_a;
    if (item?.dummy) {
      authorName_a = 'loading...';
      titleName_a = 'loading...';
    } else {
      const {final_url, authorName, titleName} = fetchValuesFromItem(item);
      final_url_a =
        item?.cover_i === undefined
          ? urlCreator(item?.cover_id, 'medium')
          : urlCreator(item?.cover_i, 'medium');
      // (final_url = urlCreator(item?.cover_i, 'medium')); earlier version
      //TODO: handle multiple authors
      // const authorName = !(item?.authors?.length > 1) ? item.authors[0].name : (item.authors[0].name + ', ' + item.authors[1].name.slice(0,4) + '...');
      // if ( item?.author_name ) {
      //   authorName = item?.author_name[0]
      // } else {
      //   authorName = item?.authors[0]?.name
      // }
      authorName_a =
        item?.author_name === undefined
          ? item?.authors[0]?.name
          : item?.author_name[0];
      //TODO: handle spaces at the end of ellipsis
      // const titleName = item?.title?.length > 10 ? item?.title.slice(0,16) + '..' : item?.title;
      titleName_a = item?.title;
    }
    const marginLeft = index === 0 ? ms(30) : 0;

    return (
      <Pressable
        style={[styles.item.outerContainer, {marginLeft}]}
        onPress={() => {
          !item?.dummy ? navigate('MainBookPage', item) : null;
        }}>
        <View
          style={{
            elevation: 4,
            shadowColor: 'black',
            borderRadius: ms(20),
            width: ms(160), // CHECK: maybe not needed
            height: mvs(250),
          }}>
          {!item?.dummy ? (
            <Image
              style={styles.item.image}
              // source={item?.dummy ? require() : {uri: final_url}}
              source={{uri: final_url_a}}
              resizeMode="stretch"
            />
          ) : null}
        </View>
        <Text style={styles.item.titleText} numberOfLines={1}>
          {titleName_a}
        </Text>
        <Text style={styles.item.authorText} numberOfLines={1}>
          {authorName_a}
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
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        //header for the initial margin
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
