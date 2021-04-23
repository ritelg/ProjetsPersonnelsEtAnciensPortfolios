import React from 'react'
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import defaultStyles from '../defaultStyles'
import {BoutonImage} from './Boutons'

const imageMenu = require('../assets/menu.png')

export default ({navigation}) => (
    <ScrollView style={styles.container}>
        <View style={{ marginVertical: 30 }}>
            <View style={styles.header}>
                <BoutonImage image={imageMenu} onPress={() => navigation.toggleDrawer()} />
                <Text style={defaultStyles.h1}>À propos</Text>
            </View>
        </View>

            <Text style={{marginBottom: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores ducimus eaque, explicabo facere facilis ipsa labore maxime natus, neque omnis quae quisquam ratione sapiente sequi? Aliquam aliquid cum voluptate!
            </Text>
            <Text style={{marginVertical: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores ducimus eaque, explicabo facere facilis ipsa labore maxime natus, neque omnis quae quisquam ratione sapiente sequi? Aliquam aliquid cum voluptate!
            </Text>
            <Text style={{marginVertical: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores ducimus eaque, explicabo facere facilis ipsa labore maxime natus, neque omnis quae quisquam ratione sapiente sequi? Aliquam aliquid cum voluptate!
            </Text>

    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
