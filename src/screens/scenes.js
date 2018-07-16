import React from 'react';
import {Actions, Scene, Stack} from 'react-native-router-flux';
import homeContainer from './Home/containers/homeContainer';
import loginContainer from './Login/containers/loginContainer';

const scenes = Actions.create(
    <Stack key='root'>
        <Scene key='login' component={loginContainer} title='login' initial={true}/>
        <Scene key='home' component={homeContainer} title='Home' />
    </Stack>
);

export default scenes;