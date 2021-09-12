import React, {useState} from 'react';
import { SafeAreaView, StatusBar, LogBox} from 'react-native';
import Header from './src/components/Header';
import ToBuyList from './src/screens/ToBuyList';

LogBox.ignoreAllLogs(true);

const App = () => {

    return (
        <SafeAreaView>
            <Header title="To-Buy List" />
            <ToBuyList/>
        </SafeAreaView>
    );
};

export default App;