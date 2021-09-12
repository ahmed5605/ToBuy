import React, {useState} from 'react';
import { Text, SafeAreaView, StatusBar, FlatList, View } from 'react-native';

const Header = (props) => {

    const { title } = props;

    return (
        <>
            <SafeAreaView style={{padding: 16}}>
                <Text style={{fontSize: 36, fontWeight: 'bold'}}>{title}</Text>
            </SafeAreaView>
        </>
    );
};

export default Header;