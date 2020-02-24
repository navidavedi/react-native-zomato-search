import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetails = ({ name, image, rating, totalReviews }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: image }} 
                style={styles.image}
            />
            <Text style={styles.name}>{name}</Text>
            <Text>
                {rating.aggregate_rating} Stars, {totalReviews} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
        
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default ResultsDetails