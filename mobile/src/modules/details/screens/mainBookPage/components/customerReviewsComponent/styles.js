import {ScaledSheet} from 'react-native-size-matters/extend';
import {StyleSheet} from 'react-native';

const styles = ScaledSheet.create({
  textWrapperContainer: {
    marginHorizontal: '30@ms',
  },
  text: {
    fontSize: '13@ms',
    color: 'rgba(255,0, 0, 0.25)',
    textAlign: 'center',
    marginBottom: '10@mvs',
  },
});

export default styles;
