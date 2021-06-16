import React,{ useState, useEffect } from 'react';
import GifList from "../components/GifList";

const Home = () => {

    const api_key = 'ergeCeWw1Vt79tKTxHKreQjO3FAclx2Y'
    // const queryParam = 'cats'

    const [query,setQuery] = useState('cats')

    const [gifs,setGifs] = useState([])

    useEffect(() => {
        // setTimeout(() => { 
        const fetchData = async () => { 
        await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=25`,{method: "GET"})
        .then(Response => Response.json()
        )
        .then((data) => {
            setGifs(data.data)
        })
        .catch(err => {
            console.log(err);
        });
        }
        fetchData();
    // },1000)
    },[query]);

    return (
        <div>
            <h2 className="text-color page-heading">Gif List</h2>
            <button onClick={() => setQuery('Cats')}>Cats</button>
            <button onClick={() => setQuery('Dogs')}>Dogs</button>
            {gifs && <GifList gifData={gifs} />}
        </div>
    );
}

export default Home
