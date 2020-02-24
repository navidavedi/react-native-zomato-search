import { useEffect, useState } from 'react'

import zomato from '../api/zomato'


export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const searchApi = async(term) => {
        try {
            const response = await zomato.get(`/search?`, {
                params: {
                    count: '20', 
                    entity_id :'12',
                    entity_type: 'city',
                    q: term
                }
            })
            setResults(response.data.restaurants)
        }
        catch(err) {
            setErrorMsg('Something went wrong')
        }
        
    }

    useEffect(() => {
        searchApi('chocolate')
    },[])

    return [searchApi, errorMsg, results]
}
