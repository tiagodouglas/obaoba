import React from 'react';
import {View, Text, InputGroup, Input, Icon} from 'native-base';
import styles from './SearchBoxStyles';
export const SearchBox = () => {
    return(
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Pick up</Text>
                <InputGroup>
                    <Icon name='search' size={15} color='black'/>
                    <Input style={styles.inputSearch} placeholder='Escolher o lugar' />
                </InputGroup>
            </View>

            <View style={styles.secondInputWrapper}>
                <Text style={styles.label}>Pick up</Text>
                <InputGroup>
                    <Icon name='search' size={15} color='black'/>
                    <Input style={styles.inputSearch} placeholder='Escolher o lugar' />
                </InputGroup>
            </View>
        </View>
    );
}

export default SearchBox;