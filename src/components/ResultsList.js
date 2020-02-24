import React from 'react'
import { withNavigation } from 'react-navigation'

import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity 
} from 'react-native'

import ResultDetails from './ResultsDetails'

const ResultsList = ({ title, result, navigation }) => {

    if(!result.length) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                {title}
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={result}
                keyExtractor={ item => item.restaurant.id} 
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => (
                        navigation.navigate(
                            'ResultsShow', 
                            { id: item.restaurant.id }
                        ))}>
                        <ResultDetails 
                            name={item.restaurant.name} 
                            image={item.restaurant.thumb}
                            rating={item.restaurant.user_rating}
                            totalReviews={item.restaurant.all_reviews_count}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList)