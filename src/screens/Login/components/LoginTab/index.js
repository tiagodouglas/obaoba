import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { View, StyleSheet} from 'react-native';
import { Container, Card, Body, Form, Item, Input, Label, CardItem, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginTab extends Component {
  render() {
    return (
        <Container style={{flex:1}}>
            <View style={styles.cardWrapper}>
                <Card >
                    <CardItem>
                        <Body>
                            <Form>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Email</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Senha</Label>
                                    <Input secureTextEntry={true} />
                                </Item>
                            </Form>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body style={{alignItems: 'flex-end'}}>
                            <View>
                                <Button transparent danger>
                                    <Text uppercase={false}>Esqueceu a senha?</Text>
                                </Button>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </View>
            <View style={styles.loginWrapper}>
                <Button style={styles.btnEntrar} rounded block onPress={() => Actions.home()}>
                    <Text uppercase={false}>Entrar</Text>
                </Button>
                <Button style={styles.btnFacebook} 
                    rounded block iconLeft                    
                    >
                    <Icon name='facebook' size={24} color='white' /> 
                    <Text uppercase={false}>Entrar com Facebook</Text>
                </Button>
            </View>
        </Container>        
    );
  }
}

const styles = StyleSheet.create({
    cardWrapper: {
        padding: 20,
        flex: 1
    },
    loginWrapper: {
        alignItems: 'center', 
        flex: 1,
        justifyContent: 'center'
    },
    btnEntrar: {
        padding: 10,
        margin: 10,
        backgroundColor: '#1abc9c'
    },
    btnFacebook: {
        padding: 10,
        margin: 10,
        backgroundColor: '#2980b9'
    }
});
