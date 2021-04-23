import React, {useCallback, useState} from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import defaultStyles from '../defaultStyles'

export default ({addTask}) => {
    const [text, setText] = useState('')
    const handleSubmit = useCallback(() => {
        addTask(text)
        setText('')
    }, [addTask, text])
    return (
        <View>
            <Text style={defaultStyles.h2}>Ajouter une tache</Text>
            <TextInput
                defaultValue={text}
                onChangeText={text => setText(text)}
                placeholder="Nom de la tache"
                style={defaultStyles.input}
            />
            <Button
                title="Ajouter"
                onPress={handleSubmit}
            />
        </View>
    )
}
