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
import {categoriesData} from '../../constants/constants';
import {fetchRandomFromArray} from '../../../../utils/commonFunctions';
import {AppLogo, Profile} from '../../../../assets/svgs';

export default function HomeScreen(props) {
  const [trendingData, settrendingData] = useState([]);
  const [categoryOneData, setcategoryOneData] = useState([]);
  const [categoryTwoData, setcategoryTwoData] = useState([]);
  const [categoryThreeData, setcategoryThreeData] = useState([]);
  const [categoryFourData, setcategoryFourData] = useState([]);
  const [categoriesArray, setcategoriesArray] = useState(
    fetchRandomFromArray(categoriesData, 4),
  );
  // const [categoryFiveData, setcategoryFiveData] = useState([]);

  // const trendingSince = 'now';
  const trendingSince = 'weekly';
  const trendingLink = `/trending/${trendingSince}`;

  useEffect(() => {
    //https://openlibrary.org/trending/weekly.json
    const promise = axios.get(`https://openlibrary.org${trendingLink}.json`, {
      params: {
        limit: '8',
      },
    });
    promise.then(res => {
      settrendingData(res?.data?.works.slice(0, 8));
    });
  }, []);

  useEffect(() => {
    const categoryOne = categoriesArray[0].apiKey;
    const categoryLink = `/subjects/${categoryOne}`;

    //https://openlibrary.org/subjects/design.json
    const promise = axios.get(`https://openlibrary.org${categoryLink}.json`, {
      params: {
        limit: '8',
      },
    });
    promise.then(res => {
      setcategoryOneData(res?.data?.works);
    });
  }, []);

  useEffect(() => {
    const categoryOne = categoriesArray[1].apiKey;
    const categoryLink = `/subjects/${categoryOne}`;

    //https://openlibrary.org/subjects/design.json
    const promise = axios.get(`https://openlibrary.org${categoryLink}.json`, {
      params: {
        limit: '8',
      },
    });
    promise.then(res => {
      setcategoryTwoData(res?.data?.works);
    });
  }, []);

  useEffect(() => {
    const categoryOne = categoriesArray[2].apiKey;
    const categoryLink = `/subjects/${categoryOne}`;

    //https://openlibrary.org/subjects/design.json
    const promise = axios.get(`https://openlibrary.org${categoryLink}.json`, {
      params: {
        limit: '8',
      },
    });
    promise.then(res => {
      setcategoryThreeData(res?.data?.works);
    });
  }, []);

  useEffect(() => {
    const categoryOne = categoriesArray[3].apiKey;
    const categoryLink = `/subjects/${categoryOne}`;

    //https://openlibrary.org/subjects/design.json
    const promise = axios.get(`https://openlibrary.org${categoryLink}.json`, {
      params: {
        limit: '8',
      },
    });
    promise.then(res => {
      setcategoryFourData(res?.data?.works);
    });
  }, []);

  function onPressSearch() {
    props.navigation.navigate('Search'), {reset: true};
    return null;
  }

  return (
    <ScrollView style={styles.parentScrollView}>
      {/* <View style={{position: 'absolute', }}>
        <AppLogo />
      </View> */}
      <View style={styles.topBar.self}>
        <View
          style={[styles.topBar.left.icon, {bottom: mvs(103), right: ms(73)}]}>
          <AppLogo height={mvs(225)} width={mvs(225)} />
        </View>
        <View style={styles.topBar.right.self}>
          <View
            style={styles.topBar.right.inner.left_darkMode_pressable}></View>
          <View
            style={[
              styles.topBar.right.inner.right_profile_pressable,
              {bottom: mvs(5)},
              {right: ms(7)},
              {bottom: mvs(85)},
              {right: ms(110)},
            ]}>
            {/* <Profile height={mvs(45)} width={ms(45)} /> */}
            {/* <AppLogo height={mvs(225)} width={mvs(225)} /> */}
          </View>
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

      <TouchableWithoutFeedback onPress={onPressSearch}>
        <View style={styles.searchBarContainer.self}>
          <SearchBarComponent isDisabled={true} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.carouselWrapper}>
        <BookCarousel
          title="Trending"
          data={trendingData}
          navigate={props.navigation.navigate}
        />
      </View>
      <View style={styles.carouselWrapper}>
        <BookCarousel
          title={`Random Picks ${categoriesArray[0].displayName}`}
          data={categoryOneData}
          navigate={props.navigation.navigate}
        />
      </View>
      <View style={styles.carouselWrapper}>
        <BookCarousel
          title={`Random Picks ${categoriesArray[1].displayName}`}
          data={categoryTwoData}
          navigate={props.navigation.navigate}
        />
      </View>
      <View style={styles.carouselWrapper}>
        <BookCarousel
          title={`Random Picks ${categoriesArray[2].displayName}`}
          data={categoryThreeData}
          navigate={props.navigation.navigate}
        />
      </View>
      <View style={styles.carouselWrapper}>
        <BookCarousel
          title={`Random Picks ${categoriesArray[3].displayName}`}
          data={categoryFourData}
          navigate={props.navigation.navigate}
        />
      </View>
      {/* <BookCarousel title="Random Picks Design" data={[]} /> */}
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
