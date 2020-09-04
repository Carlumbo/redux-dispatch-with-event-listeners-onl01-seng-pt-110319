let state ; 

function reducer(state = {count: 0}, action ) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1 };
        case 'DECREASE_COUNT': 
            return {count: state.count -1};
        case 'INCREASE_BY_TEN':
            return {count: state.count + 10 }
        case 'DECREASE_BY_TEN':
            return {count: state.count - 10 }
        case 'RESET_TO_ZERO':
            return {count: state.count = 0 }
            
            
        
    default: 
        return state;
    }
}


function dispatch(action) {
    state = reducer(state, action);
    render()
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

let button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_COUNT'})
})
let button2 = document.getElementById('button2');

button2.addEventListener('click', () => {
    dispatch({ type: 'DECREASE_COUNT'})
})

let button3 = document.getElementById('button3');

button3.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_BY_TEN'})
})

let button4 = document.getElementById('button4');

button4.addEventListener('click', () => {
    dispatch({ type: 'DECREASE_BY_TEN'})
})

let button5 = document.getElementById('button5');

button5.addEventListener('click', () => {
    dispatch({ type: 'RESET_TO_ZERO'})
})

dispatch({ type: '@@init' })
/*
let state; 

function changeState(state = { count:0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};

        default: 
            return state;
    } 
}


function dispatch(action) {
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count

}

dispatch({ type: '@@INIT' })
*/