import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles.js';
import {SearchBarComponent} from '../../../../commonComponents/index.js';
import {urlCreator} from '../../../../utils/commonFunctions.js';

export default function ParentSearchScreen() {
  const DATA = [
    {id: r()},
    {id: r()},
    {id: r()},
    {id: r()},
    {id: r()},
    {id: r()},
  ];

  function r() {
    return Math.random().toString();
  }

  function renderItem() {
    return (
      <View style={styles.flatlistItems.outerContainer}>
        <View style={styles.flatlistItems.imageWrapper}>
          <Image
            source={{uri: urlCreator(7276393, 'medium')}}
            style={styles.flatlistItems.image}
          />
        </View>
        <View style={styles.flatlistItems.headingsContainer.self}>
          <Text
            style={styles.flatlistItems.headingsContainer.titleText}
            numberOfLines={2}>
            Harry Potter and The Half Blood Prince
          </Text>
          <Text style={styles.flatlistItems.headingsContainer.authorText}>
            JK Rowling
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
              1999
            </Text>
          </Text>
          <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Languages:
            <Text
              style={
                styles.flatlistItems.headingsContainer.miniHeadingText
                  .nestedTextValue
              }>
              {' '}
              English
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  function renderItem_() {
    return (
      <View style={styles.flatlistItems.outerContainer}>
        <View style={styles.flatlistItems.imageWrapper}>
          <Image
            source={{uri: urlCreator(7276393, 'medium')}}
            style={styles.flatlistItems.image}
          />
        </View>
        <View style={styles.flatlistItems.headingsContainer.self}>
          <Text
            style={styles.flatlistItems.headingsContainer.titleText}
            numberOfLines={3}>
            Harry Potter and The Half Blood Prince
          </Text>
          {/* <Text style={styles.flatlistItems.headingsContainer.authorText}>
            Author_name
          </Text> */}
          <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Author:
          </Text>
          <Text
            style={
              styles.flatlistItems.headingsContainer.miniHeadingText
                .nestedTextValue
            }>
            {' '}
            JK Rowling
          </Text>
          <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Published:
          </Text>
          <Text
            style={
              styles.flatlistItems.headingsContainer.miniHeadingText
                .nestedTextValue
            }>
            {' '}
            1999
          </Text>
          <Text
            style={styles.flatlistItems.headingsContainer.miniHeadingText.self}>
            Languages:
          </Text>
          <Text
            style={
              styles.flatlistItems.headingsContainer.miniHeadingText
                .nestedTextValue
            }>
            {' '}
            English
          </Text>
        </View>
      </View>
    );
  }

  function keyExtractor(item) {
    return item?.id.toString();
  }

  return (
    <>
      <View style={styles.header.outer}>
        <View style={styles.header.backButton}>
          <Text></Text>
        </View>
      </View>
      <View style={styles.searchWrapperContainer.self}>
        <SearchBarComponent isDisabled={false} />
      </View>
      <View style={styles.sortNfilter.outerContainer}>
        {/* <Text>hello</Text> */}
      </View>
      <FlatList
        style={styles.flatlistContainer.outerContainer}
        contentContainerStyle={styles.flatlistContainer.contentContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
/*

<View style={}>
        
</View>

*/
