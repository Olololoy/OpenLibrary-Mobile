import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ms, mvs} from 'react-native-size-matters/extend';
import {SearchBarComponent} from '../../../../commonComponents';
import BookCarousel from '../../../../commonComponents/bookCarouselComponent/bookCarousel';
import axios from 'axios';

export default function HomeScreen(props) {
  const [trendingData, settrendingData] = useState([]);
  const [categoryOneData, setcategoryOneData] = useState([]);

  // const trendingSince = 'now';
  const trendingSince = 'weekly';
  const trendingLink = `/trending/${trendingSince}`;

  useEffect(() => {
    // sample url https://openlibrary.org.json
    const promise = axios.get(`https://openlibrary.org${trendingLink}.json`, {
      params: {
        limit: '8',
      },
    });
    promise.then(res => {
      //   console.log(res?.data?.works.slice(0, 1));
      settrendingData(res?.data?.works.slice(0, 8));
    });
  }, []);

  useEffect(() => {
    const categoryOne = 'design';
    const categoryLink = `/subjects/${categoryOne}`;

    //https://openlibrary.org/subjects/design.json
    const promise = axios.get(`https://openlibrary.org${categoryLink}.json`);
    promise.then(res => {
      //   console.log(res?.data?.works.slice(0, 1));
      setcategoryOneData(res?.data?.works.slice(0, 10));
    });
  }, []);

  function onPress() {
    return null;
  }

  return (
    <ScrollView style={styles.parentScrollView}>
      <View style={styles.topBar.self}>
        <View style={styles.topBar.left.icon}></View>
        <View style={styles.topBar.right.self}>
          <View
            style={styles.topBar.right.inner.left_darkMode_pressable}></View>
          <View
            style={styles.topBar.right.inner.right_profile_pressable}></View>
        </View>
      </View>

      <View style={styles.middleTextContainer.self}>
        <Text style={styles.middleTextContainer.topText}>
          Welcome back, Bunny!
        </Text>
        <Text style={[styles.middleTextContainer.bottomText]}>
          What do you want to
        </Text>
        <Text style={[styles.middleTextContainer.bottomText, {right: mvs(5)}]}>
          {' '}
          read today?
        </Text>
      </View>

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.searchBarContainer.self}>
          <SearchBarComponent isDisabled={true} />
        </View>
      </TouchableWithoutFeedback>

      <BookCarousel
        title="Trending"
        data={trendingData}
        navigate={props.navigation.navigate}
      />
      {/* <BookCarousel title="Books Related to: Design" data={categoryOneData} /> */}
    </ScrollView>

    //scrollView
    // top bar
    // left1  right2
    //constantText
    //pressable disabled Search
    //Trending
    // book category carousel
    //category1
    // book category carousel
    //category2
    // book category carousel
    //Recently Visited
    // book category carousel
    //constant text at bottom
  );
}
