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
      borderWidth: '1@ms',
    },
    left_backButton: {
      width: '20@ms',
      height: '15@ms',
      borderWidth: '1@ms',
    },
    right_bookmark: {
      // position:'absolute', CHECK: isse work karega ya nahi
      height: '45@mvs',
      width: '35@mvs',
      borderWidth: '1@ms',
      // top: '22.5@mvs',
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
      elevation: 8,
      marginBottom: '20@mvs',
      // borderWidth: '1@ms'
    },
    bookImageStyles: {
      height: '340@mvs',
      width: '220@ms',
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
      fontWeight: '500',
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
    borderWidth: '1@ms',
    paddingTop: '10@mvs', // CHECK: if this works fine
    // paddingBottom:
    // marginBottom: //CHECK: if necessary and how will it work
  },
});

export default styles;
