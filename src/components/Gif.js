import React from 'react';

const Gif = ({GifDetail}) => {

return (
    <div>
    <div className="gif-item" key={GifDetail.id}>
        <p className="text-color">{GifDetail.title}</p>
        <img className="gif-img" src={GifDetail.images.original.url} />
    </div>
    </div>
)
}

export default Gif