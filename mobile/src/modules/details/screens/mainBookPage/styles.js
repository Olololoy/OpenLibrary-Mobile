import {ScaledSheet} from 'react-native-size-matters/extend';
import {StyleSheet} from 'react-native';

const styles = ScaledSheet.create({
  header: {
    outer: {
      marginHorizontal: '35@ms',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '15@ms',
      marginTop: '50@mvs',
      // borderWidth: '1@ms',
    },
    left_backButton: {
      width: '30@ms',
      height: '30@ms',
      // borderWidth: '1@ms',
    },
    right_bookmark: {
      // position:'absolute', CHECK: isse work karega ya nahi
      height: '55@mvs',
      width: '30@mvs',

      // borderWidth: '1@ms',
      bottom: '7@mvs',
      // top:  CHECK: positioning values
    },
  },
  bookNcontent: {
    outerMost: {
      marginTop: '10@mvs',
      alignItems: 'center',
      paddingBottom: '40@mvs',
    },
    bookContainer: {
      marginBottom: '20@mvs',
      // borderWidth: '100@ms',
      // borderWidth: '1@ms'
      elevation: 24,
    },
    bookImageStyles: {
      height: '310@mvs',
      width: '210@ms',
      borderRadius: '20@ms',
    },
    titleText: {
      fontSize: '18@ms',
      fontWeight: '600',
      textAlign: 'center',
      width: '260@ms',
    },
    authorText: {
      fontSize: '16@ms',
      fontWeight: '400',
      marginBottom: '5@mvs',
      // borderBottomWidth: '1@ms'
    },
    reviewsWrapperContianer: {},
  },
  tabs: {
    outerContainer: {
      marginBottom: '10@mvs', //CHECK: check and adjust scrolling from both directions
      marginHorizontal: '35@ms',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '20@ms', //CHECK if fits well
      // alignItems: 'center' // isse fark nahi padna chahiye tbh
    },
    inner_Pressable: {},
    innerText: {
      fontSize: '16@ms',
      fontWeight: '600',
    },
  },
  scrollViewConainer: {
    flex: 1,
    paddingTop: '10@mvs',
    // borderWidth: '1@ms',
    // paddingTop: '10@mvs', // CHECK: if this works fine
    // paddingBottom:
    // marginBottom: //CHECK: if necessary and how will it work
  },
});

export default styles;
