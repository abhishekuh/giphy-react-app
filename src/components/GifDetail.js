import React, {useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';

import Gif from '../components/Gif';

const GifDetail = () => {
    const { id } = useParams()
    const history = useHistory()
    const api_key = 'ergeCeWw1Vt79tKTxHKreQjO3FAclx2Y'

    const [gif,setGif] = useState([])
    
    useEffect(() => {
        setTimeout(() => { 
        
        fetchData()
    },1000)
    },[]);

    const fetchData = async () => { 
        const response = await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`)
        const data = await response.json()
        setGif(data)
        // .then(Response => Response.json()
        // )
        // .then((data) => {
        //     console.log(data.data);
        //     setGif(data.data[0])
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        }

    return (
        <div>
        <h2 className="text-color">gif detail page</h2>
        {gif && <Gif GifDetail={gif} /> }
        </div>
    )
}

export default GifDetail
