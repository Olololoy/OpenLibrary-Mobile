import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {mvs} from 'react-native-size-matters/extend';
import {urlCreator} from '../../../../utils/commonFunctions';
import axios from 'axios';

export default function MainBookPage(props) {
  //from navigation props
  //title{string} , key{/works/OL41495W} , author{string}, cover_id{number}
  const bookKey = '/works/OL41495W';
  const [descriptionState, setdescriptionState] = useState('lorem ipsum ');

  useEffect(() => {
    // sample url https://openlibrary.org/works/OL45804W.json
    const promise = axios.get(`https://openlibrary.org${bookKey}.json`);
    promise.then(res => {
      console.log(res?.data?.description);
      setdescriptionState(res?.data?.description);
    });
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
  return (
    <>
      <View style={styles.header.outer}>
        <View style={styles.header.left_backButton}></View>
        <View style={styles.header.right_bookmark}></View>
      </View>
      <View style={styles.bookNcontent.outerMost}>
        <View style={styles.bookNcontent.bookContainer}>
          <Image
            source={{uri: urlCreator(7276393, 'large')}}
            // source={{uri: 'https://covers.openlibrary.org/a/olid/13274634-M.jpg'}}

            style={styles.bookNcontent.bookImageStyles}
          />
        </View>
        <Text style={styles.bookNcontent.titleText}>Book_Title</Text>
        <Text style={styles.bookNcontent.authorText}>AuthorName</Text>
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
