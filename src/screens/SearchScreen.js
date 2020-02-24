import React, { useState } from 'react'
import { Text, ScrollView } from 'react-native'

import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, errorMsg, results] = useResults()

    const filterResultsByPriceRange = (min, max) => (
        results.filter(result => (
            result.restaurant.average_cost_for_two > min &&
                result.restaurant.average_cost_for_two < max
            )
        )
    )
    
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm)=> setTerm(newTerm)} 
                onTermSubmit={() => searchApi(term)}
            />
            { errorMsg.length > 0 
                ? <Text>{errorMsg}</Text>
                : null
            }
            <ScrollView>
                <ResultList 
                    title="Cost Effective"
                    result={filterResultsByPriceRange( 0, 501 )}
                />
                <ResultList
                    title="Bit Pricier" 
                    result={filterResultsByPriceRange( 501, 1001 )}
                />
                <ResultList 
                    title="Big Spender" 
                    result={filterResultsByPriceRange( 1001, 2001 )}
                />
                <ResultList 
                    title="Too rich for my blood"
                    result={filterResultsByPriceRange( 2002, 99999)}
                />
            </ScrollView>
        </>
    )
}

export default SearchScreen