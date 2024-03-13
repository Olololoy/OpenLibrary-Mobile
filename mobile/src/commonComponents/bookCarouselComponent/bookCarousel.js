import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';
import {ms} from 'react-native-size-matters/extend';
import {urlCreator} from '../../utils/commonFunctions.js';

export default function BookCarousel(props) {
  const {data = [], title = '', titleMargin = 30} = props;
  const renderTitle = title === '' ? false : true;

  console.log(data);

  const dummy_data = [
    {
      title: 'bookTitle',
      cover_id: '1604103',
      authors: ['hella'],
      key: '1',
    },
    {
      key: '10',
      title: 'bookTitle',
      cover_id: '12009823',
      authors: ['hella'],
    },
    {
      key: '100',
      title: 'bookTitle',
      cover_id: '10835926',
      authors: ['hella'],
    },
    {
      key: '1000',
      title: 'bookTitle',
      cover_id: '5140681',
      authors: ['hella'],
    },
    {
      key: '64389943',
      title: 'bookTitle',
      cover_id: '10482837',
      authors: ['hella'],
    },
    {
      key: '098343',
      title: 'bookTitle',
      cover_id: '108274',
      authors: ['hella'],
    },
    {
      key: '0121',
      title: 'bookTitle',
      cover_id: '10883671',
      authors: ['hella'],
    },
  ];

  const dummy_data_2 = [
    {
      key: '/works/OL41495W',
      title: 'A Wrinkle in Time',
      cover_id: 8709146,
      authors: [
        {
          key: '/authors/OL28188A',
          name: "Madeleine L'Engle",
        },
      ],
    },
    {
      key: '/works/OL1319418W',
      title: 'La planète des singes',
      cover_id: 1009545,
      authors: [
        {
          key: '/authors/OL134327A',
          name: 'Pierre Boulle',
        },
      ],
    },
    {
      key: '/works/OL103194W',
      title: 'Something Wicked This Way Comes',
      cover_id: 9346340,
      authors: [
        {
          key: '/authors/OL24137A',
          name: 'Ray Bradbury',
        },
      ],
    },
    {
      key: '/works/OL15719630W',
      title: 'Divergent',
      cover_id: 13274634,
      authors: [
        {
          key: '/authors/OL6895646A',
          name: 'Veronica Roth',
        },
      ],
    },
    {
      key: '/works/OL46385W',
      title: 'The Currents of Space',
      cover_id: 9302157,
      authors: [
        {
          key: '/authors/OL34221A',
          name: 'Isaac Asimov',
        },
      ],
    },
    {
      key: '/works/OL16808471W',
      title: 'Allegiant',
      cover_id: 7276393,
      authors: [
        {
          key: '/authors/OL6895646A',
          name: 'Veronica Roth',
        },
      ],
    },
    {
      key: '/works/OL16808654W',
      title: 'The Circle',
      cover_id: 8334682,
      authors: [
        {
          key: '/authors/OL32722A',
          name: 'Dave Eggers',
        },
      ],
    },
    {
      key: '/works/OL16421115W',
      title: 'Micro',
      cover_id: 9311838,
      authors: [
        {
          key: '/authors/OL28257A',
          name: 'Michael Crichton',
        },
        {
          key: '/authors/OL2348150A',
          name: 'Richard Preston',
        },
        {
          key: '/authors/OL1451570A',
          name: 'Preston, Richard',
        },
      ],
    },
    {
      key: '/works/OL17837968W',
      title: 'Artemis',
      cover_id: 8235551,
      authors: [
        {
          key: '/authors/OL7234434A',
          name: 'Andy Weir',
        },
      ],
    },
    {
      key: '/works/OL19659793W',
      title: 'Children of Blood and Bone',
      cover_id: 8572526,
      authors: [
        {
          key: '/authors/OL7511248A',
          name: 'Tomi Adeyemi',
        },
      ],
    },
    {
      key: '/works/OL27802W',
      title: 'The Mayflower Project',
      cover_id: 8310549,
      authors: [
        {
          key: '/authors/OL26392A',
          name: 'Katherine Applegate',
        },
      ],
    },
    {
      key: '/works/OL3332541W',
      title: 'The Female Man',
      cover_id: 448143,
      authors: [
        {
          key: '/authors/OL539879A',
          name: 'Joanna Russ',
        },
      ],
    },
  ];

  // url (url creator), title, author
  //image url broken case how to get to know and how to handle ??
  // watchlisted not handling here
  // multiple authors

  function renderItem({item, index}) {
    const final_url = urlCreator(item?.cover_i, 'medium');
    //TODO: handle multiple authors
    // const authorName = !(item?.authors?.length > 1) ? item.authors[0].name : (item.authors[0].name + ', ' + item.authors[1].name.slice(0,4) + '...');
    const authorName = item.author_name[0];
    console.log(authorName);
    //TODO: handle spaces at the end of ellipsis
    // const titleName = item?.title?.length > 10 ? item?.title.slice(0,16) + '..' : item?.title;
    const titleName = item.title;
    const marginLeft = index === 0 ? ms(30) : 0;

    return (
      <Pressable
        style={[styles.item.outerContainer, {marginLeft}]}
        onPress={() => {}}>
        <View
          style={{
            elevation: 24,
            shadowColor: 'black',
            borderRadius: ms(20),
            width: ms(160), // CHECK: maybe not needed
          }}>
          <Image
            style={styles.item.image}
            source={{uri: final_url}}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.item.titleText} numberOfLines={1}>
          {titleName}
        </Text>
        <Text style={styles.item.authorText}>{authorName}</Text>
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
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        //header for the initial margin
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
