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
import {YellowBookmark, GrayBookmark, BackIcon} from '../../../../assets/svgs';
import OverviewComponent from './components/overviewComponent/overviewComponent';
import AuthorDescriptionComponent from './components/authorDescriptionComponent/authorDescriptionComponent';
import CustomerReviewsComponent from './components/customerReviewsComponent/customerReviewsComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchValuesFromItem} from '../../../../utils/commonFunctions';

export default function MainBookPage(props) {
  const {
    route: {params},
    navigation,
  } = props;

  useEffect(() => {
    // console.log(params);
  });

  const {
    authorName,
    final_url,
    titleName,
    author_key,
    key,
    publishedYear,
    ratings,
    coverID,
  } = fetchValuesFromItem(params);

  // ye case check kar sakte hai ki wo key bejni chahiye hai ya anhi aur saare cases handled hai ya nahi
  const storageItem = {
    author_key: author_key,
    title: titleName,
    ratings_average: ratings,
    first_publish_year: publishedYear,
    author_name: [authorName],
    cover_id: coverID,
    key: key,
  };
  // console.log(author_key);
  // console.log(key);

  // console.log(navigation);
  //from navigation props
  //title{string} , key{/works/OL41495W} , author{string}, cover_id{number}
  // https://openlibrary.org/works/OL41495W.json
  // const bookKey = '/works/OL41495W';
  // const authorKey = '/authors/OL23919A';
  const [descriptionState, setdescriptionState] = useState('Loading Data...');
  const [authorDescription, setauthorDescription] = useState('Loading Data...');
  const [isBookmarked, setisBookmarked] = useState(false);
  // const [isBookmarkedInitial, setisBookmarkedInitial] = useState(false);

  // const [bookmarkhasChanged, setbookbookmarkhasChanged] = useState(false);
  // const [favouriteDataMap, setfavouriteDataMap] = useState({});
  const [bookmarkChangeInitiated, setbookmarkChangeInitiated] = useState(false);

  const [currentTab, setcurrentTab] = useState('overview');

  useEffect(() => {
    // sample url https://openlibrary.org/works/OL45804W.json
    const promise = axios.get(`https://openlibrary.org${key}.json`);
    // const promise = axios.get(`https://openlibrary.org/works/OL45804W.json`);
    promise
      .then(res => {
        // console.log(res?.data?.description);
        if (
          !res?.data?.description ||
          res?.data?.description == '' ||
          typeof res?.data?.description != 'string'
        ) {
          setdescriptionState('Data not available in Database...');
        } else {
          setdescriptionState(res?.data?.description.toString());
        }
      })
      .catch(e => {
        setauthorDescription('Data Unavailable, Please try again later');
      });
  }, []);

  useEffect(() => {
    // sample url https://openlibrary.org/authors/OL23919A.json
    // /authors/OL23919A
    const promise = axios.get(`https://openlibrary.org${author_key}.json`);
    // const promise = axios.get(`https://openlibrary.org/authors/OL23919A.json`);

    promise
      .then(res => {
        // console.log(res?.data?.bio);
        if (
          !res?.data?.bio ||
          res?.data?.bio == '' ||
          typeof res?.data?.bio != 'string'
        ) {
          setauthorDescription('Data not available in Database...');
        } else {
          setauthorDescription(res?.data?.bio);
        }
      })
      .catch(e => {
        setauthorDescription('Data Unavailable, Please check later');
      });
  }, []);

  /*
a
a
a

a
*/

  useEffect(() => {
    const storagePromise = AsyncStorage.getItem('fav_Item_Map');
    storagePromise
      .then(data => {
        if (data) {
          console.log(data);
          const map = JSON.parse(data);
          if (map[key]) {
            setisBookmarked(true);
            // setisBookmarkedInitial(true);
          }
        }
      })
      .catch(e => {
        console.log('asyncStorageError_BookMainPage', e);
      });

    // return () => {
    //   console.log('unmounted');
    //   if (isBookmarkedInitial !== isBookmarked) {
    //   }

    //   if (isBookmarkedInitial !== isBookmarked) {
    //     const storagePromise = AsyncStorage.getItem('fav_Item_Map');

    //     storagePromise
    //       .then(data => {
    //         const map = JSON.parse(data);
    //         console.log(map);
    //         if (isBookmarked) {
    //           map[params?.title] = true;
    //         } else {
    //           delete map[params?.title];
    //         }
    //         return AsyncStorage.setItem('fav_Item_Map', JSON.stringify(map));
    //       })
    //       .then(() => {
    //         console.log(AsyncStorage.getAllKeys());
    //       })
    //       .catch(e => {
    //         console.log('asyncStorageError_BookMainPage', e);
    //       });
    //   }
    // };
  }, []);

  /* 
  aaaa
  a
  a
  a
  a

  a
  a*/

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      navigation.goBack,
    );
    return () => backHandler.remove();
  }, []);

  /**a
   * a
   * a
   * a
   * a
  a**/

  const pressBookmark = React.useCallback(
    function () {
      // console.log('LogCheck', 'Z', bookmarkChangeInitiated);

      if (!bookmarkChangeInitiated) {
        setbookmarkChangeInitiated(true);
        const storagePromise = AsyncStorage.getItem('fav_Item_Map');

        storagePromise
          .then(data => {
            if (data) {
              const map = JSON.parse(data);
              // console.log(map);
              if (!isBookmarked) {
                map[key] = storageItem;
              } else {
                delete map[key];
              }
              return AsyncStorage.setItem('fav_Item_Map', JSON.stringify(map));
            } else {
              const object = {};
              object[key] = storageItem;
              return AsyncStorage.setItem(
                'fav_Item_Map',
                JSON.stringify(object),
              );
            }
          })
          .then(() => {
            setbookmarkChangeInitiated(false);
            setisBookmarked(!isBookmarked);
          })
          .catch(e => {
            console.log('asyncStorageError_BookMainPage', e);
          })
          .finally(() => {
            // if (bookmarkChangeInitiated) {
            //callback ki bakchodi
            setbookmarkChangeInitiated(false);
            // }
          });

        // .then(() => {
        //   console.log(AsyncStorage.getAllKeys());
        // })
      }
    },
    [isBookmarked, bookmarkChangeInitiated],
  );

  /**a
   * a
   * a
   * a
   * a
  a**/
  function renderUI() {
    switch (currentTab) {
      case 'overview':
        return <OverviewComponent data={descriptionState} />;
      case 'author':
        return <AuthorDescriptionComponent data={authorDescription} />;
      case 'reviews':
        return <CustomerReviewsComponent />;
    }
  }

  function getLine(tab) {
    return tab === currentTab ? mvs(1) : null;
  }

  function tabPressed(tab) {
    setcurrentTab(tab);
    // console.log(currentTab, tab);
  }
  // const authorName = params.author_name[0];

  return (
    <>
      <View style={styles.header.outer}>
        <Pressable
          style={styles.header.left_backButton}
          onPress={navigation.goBack}
          hitSlop={10}>
          <BackIcon {...styles.header.left_backButton} />
        </Pressable>
        <Pressable
          style={styles.header.right_bookmark}
          onPress={pressBookmark}
          hitSlop={10}>
          {isBookmarked ? (
            <YellowBookmark
              {...{
                height: styles.header.right_bookmark.height,
                width: styles.header.right_bookmark.width,
              }}
            />
          ) : (
            <GrayBookmark
              {...{
                height: styles.header.right_bookmark.height,
                width: styles.header.right_bookmark.width,
              }}
            />
          )}
        </Pressable>
      </View>
      <View style={styles.bookNcontent.outerMost}>
        <View style={[styles.bookNcontent.bookContainer]}>
          <Image
            source={{uri: final_url}}
            // source={{uri: 'https://covers.openlibrary.org/a/olid/13274634-M.jpg'}}

            style={styles.bookNcontent.bookImageStyles}
          />
        </View>
        <Text style={styles.bookNcontent.titleText}>{titleName}</Text>
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
            tabPressed('overview');
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
            tabPressed('author');
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
            tabPressed('reviews');
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
