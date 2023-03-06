const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers;
const reduxlogger=require("redux-logger");
const applyMiddleware=redux.applyMiddleware;
//logger
const logger=reduxlogger.createLogger();
//types
const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

//action =>object=>type
//action =>object=>payload
function buyCake(){
    return{
        
            type:BUY_CAKE,
            info:'First redux Action',
        
    };
}
function buyIcecream(){
    return{
        
            type:BUY_ICECREAM,
            info:'First redux Action',
        
    };
}
//reucers=>function
// const initialState={
//     numOfCakes:10,
//     numOfIcecream:15
   
// }

const initialCakeState = {
    numOfCakes: 10
  }
  
  const initialIceCreamState = {
    numOfIceCreams: 20
  }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      default: return state
    }
  }

  const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
      default: return state
    }
  }
  
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//         ...state,
//         numOfIcecream: state.numOfIcecream - 1
//     }
    
//     default: return state
//   }
// }
const store=createStore(rootReducer,applyMiddleware(logger));
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => { 
    //console.log('Updated State',store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unsubscribe();

//looger =>action
//=>prevSTate
//=>nextState
//loggerMiddleWare
//Middlwware=>feature addin redux
//sync action
//action was passed
//async action
//with APi اخزنها فال Storeالبيانات اللي راجعة اخزانها البينات اللي راجعة من Api
//-fetch Data from endPoint and use Data in application
/*state={
loading:true,
error:'',
data:[]
}*/
