import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

 const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyles} name="search" />
            <TextInput
                placeholder="Search" 
                style={styles.inputStyles}
                value={term}
                onChangeText={newterm => onTermChange(newterm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: 'wheat',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyles: {
        fontSize: 18,
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6
    },
    iconStyles:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar