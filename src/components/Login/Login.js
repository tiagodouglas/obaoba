import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Icon, Tab, Tabs, Header, Content } from 'native-base';
import LoginTab from './LoginTab';
import RegistrationTab from './RegistrationTab';
export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
        <Container style={styles.content}>
        <Header androidStatusBarColor="#1abc9c" style={{display:'none'}}/> 
            <Tabs>
                <Tab heading="Entrar"
                    tabStyle={{backgroundColor: '#1abc9c'}} 
                    textStyle={{color: '#fff'}} 
                    activeTabStyle={{backgroundColor: '#1abc9c'}} 
                    activeTextStyle={{color: '#fff', 
                    fontWeight: 'normal'}}> 
                        <Content scrollEnabled={false}>
                            <LoginTab/>
                        </Content>
                </Tab>
                <Tab heading="Registrar" 
                    tabStyle={{backgroundColor: '#1abc9c'}} 
                    textStyle={{color: '#fff'}} 
                    activeTabStyle={{backgroundColor: '#1abc9c'}} 
                    activeTextStyle={{color: '#fff', 
                    fontWeight: 'normal'}}>
                    <Content scrollEnabled={false}>
                        <RegistrationTab/>
                    </Content>
                </Tab>
            </Tabs>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
