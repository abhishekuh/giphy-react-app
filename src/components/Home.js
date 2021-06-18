import React,{ useState, useEffect } from 'react';
import GifList from "../components/GifList";

const Home = () => {

    const api_key = 'ergeCeWw1Vt79tKTxHKreQjO3FAclx2Y'

    const [query,setQuery] = useState('cats')

    const [gifs,setGifs] = useState([])

    // the below function queries the cats or dogs based on the value of the state 'query' which is modified using button
    // and then the data returned is set in the 'gifs' array.

    useEffect(() => {
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
