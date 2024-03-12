import { ScaledSheet } from "react-native-size-matters/extend";
import { StyleSheet } from "react-native";

const styles = ScaledSheet.create({
    parentScrollView: {
        flex: 1,
    },
    topBar: {
        self: {
            marginTop: '50@mvs',
            marginHorizontal: '30@ms',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: '1@ms',

        },
        left: {
            icon: {
                height: '15@mvs',
                width: '25@ms',
                borderWidth: '1@ms',


            }

        },
        right: {
            self: {
                flexDirection: 'row',
                alignItems: 'center',
            },
            inner: {
                left_darkMode_pressable: {
                    marginRight: '25@ms',
                    width: '25@ms',
                    height: '25@ms',
                    borderRadius: '12.5@ms',
                    borderWidth: '1@ms',

                },
                right_profile_pressable: {
                    width: '40@ms',
                    height: '40@ms',
                    borderRadius: '20@ms',
                    borderWidth: '1@ms',
                }
            }
        }
    },
    middleTextContainer: {
        self: {
            marginTop: '30@mvs',
            marginLeft: '30@ms',
            alignItems: 'flex-start',
        },
        topText: {
            fontSize: '16@ms',
            fontWeight: '500',
            color: '#9d9d9d',
            marginBottom: '5@mvs',
        },
        bottomText: {
            fontSize: '26@ms',
            fontWeight: '500',
            color: '#19191b',
        },
    },
    searchBarContainer: {
        self: {
            marginTop: '34@mvs',
            marginHorizontal: '30@ms',
            // borderWidth: '1@ms',
            // marginBottom: '40@mvs'
        }
    }




})

export default styles;