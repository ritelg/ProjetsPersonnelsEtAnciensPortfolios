import React from 'react'
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native'

export const BoutonImage =  ({onPress, image}) => (
    <View style={{height: 40}}>
        <TouchableOpacity
            onPress={onPress}
            style={boutonImage.btn}
        >
            <Image source={image} style={boutonImage.image} />
        </TouchableOpacity>
    </View>

)

const boutonImage = StyleSheet.create({
    btn: {
        height: 40,
        width: 40,
        flex: 1,
    },
   image: {
       height: 20,
       width: 20,
   },
})
