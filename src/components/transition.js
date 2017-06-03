/* let MyTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: ([0.8, 1, 1])
    })
    const scale = position.interpolate({
        inputRange,
        outputRange: ([0.8, 1, 1])
    })
    return {
        opacity,
        transform: [
            {scale}
        ]
    }
}

let TransitionConfiguration = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const { position, scene } = sceneProps;
            const { index } = scene;
            return MyTransition(index, position)
        }
    }
}

export default TransitionConfiguration;
*/
