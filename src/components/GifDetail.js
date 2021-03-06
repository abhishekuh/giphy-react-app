import React, {useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';

import Gif from '../components/Gif';

const GifDetail = () => {
    const { id } = useParams()
    const history = useHistory()
    const api_key = 'ergeCeWw1Vt79tKTxHKreQjO3FAclx2Y'

    const [gif,setGif] = useState([])

    const[loading,setLoading] = useState(true)
    
    useEffect(() => {
        fetchData()
    },[]);

    // The below function returns the data for a particular gif by taking the id obtained from the url by using the useParams function. 

    const fetchData = async () => { 
        const response = await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`)
        const data = await response.json()
        setGif(data)
        setLoading(false)
        }

    return (
        <div className="page-heading">
        {loading? <p>Loading .... </p> : <Gif GifDetail={gif} />}
        </div>
    )
}

export default GifDetail
