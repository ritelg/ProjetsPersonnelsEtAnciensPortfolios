import {StatusBar} from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native'


// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
const Tab = createDrawerNavigator();

// Styles
import defaultStyles from "./defaultStyles";
import Ionicons from "react-native-vector-icons/Ionicons"

// Components
import About from './components/About'
import TaskItem from './components/TaskItem'
import AddForm from './components/AddForm'
import {BoutonImage} from './components/Boutons'

import {getData, setData} from './functions/store'

const imageMenu = require('./assets/menu.png')

const DATA_KEY = 'TASKS'

function App({navigation}) {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState(0)

    const addTask = useCallback(title => {
        const id = (new Date()).getTime().toString()
        const checked = false
        setTasks(tasks => [...tasks, {title, id, checked}])
    }, [tasks])

    const deleteTask = useCallback(id => {
        setTasks(tasks => tasks.filter(t => t.id !== id))
    }, [tasks])

    const toggleChecked = useCallback(id => {
        setTasks(tasks => tasks.map(t => {
            if (t.id === id) {
                t.checked = !t.checked
            }
            return t
        }))
    }, [tasks])

    useEffect(() => {
        setCompletedTasks(() => {
            return tasks.filter(t => t.checked === true).length
        })
    }, [tasks])

    useEffect(() => {
        // componentWillMount
        getData(DATA_KEY).then(data => {
            setTasks(() => {
                if (data === null) { return [] }
                return data
            })
        })

        // componentWillUnmout
        return () => {
            setData(DATA_KEY, tasks)
        }
    }, [])

    const renderItem = ({item}) => (
        <TaskItem
            title={item.title}
            checked={item.checked}
            id={item.id}
            deleteTask={deleteTask}
            toggleChecked={toggleChecked}
        />
    );

    return (
        <View style={defaultStyles.container}>

            <View style={{ marginVertical: 30 }}>
                <View style={styles.header}>
                    <BoutonImage image={imageMenu} onPress={() => navigation.toggleDrawer()}/>
                    <Text style={defaultStyles.h1}>Listes des taches</Text>
                </View>
            </View>

            <AddForm addTask={addTask}/>
            <View style={styles.countTasks}>
                <View>
                    <Text style={styles.count}>{tasks.length}</Text>
                    <Text style={styles.countLabel}>Taches</Text>
                </View>

                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={styles.count}>{completedTasks}</Text>
                    <Text style={styles.countLabel}>Taches complétées</Text>
                </View>
            </View>
            {tasks.length > 0 && <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.listsTasks}

            />}

        </View>
    );
}

export default class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="App">
                    <Tab.Screen name="Taches" component={App}/>
                    <Tab.Screen name="À propos" component={About} style={styles.tab}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listsTasks: {
        marginVertical: 20,
        padding: 0,
    },
    tab: {
        fontSize: 15
    },
    countTasks: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
    },
    count: {
        fontSize: 20
    },
    countLabel: {
        opacity: .5
    }
})

