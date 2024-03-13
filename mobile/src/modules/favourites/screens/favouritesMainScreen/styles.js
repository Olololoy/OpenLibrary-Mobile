import {ScaledSheet} from 'react-native-size-matters/extend';
import {StyleSheet} from 'react-native';

const styles = ScaledSheet.create({
  headerText: {
    fontSize: '20@ms',
    fontWeight: '600',
    color: '#19191b',
    marginTop: '50@mvs', //CHECK: if fits well
    marginLeft: '30@mvs',
  },
  emptyText: {
    fontSize: '16@ms',
    fontWeight: '400',
    color: '#9d9d9d',
  },
  loadingText: {},
  flatlistContainer: {
    outerContainer: {
      marginHorizontal: '30@ms',
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
      elevation: 6,
      shadowColor: 'black',
      borderRadius: '20@ms',
      // width: '160@ms', // CHECK: maybe not needed
      marginRight: '10@ms', //CHECK: if fits well
      borderWidth: '1@ms',
    },
    image: {
      //height and width to match the common aspect ratio
      //height and width auto bhi toh kar sakte hai !!!
      height: '250@mvs',
      width: '160@ms',
      height: '200@mvs',
      width: '120@ms',
      height: '150@mvs',
      width: '90@ms',
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
        // borderWidth: '1@ms',
      },
      titleText: {
        width: '100%', //CHECK: if it works or explicit width deni padegi ya container me bound karna padega
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
