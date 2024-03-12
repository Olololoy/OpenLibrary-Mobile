import { ScaledSheet } from "react-native-size-matters/extend";
import { StyleSheet } from "react-native";

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
                marginRight: '5@ms',
            },
            input: {
                // flex: 1,
                // height: '70@mvs',
                fontSize: '16@ms',
                alignItems: 'center',
                // borderRadius: '1@ms',
                // borderWidth: '1@ms'
            },
            disabledText: {
                fontSize: '16@ms'
            }

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
                    flexDirection: 'row'
                },
                //down arrow icon for search by
                icon:{
                
                },
                text: {
                    fontSize: '12@ms',
                    fontWeight: '400',
                    color: '#999',
                }
            },
        }
    }
})



export default styles;