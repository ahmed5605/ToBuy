import React, {useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddButton = (props) => {

    const { onPress } = props;

    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button} >
                <Icon name="plus" size={30} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddButton;