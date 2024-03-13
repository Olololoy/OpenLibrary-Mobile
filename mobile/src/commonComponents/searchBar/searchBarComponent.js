import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';

export default function SearchBarComponent(props) {
  const {isDisabled} = props;

  function onPressSearchBy() {}

  return (
    // TODO: touchable witout feedback wrap on icon and the text input to focus the input
    // Removing search icon while typing / searching ( / remove icon on touch )

    <View style={styles.outerContainer.self}>
      <View style={styles.outerContainer.left.self}>
        <View style={styles.outerContainer.left.icon}></View>
        {!isDisabled ? (
          <TextInput
            // disabled={true}
            style={styles.outerContainer.left.input}
            placeholder="Search"
            placeholderTextColor="#c4c4c4"
            onPress={null}
          />
        ) : (
          <View style={styles.outerContainer.left.input}>
            <Text style={styles.outerContainer.left.disabledText}>
              Searchdsafas
            </Text>
          </View>
        )}
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
            Authors
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
