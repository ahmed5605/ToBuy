import React, {useState} from 'react';
import { Text, SafeAreaView, StatusBar, FlatList, View, TextInput } from 'react-native';

const Separator = (props) => {

    const {  } = props;

    return (
        <>
            <SafeAreaView>
                <View style={{height: 50, width: 2, backgroundColor: 'gray', }} />
            </SafeAreaView>
        </>
    );
};

export default Separator;