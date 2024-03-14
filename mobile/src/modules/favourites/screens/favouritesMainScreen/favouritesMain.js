import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SearchIconEmptyPage} from '../../../../assets/svgs';
import {BookmarkEmptyPageIcon} from '../../../../assets/svgs';
import {mvs, ms} from 'react-native-size-matters/extend';
import {useFocusEffect} from '@react-navigation/native';
import {fetchValuesFromItem} from '../../../../utils/commonFunctions';

export default function FavouritesScreen(props) {
  const [flatlistData, setflatlistData] = useState([]);

  // useEffect(() => {
  //   const storagePromise = AsyncStorage.getItem('fav_Item_Array');
  //   storagePromise
  //     .then(data => {
  //       if (data) {
  //         return JSON.parse(data);
  //       }
  //     })
  //     .then(data => {
  //       const newFlatlistData = [];
  //       for (keys in data) {
  //         newFlatlistData.push(data[keys]);
  //       }
  //       setflatlistData;
  //       //effecient kar sakte honge
  //     })
  //     .catch(e => {
  //       console.log('asyncStorageError_favouritesScreen');
  //     });
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log('logCheck', 'K');
      const storagePromise = AsyncStorage.getItem('fav_Item_Map');
      storagePromise
        .then(data => {
          console.log('logCheck', 'K1', data);
          if (data) {
            return JSON.parse(data);
          }
        })
        .then(data => {
          const newFlatlistData = [];
          for (keys in data) {
            newFlatlistData.push(data[keys]);
          }
          setflatlistData(newFlatlistData);
          //effecient kar sakte honge
        })
        .catch(e => {
          console.log('asyncStorageError_favouritesScreen');
        });
    }, []),
  );

  function ListEmpty() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 100,
        }}>
        <BookmarkEmptyPageIcon height={mvs(300)} width={mvs(300)} />
      </View>
    );
  }

  function keyExtractor(item) {
    return item?.key?.toString();
  }

  function onPressNav(item) {
    props.navigation.navigate('MainBookPage', item);
  }

  function renderItem({item, index}) {
    const {
      authorName,
      final_url,
      titleName,
      author_key,
      key,
      publishedYear,
      ratings,
    } = fetchValuesFromItem(item);

    const custMarginTop = index === 0 ? mvs(30) : 0;

    console.log(author_key);
    return (
      <Pressable
        style={[
          styles.flatlistItems.outerContainer,
          {marginTop: custMarginTop},
        ]}
        onPress={() => {
          onPressNav(item);
        }}>
        <View style={[styles.flatlistItems.imageWrapper]}>
          <Image source={{uri: final_url}} style={styles.flatlistItems.image} />
        </View>
        <View style={styles.flatlistItems.headingsContainer.self}>
          <Text
            style={styles.flatlistItems.headingsContainer.titleText}
            numberOfLines={3}>
            {titleName}
          </Text>
          <Text style={styles.flatlistItems.headingsContainer.authorText}>
            {authorName}
          </Text>

          {/* <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Autor:
            <Text
              style={
                styles.flatlistItems.headingsContainer.miniHeadingText
                  .nestedTextValue
              }>
              {' '}
              JK Rowling
            </Text>
          </Text> */}
          <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Published:
            <Text
              style={
                styles.flatlistItems.headingsContainer.miniHeadingText
                  .nestedTextValue
              }>
              {' '}
              {!publishedYear ? 'unknown' : publishedYear}
            </Text>
          </Text>
          <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Rating:
            <Text
              style={
                styles.flatlistItems.headingsContainer.miniHeadingText
                  .nestedTextValue
              }>
              {!ratings ? '  N/A' : ' ⭐' + ratings.toString().slice(0, 4)}
            </Text>
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <>
      <Text style={styles.headerText}>
        Saved <Text style={{fontSize: ms(28)}}>Books</Text>
      </Text>
      {/* {noResults && !(loadingQueryFetch || loadingPaginationFetch) ? (
        <Text style={{alignSelf: 'center'}}>No Results Found</Text>
      ) : ( */}
      <FlatList
        style={styles.flatlistContainer.outerContainer}
        contentContainerStyle={styles.flatlistContainer.contentContainer}
        data={flatlistData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmpty}
      />
      {/* )} */}
    </>
  );
}
