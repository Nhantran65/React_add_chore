

function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev State', prevState)
        console.log('Action', action)
        const nextState = reducer(prevState, action);


        console.log('nextState', nextState)

        return nextState;
    }
}
export default logger;