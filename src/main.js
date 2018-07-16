import React, {Component} from 'react';
// import Login from './screens/Login/Login';
import {StackNavigator} from 'react-navigation';
import createStore from './store/createStore';
import AppContainer from './AppContainer';


export default class Root extends Component {

    renderApp() {
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);

        return (
            // <AppStackNavigator/>
            <AppContainer store={store}/>
        );
    }    

    render() {
        return this.renderApp();
    }
}

// const AppStackNavigator = StackNavigator({
//   LoginScreen: {screen: Login}
// });
