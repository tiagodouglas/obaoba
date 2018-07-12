import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Tab, Tabs, Card, Body, Form, Item, Input, Label, CardItem, Button, Text } from 'native-base';

export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
        <Container style={styles.content}>
            <Tabs>
                <Tab heading="Login">
                    <View style={styles.loginWrapper}>
                        <Card style={styles.login}>
                            <CardItem>
                                <Body>
                                    <Form>
                                        <Item style={{width:400}} floatingLabel>
                                            <Label>Email Address</Label>
                                            <Input />
                                        </Item>
                                        <Item floatingLabel last>
                                            <Label>Password</Label>
                                            <Input />
                                        </Item>
                                    </Form>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                        <Button primary full style={styles.btn}>
                            <Text>Login</Text>
                        </Button>
                        <Button primary full style={styles.btn}>
                            <Text>Login with Facebook</Text>
                        </Button>
                    </View>
                </Tab>
                <Tab heading="Register">
                    <View>
                    </View>
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
    },
    loginWrapper: {
        height: 600,
        padding: 20
    },
    login: {
    },
    label: {

    },
    btn: { 
        marginHorizontal: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 10
    }
});
