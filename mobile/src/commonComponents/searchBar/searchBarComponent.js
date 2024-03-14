import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';
import {SearchIcon} from '../../assets/svgs/index.js';
import {ms, mvs} from 'react-native-size-matters/extend';

export default function SearchBarComponent(props) {
  const {isDisabled, callback = null} = props;
  const [text, settext] = useState('');

  let timer = React.useRef();

  const textChangeCallback = React.useCallback(
    value => {
      settext(value);
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        // console.log('debounced');
        callback(value);
      }, 1500);
      // console.log('hello');
    },
    [callback],
  );

  function onPressSearchBy() {}

  return (
    // TODO: touchable witout feedback wrap on icon and the text input to focus the input
    // Removing search icon while typing / searching ( / remove icon on touch )

    <View style={styles.outerContainer.self}>
      <View style={styles.outerContainer.left.self}>
        <View style={styles.outerContainer.left.icon}>
          <SearchIcon height={mvs(25)} width={ms(25)} />
        </View>
        <TextInput
          style={styles.outerContainer.left.input}
          placeholder="Search"
          placeholderTextColor="#aaa"
          onPress={null}
          editable={!isDisabled}
          value={text}
          onChangeText={textChangeCallback}
        />
      </View>
      <View style={styles.outerContainer.right.self}>
        <View style={styles.outerContainer.right.divider}></View>
        <Pressable
          style={styles.outerContainer.right.textOuterContainer.self}
          onPress={!isDisabled ? onPressSearchBy : () => {}}>
          {/* TODO: icon for dropdown
                <View style={styles.topBar.right.inner.right_profile_pressable}>

                </View> */}
          <Text style={styles.outerContainer.right.textOuterContainer.text}>
            {isDisabled ? 'Authors' : 'Title'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
