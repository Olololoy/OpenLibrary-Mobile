import { View, Text, ScrollView, Pressable, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './styles'
import { ms, mvs } from "react-native-size-matters/extend"
import { SearchBarComponent } from '../../../../commonComponents'
import BookCarousel from '../../../../commonComponents/bookCarouselComponent/bookCarousel'


export default function HomeScreen() {






    function onPress() {
        return null
    }


    return (
        <ScrollView
        style={styles.parentScrollView}
        >
            <View style={styles.topBar.self}>
                <View style={styles.topBar.left.icon}>
                
                </View>
                <View style={styles.topBar.right.self}>
                    <View style={styles.topBar.right.inner.left_darkMode_pressable}>
                    
                    </View>
                    <View style={styles.topBar.right.inner.right_profile_pressable}>

                    </View>
                </View>
            </View>

            <View style={styles.middleTextContainer.self}>
                    <Text style={styles.middleTextContainer.topText}>Welcome back, Bunny!</Text>
                    <Text style={[styles.middleTextContainer.bottomText]}>What do you want to</Text>
                    <Text style={[styles.middleTextContainer.bottomText, {right: mvs(5) }]}> read today?</Text>
            </View>   

            <TouchableWithoutFeedback 
                onPress={onPress}
            >
                <View 
                style={styles.searchBarContainer.self}
                >
                <SearchBarComponent isDisabled={false}/>
                </View>
            </TouchableWithoutFeedback>

        
            <BookCarousel title='Trending'/>
            




        </ScrollView>




//scrollView
    // top bar 
        // left1  right2
    //constantText
    //pressable disabled Search
    //Trending
        // book category carousel
    //category1
        // book category carousel
     //category2
        // book category carousel
     //Recently Visited
        // book category carousel
    //constant text at bottom


)
}