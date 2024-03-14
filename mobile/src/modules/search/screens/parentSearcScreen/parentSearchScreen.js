import {View, Text, FlatList, Image} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles.js';
import {SearchBarComponent} from '../../../../commonComponents/index.js';
import {urlCreator} from '../../../../utils/commonFunctions.js';
import axios from 'axios';
import {fetchValuesFromItem} from '../../../../utils/commonFunctions.js';
import {Pressable} from 'react-native';
import {mvs, ms} from 'react-native-size-matters/extend';
import {SearchIconEmptyPage} from '../../../../assets/svgs/index.js';

export default function ParentSearchScreen(props) {
  const DATA = [
    {id: r()},
    {id: r()},
    {id: r()},
    {id: r()},
    {id: r()},
    {id: r()},
  ];

  function ListEmpty() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 120,
        }}>
        <SearchIconEmptyPage height={mvs(300)} width={mvs(300)} />
      </View>
    );
  }

  const [currentQuery, setcurrentQuery] = React.useState('');
  const [flatlistData, setflatlistData] = React.useState([]);
  const [notPage, setnotPage] = React.useState(1); // initial fetch page = 1 and so on
  const [recentAcceptableResponse, setrecentAcceptableResponse] =
    React.useState({
      q: '',
      offset: '0',
    });
  const [noResults, setnoResults] = React.useState(false);
  const [loadingQueryFetch, setloadingQueryFetch] = React.useState(false);
  const [loadingPaginationFetch, setloadingPaginationFetch] =
    React.useState(false);

  const recentResponseRef = useRef();
  React.useEffect(() => {}, [loadingQueryFetch, loadingPaginationFetch]);

  function fetchQueryData(query) {
    if (query) {
      setrecentAcceptableResponse({
        q: query,
        offset: '0',
      });
      recentResponseRef.current = {
        q: query,
        offset: '0',
      };

      setloadingQueryFetch(true);
      setloadingPaginationFetch(false); // isko response .then me bhi rakh sakte hai
      setcurrentQuery(query);

      const resPromise = axios.get('https://openlibrary.org/search.json', {
        params: {
          q: query,
          limit: '40',
          offset: '0',
        },
      });
      resPromise.then(res => {
        // console.log('response received');
        // console.log(res?.data?.q, res?.data?.offset);
        // console.log(
        //   recentAcceptableResponse.q,
        //   recentAcceptableResponse.offset,
        // );

        // console.log(
        //   recentResponseRef.current.q,
        //   recentResponseRef.current.offset,
        // );
        // console.log(res?.data?.q === recentResponseRef.current.q);
        // console.log(res?.data?.offset == recentResponseRef.current.offset);

        // if (
        //   res?.data?.q === recentAcceptableResponse.q &&
        //   res?.data?.offset === recentAcceptableResponse.offset
        // ) {
        if (
          res?.data?.q === recentResponseRef.current.q &&
          res?.data?.offset == recentResponseRef.current.offset
        ) {
          // console.log('reached here');
          // console.log(res?.data);
          if (res?.data?.docs) {
            if (res?.data?.docs.length == 0) {
              setnoResults(true);
            } else {
              setnoResults(false);
            }
          }
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
      setnoResults(false);
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

  function onPressNav(item) {
    props.navigation.navigate('MainBookPage', item);
  }

  function renderItem({item}) {
    const {
      authorName,
      final_url,
      titleName,
      author_key,
      key,
      publishedYear,
      ratings,
    } = fetchValuesFromItem(item);

    console.log(author_key);
    return (
      <Pressable
        style={styles.flatlistItems.outerContainer}
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
    return item?.key?.toString();
  }

  return (
    <>
      {/* <View style={styles.header.outer}>
        <View style={styles.header.backButton}>
          <Text></Text>
        </View>
      </View> */}
      {/* <View
        style={{
          alignSelf: 'center',
          // borderWidth: '10',
          height: '1',
          width: '100',
          backgroundColor: 'green',
        }}> */}
      {/* {loadingQueryFetch || loadingPaginationFetch ? (
        <View style={{position: 'absolute', top: mvs(40)}}>
          <Text>Fetching Results...</Text>
        </View>
      ) : null} */}
      {/* </View> */}
      <View style={styles.searchWrapperContainer.self}>
        <SearchBarComponent isDisabled={false} callback={fetchQueryData} />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: mvs(5),
        }}>
        {loadingQueryFetch || loadingPaginationFetch ? 'Fetching Data...' : ''}
      </Text>
      <View style={styles.sortNfilter.outerContainer}>
        {/* <Text>hello</Text> */}
      </View>
      {noResults && !(loadingQueryFetch || loadingPaginationFetch) ? (
        <Text style={{alignSelf: 'center'}}>No Results Found</Text>
      ) : (
        <FlatList
          style={styles.flatlistContainer.outerContainer}
          contentContainerStyle={styles.flatlistContainer.contentContainer}
          data={flatlistData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmpty}
        />
      )}
    </>
  );
}
/*

<View style={}>
        
</View>

*/
