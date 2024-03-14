import {ScaledSheet} from 'react-native-size-matters/extend';
import {StyleSheet} from 'react-native';

const styles = ScaledSheet.create({
  header: {
    outer: {
      marginHorizontal: '30@ms',
      marginTop: '30@mvs', //CHECK: if fits well
      alignItems: 'flex-start',
      borderWidth: '1@ms',
      marginBottom: '20@mvs', //CHECK: if it look fine
    },
    backButton: {
      height: '20@mvs',
      width: '15@mvs',
      borderWidth: '1@ms',
    },
  },
  searchWrapperContainer: {
    self: {
      marginTop: '30@mvs',
      marginHorizontal: '30@ms',
      marginBottom: '2@mvs', //CHECK: if lines up well
    },
    loadingComponent: {
      //TODO: include loading component
    },
  },
  sortNfilter: {
    outerContainer: {
      height: '5@mvs',
      marginHorizontal: '30@ms',
      // borderWidth: '1@ms',
      alignItems: ' center', //TODO : remove this later
      marginBottom: '10@mvs', // CHECK: if it fits well
    },
  },
  flatlistContainer: {
    outerContainer: {
      marginHorizontal: '30@ms',
      marginBottom: '50@mvs',
    },
    contentContainer: {},
  },
  flatlistItems: {
    outerContainer: {
      marginBottom: '30@ms', //CHECK: if fits well
      flexDirection: 'row',
      alignItems: 'center',
      // height: '250@ms', //can remove this coz height is same as image height
    },
    imageWrapper: {
      elevation: 4,
      shadowColor: 'black',
      borderRadius: '20@ms',
      // width: '160@ms', // CHECK: maybe not needed
      marginRight: '15@ms', //CHECK: if fits well
      // borderWidth: '1@ms',
    },
    image: {
      //height and width to match the common aspect ratio
      //height and width auto bhi toh kar sakte hai !!!
      height: '250@mvs',
      width: '160@ms',
      height: '200@mvs',
      width: '120@ms',
      height: '220@mvs',
      width: '132@ms',

      // height: '150@mvs',
      // width: '90@ms',
      // height: '125@mvs',
      // width: '75@ms',
      borderRadius: '20@ms',
      // shadowColor: 'rgba(6, 7, 13, 0.05)',
      // elevation: 4
      //CHECK: shadow settings
    },
    headingsContainer: {
      self: {
        flex: 1,
        alignItems: 'flex-start',
        height: '100%',
        paddingTop: '30@mvs',
        // justifyItems: 'center',
        // borderWidth: '1@ms',
      },
      titleText: {
        width: '90%', //CHECK: if it works or explicit width deni padegi ya container me bound karna padega
        // width: '160@ms',
        // marginTop: '15@mvs',
        fontSize: '16@ms',
        fontWeight: '600',
        color: '#19191b',
      },
      authorText: {
        marginTop: '5@mvs', //CHECK: margin top values
        fontSize: '12@ms',
        fontWeight: '500',
        color: '#9d9d9d',
      },
      miniHeadingText: {
        self: {
          marginTop: '5@mvs', //CHECK: margin top values
          fontSize: '12@ms',
          fontWeight: '500',
          color: '#19191b',
        },
        nestedTextValue: {
          fontSize: '10@ms',
          fontWeight: '400',
          color: '#9d9d9d',
        },
      },
    },

    bookmarkNratings: {
      outerContainer: {},
      bookmark: {},
      ratingsWrapper: {},
    },
  },
});

export default styles;
