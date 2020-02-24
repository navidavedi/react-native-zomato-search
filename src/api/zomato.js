import axios from 'axios'

export default axios.create({
    baseURL: `https://developers.zomato.com/api/v2.1`,
    headers: {
        'Accept': 'application/json',
        'user-key': 'paste the key here'
    }
})


// /search?entity_id=12&entity_type=city&q=amrit&count=10