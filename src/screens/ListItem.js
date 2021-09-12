import React, {useState} from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, FlatList } from 'react-native';

const ListItem = (props) => {

    const { data } = props;

    const renderItem = ({ item }) => (
        <View style={styles.card} >
            <View style={styles.cardContainer} >
                <Text style={styles.text} >{item.title}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.flatListContainer} >
            <FlatList
                data={data}
                keyExtractor={(item) => item}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    },
    card: {
        height: 70,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 10,
    },
    cardContainer: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    flatListContainer: {
        marginBottom: 100
    },
});

export default ListItem;