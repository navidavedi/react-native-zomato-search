import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

import zomato from '../api/zomato'

const ResultsShowScreen = ({ navigation }) => {
    const [ result, setResult ] = useState(null)
    const id = navigation.getParam('id')

    const getResults = async (id) => {
        try {
            const response = await zomato.get(`/restaurant?`, {
                params:{
                    res_id: id
                }
            })
            setResult(response.data)
        }
        catch (err){
            console.log('RESTORANT ERROR => ', err)
            setErrMsg('Some Thing went wrong')
        }
    }

    useEffect(() => {
        getResults(id)
    },[])

    if(!result) return null;

    return (
        <View>
            <Text>{result.photo_count}</Text>
            <FlatList
                keyExtractor={( item ) => item.photo.id}
                data={result.photos}
                renderItem={( {item} ) => (
                    <Image 
                        style={styles.photo}
                        source={{ uri : item.photo.thumb_url }}
                    />
                    
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: 200,
        width: 200
    }
})

export default ResultsShowScreen;