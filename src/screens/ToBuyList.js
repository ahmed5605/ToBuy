import React, {useState} from 'react';
import { Text, SafeAreaView, Dimensions, StyleSheet, View } from 'react-native';
import { data } from '../data/data';
import AddButton from '../components/AddButton';
import SearchBar from '../components/SearchBar';
import Separator from '../components/Separator';
import ListItem from './ListItem';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ToBuyList = () => {

    const [searchValue, setSearchValue] = useState('');
    const [itemIndex, setItemIndex] = useState(0);
    const [listItems, setListItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);

    const onAddItem = () => {
        if (itemIndex < data.length){
            setListItems(previousItems => [...previousItems, data[itemIndex]]);
            setOriginalItems(previousItems => [...previousItems, data[itemIndex]]);
            setItemIndex(itemIndex + 1)
       }
    }

    const onChangeText = (text) => {
        setSearchValue(text);
        if(text !== ''){
           
            const newData = originalItems.filter(
                function (item) {
                  const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                  const textData = text.toUpperCase();
                  return itemData.indexOf(textData) > -1;
            });
            setListItems(newData);
        }else{
            setListItems(originalItems);
        }
    }


    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.searchContainer} >
                <View style={styles.searchContent} >
                    <SearchBar value={searchValue} onChangeText={(text) =>  onChangeText(text)} />
                    <Separator/>
                    <AddButton onPress={onAddItem} />
                </View>
            </View>
            <View style={styles.listItemsContainer} >
                <ListItem data={listItems} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        width: WIDTH-20,
        borderBottomWidth: 2,
    },
    searchContent: {
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    listItemsContainer: {
        width: WIDTH-20,
        height: HEIGHT-50,
    },
});

export default ToBuyList;