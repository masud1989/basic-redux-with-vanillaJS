// Select DOM Element
const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// 1. Initial State 
const initialState = {
    value: 0
} 

// 2. Create Reducer Function 
function counterReducer(state = initialState, action){
    if(action.type === 'increment'){
        return {
            ...state,
            value: state.value + 1,
        }
      }
      else if(action.type === 'decrement'){
        return {
            ...state,
            value: state.value - 1,
        }
      }
      else{
        return state
      }
}
  
// 3. Create Store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState()
    counterEl.innerText = state.value.toString()
}

render() // Update UI
store.subscribe(render);


// 4. Button Click Listener
incrementEl.addEventListener("click", ()=> {
    store.dispatch({
        type: 'increment',
    })
})

decrementEl.addEventListener("click", ()=> {
    store.dispatch({
        type: 'decrement',
    })
})
  
