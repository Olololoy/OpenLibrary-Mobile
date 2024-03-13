import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {mvs} from 'react-native-size-matters/extend';
import {urlCreator} from '../../../../utils/commonFunctions';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export default function MainBookPage(props) {
  const {
    route: {params},
    navigation,
  } = props;

  console.log(navigation);
  //from navigation props
  //title{string} , key{/works/OL41495W} , author{string}, cover_id{number}
  const bookKey = '/works/OL41495W';
  const [descriptionState, setdescriptionState] = useState('lorem ipsum ');

  useEffect(() => {
    // sample url https://openlibrary.org/works/OL45804W.json
    const promise = axios.get(`https://openlibrary.org${bookKey}.json`);
    promise.then(res => {
      // console.log(res?.data?.description);
      setdescriptionState(res?.data?.description);
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigation.goBack,
    );
    return () => backHandler.remove();
  }, []);

  function renderUI() {
    return (
      <Text>
        {descriptionState}
        {descriptionState}
        {descriptionState}
      </Text>
    );
  }

  function getLine(tab) {
    return tab === 'overview' ? mvs(1) : null;
  }

  const authorName = params.author_name[0];

  return (
    <>
      <View style={styles.header.outer}>
        <View style={styles.header.left_backButton}></View>
        <View style={styles.header.right_bookmark}></View>
      </View>
      <View style={styles.bookNcontent.outerMost}>
        <View style={styles.bookNcontent.bookContainer}>
          <Image
            source={{uri: urlCreator(params?.cover_i, 'medium')}}
            // source={{uri: 'https://covers.openlibrary.org/a/olid/13274634-M.jpg'}}

            style={styles.bookNcontent.bookImageStyles}
          />
        </View>
        <Text style={styles.bookNcontent.titleText}>{params.title}</Text>
        <Text style={styles.bookNcontent.authorText}>{authorName}</Text>
        <View style={styles.bookNcontent.reviewsWrapperContianer}>
          {/* 
            TODO: make the component
            <ReviewsComponent/>
            */}
        </View>
      </View>
      <View style={styles.tabs.outerContainer}>
        <Pressable
          onPress={() => {
            tabPressed();
          }}>
          <Text
            style={[
              styles.tabs.innerText,
              {borderBottomWidth: getLine('overview')},
            ]}>
            Overview
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            tabPressed();
          }}>
          <Text
            style={[
              styles.tabs.innerText,
              {borderBottomWidth: getLine('author')},
            ]}>
            Author
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            tabPressed();
          }}>
          <Text
            style={[
              styles.tabs.innerText,
              {borderBottomWidth: getLine('reviews')},
            ]}>
            Reviews
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.scrollViewConainer}>{renderUI()}</ScrollView>
    </>
  );
}
