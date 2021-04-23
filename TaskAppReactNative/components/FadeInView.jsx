import React from 'react'
import {Animated} from 'react-native'

export const STATE_DELETE = 'DELETE'

export default class FadeInView extends React.Component
{
    constructor(props) {
        super(props)
        let fadeAnim = new Animated.Value(0)
        this.state = {fadeAnim}
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }
    onUnmout() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start(() => this.props.onUnmout());
    }

    render() {
        if (this.props.state === STATE_DELETE) {
            this.onUnmout()
        }
        return (
            <Animated.View                 // Special animatable View
                style={{
                    opacity: this.state.fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}
