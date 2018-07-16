import React, {Component} from 'react';
import MapContainer from './MapContainer';
import {Container, Header, Left, Button, Title, Icon, Body, Right} from 'native-base';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.props.getCurrentLocation();
    }

    render() {
        return(
            <Container>
                <Header androidStatusBarColor="#1abc9c" style={{backgroundColor:'#1abc9c'}}>
                    <Left>
                        <Button
                        transparent
                        >
                        <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>

                {this.props.region.latitude &&
                <MapContainer region={this.props.region} />
                }
            </Container>
    );
    }
}