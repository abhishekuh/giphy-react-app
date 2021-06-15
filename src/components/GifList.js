import React from 'react';
import { Link } from "react-router-dom";

const GifList = ({gifData}) => {
    return (
        <div>
        <h2 className="text-color">Gif List</h2>
        <div className="gif-list-container">
            {gifData.map(g => 
            <Link to={`/gif/${g.id}`}>
                <div className="gif-item" key={g.id}>
                    {/* <p>{g.title}</p> */}
                    <img className="gif-img" src={g.images.original.url} />
                </div>
            </Link>
            )}
        </div>
        </div>
    )
}

export default GifList;