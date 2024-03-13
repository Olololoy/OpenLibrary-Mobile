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

  const [currentQuery, setcurrentQuery] = React.useState('');
  const [flatlistData, setflatlistData] = React.useState(1);
  const [notPage, setnotPage] = React.useState(1); // initial fetch page = 1 and so on
  const [recentAcceptableResponse, setrecentAcceptableResponse] =
    React.useState({
      q: '',
      offset: '0',
    });
  const [loadingQueryFetch, setloadingQueryFetch] = React.useState(false);
  const [loadingPaginationFetch, setloadingPaginationFetch] =
    React.useState(false);

  function fetchQueryData(query) {
    if (query) {
      setrecentAcceptableResponse({
        q: query,
        offset: '0',
      });
      setloadingQueryFetch(true);
      setloadingPaginationFetch(false); // isko response .then me bhi rakh sakte hai
      setcurrentQuery(query);
      const resPromise = axios.get('https://openlibrary.org/search.json', {
        params: {
          q: query,
          limit: '15',
          offset: '0',
        },
      });
      resPromise.then(res => {
        if (
          res?.data?.q === recentAcceptableResponse.q &&
          res?.data?.offset === recentAcceptableResponse.offset
        ) {
          setnotPage(1);
          setflatlistData(res?.data?.docs);
          setloadingQueryFetch(false);
        }
      });
    } else {
      setrecentAcceptableResponse({
        q: '',
        offset: '0',
      });
      setloadingQueryFetch(false);
      setloadingPaginationFetch(false);
      setflatlistData([]);
      setcurrentQuery(query);
    }
  }

  function fetchPaginationData() {
    if (!loadingQueryFetch && !loadingPaginationFetch) {
      setloadingPaginationFetch(true);
      const newOffset = (notPage * 15 + 1).toString();
      setrecentAcceptableResponse({
        q: currentQuery,
        offset: newOffset,
      });

      const resPromise = axios.get('https://openlibrary.org/search.json', {
        params: {
          q: currentQuery,
          limit: '15',
          offset: newOffset,
        },
      });
      resPromise.then(res => {
        // console.log(res?.data?.);
        if (
          res?.data?.q === recentAcceptableResponse.q &&
          res?.data?.offset === recentAcceptableResponse.offset
        ) {
          setflatlistData(flatlistData.concat(res?.data?.docs));
          setnotPage(notPage + 1);
          setloadingPaginationFetch(false);
        }
      });
      //https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2
    }
  }

  // function fetchTypeData(query) {
  //   if (query) {
  //     const resPromise = axios.get('https://openlibrary.org/search.json', {
  //       params: {
  //         q: 'query',
  //         page: '1',
  //       },
  //     });
  //     resPromise.then(res => {
  //       // console.log(res?.data?.);
  //       if (res?.data?.q === currentQuery) {
  //         setflatlistData(res?.data?.docs);
  //       }
  //     });
  //     //https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2
  //   }
  // }

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
