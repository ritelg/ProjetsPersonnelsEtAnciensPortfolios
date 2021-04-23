import React, {useCallback, useEffect, useRef, useState} from 'react'
import {View, StyleSheet, TextInput, Image, TouchableOpacity, ToastAndroid, Animated} from 'react-native'
import FadeInView from "./FadeInView";

const imageChecked = require('../assets/checked.png')
const imageDelete = require('../assets/delete.png')

const DEFAULT_STATE = 'DEFAULT'
export const STATE_DELETE = 'DELETE'

export default ({id, title, checked, toggleChecked, deleteTask}) => {

    const [stateValue, setStateValue] = useState(DEFAULT_STATE)

    const Toast = ({ visible, message }) => {
        if (visible) {
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
            return null;
        }
        return null;
    };

    const onDelete = useCallback(() => {
        deleteTask(id)
    }, [deleteTask, id])
    let styleUnCheck = !checked ? styles.unchecked : {}
    const opacityV = checked ? .5 : 1
    return (
            <FadeInView onUnmout={onDelete} state={stateValue}>
            <View style={{...styles.align, justifyContent: 'space-between', opacityV}}>
                <View style={styles.align}>
                    <TouchableOpacity onPress={() => toggleChecked(id)} style={styleUnCheck}>
                        {checked && <Image
                            source={imageChecked}
                            style={styles.checked}
                        />}

                        <Toast visible={true} message="Example" />
                    </TouchableOpacity>
                    <TextInput defaultValue={title}/>
                </View>
                <TouchableOpacity onPress={() => setStateValue(STATE_DELETE)}>
                    <Image
                        source={imageDelete}
                        style={styles.delete}
                    />
                </TouchableOpacity>
            </View>
            </FadeInView>
    )
}

const styles = StyleSheet.create({
    align: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    },
    image: {},
    checked: {
        height: 20,
        width: 20,
        marginRight: 20,
    },
    unchecked: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        height: 20,
        width: 20,
        marginRight: 20,


    },
    delete: {
        height: 20,
        width: 20,
    }
});


