import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Card, Body, Form, Item, Input, Label, CardItem, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class RegistrationTab extends Component {
  render() {
    return (
        <Container style={{flex: 1}}>
            <View style={styles.cardWrapper}>
                <Card >
                    <CardItem>
                        <Body>
                            <Form>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Nome</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Sobrenome</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Email</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Senha</Label>
                                    <Input secureTextEntry={true} />
                                </Item>
                                <Item floatingLabel style={{width: '95%'}}>
                                    <Label>Confirme a senha</Label>
                                    <Input secureTextEntry={true} />
                                </Item>
                            </Form>
                        </Body>
                    </CardItem>                 
                </Card>
            </View>
            <View style={styles.registrationWrapper}>
                <Button style={styles.btnRegistrar} rounded block>
                    <Text uppercase={false}>Registrar</Text>
                </Button>
                <Button style={styles.btnFacebook} rounded block iconLeft>
                    <Icon name='facebook' size={24} color='white' />
                    <Text uppercase={false}>Registar com Facebook</Text>
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
    registrationWrapper: {
        alignItems: 'center', 
        flex: 1,
        justifyContent: 'center'
    },
    btnRegistrar: {
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
