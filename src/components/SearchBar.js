import React, {useState} from 'react';
import { Text, SafeAreaView, View, StyleSheet, TextInput, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const SearchBar = (props) => {

    const { value, onChangeText } = props;

    return (
        <SafeAreaView>
            <View style={styles.searchContainer} >
                <TextInput
                    placeholder="Search"
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.text}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    searchContainer: {
        height: 50,
        width: WIDTH-100,
        borderWidth: 2,
        justifyContent: 'center',
    },
});

export default SearchBar;