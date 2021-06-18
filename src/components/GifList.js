import React, { isValidElement } from 'react';
import { Link } from "react-router-dom";

// rendering the data ie. image and link  obtained from property gifData 

const GifList = ({ gifData }) => {
    return (
        <div>
            <div className="gif-list-container">
                {gifData.map(g =>
                    <div className="gif-item" key={g.id}>
                        <Link to={`/gif/${g.id}`}>
                            <img className="gif-img" src={g.images.original.url} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GifList;