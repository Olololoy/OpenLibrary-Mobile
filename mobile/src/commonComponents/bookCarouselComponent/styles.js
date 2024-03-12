import { ScaledSheet } from "react-native-size-matters/extend";
import { StyleSheet } from "react-native";

const styles = ScaledSheet.create({

    outerContainer: {
        width: '100%',
        alignItems: 'flex-start',
    },

    titleText: {
        fontSize: '24@ms',
        fontWeight: '600',
        color: '#19191b',
        marginBottom: '20@mvs'
    },
    flatlistOuterContainer: {
        width: '100%',
        // height: '250@mvs', // CHECK: if this is necessary, the children are giving height to it // btw I feel ki hona chahiye 
    },
    flatlistContentContainer: {
        // alignItems:'stretch' CHECK: if this works by default 
    },

    item: {
        outerContainer: {
            marginRight: '35@ms',
            alignItems: 'flex-start',
        },
        image: {
                    //height and width to match the common aspect ratio
                    //height and width auto bhi toh kar sakte hai !!!
            height: '250@mvs',
            width: '160@ms',
            borderRadius: '20@ms',
            shadowColor: 'rgba(6, 7, 13, 0.05)',
            // elevation: 4
            //CHECK: shadow settings

        },
        titleText: {
            marginTop: '15@mvs',
            fontSize: '16@ms',
            fontWeight: '600',
            color: '#19191b',
        },
        authorText: {
            marginTop: '5@mvs', //CHECK: margin top values
            fontSize: '12@ms',
            fontWeight: '500',
            color: '#9d9d9d',
        }

    }




})

export default styles;