import {ScaledSheet} from 'react-native-size-matters/extend';
import {StyleSheet} from 'react-native';

const styles = ScaledSheet.create({
  outerContainer: {
    self: {
      flexDirection: 'row',
      paddingLeft: '20@ms',
      paddingRight: '20@ms',
      height: '60mvs',
      backgroundColor: 'rgba(196, 196, 196, 0.15)',
      borderRadius: '12@ms',
    },
    left: {
      self: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
      },
      icon: {
        width: '15@ms',
        height: '15@ms',
        marginRight: '12@ms',
        top: '12@mvs',
      },
      input: {
        flex: 1,
        height: '55@mvs',
        fontSize: '16@ms',
        flexDirection: 'row',
        alignItems: 'center',
        // borderRadius: '1@ms',
        // borderWidth: '1@ms',
      },
      disabledText: {
        fontSize: '16@ms',
        color: '#aaa',
      },
    },
    right: {
      self: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      divider: {
        height: '70%',
        width: '1.5@ms',
        //TODO: color for divider
        backgroundColor: 'rgba(196, 196, 196, 0.5)',
        borderRadius: '1@ms',
      },
      textOuterContainer: {
        self: {
          marginLeft: '15@ms',
          flexDirection: 'row',
        },
        //down arrow icon for search by
        icon: {},
        text: {
          fontSize: '13@ms',
          fontWeight: '400',
          color: '#aaa',
        },
      },
    },
  },
});

export default styles;
