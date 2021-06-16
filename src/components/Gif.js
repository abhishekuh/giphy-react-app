import React from 'react';

const Gif = ({GifDetail}) => {

return (
    <div className="text-center">
    <div className="gif-item" key={GifDetail.data.id}>
        <h3 className="text-color">{GifDetail.data.title}</h3>
        <img className="gif-detail-img" src={GifDetail.data.images.original.url} />
    </div>
    </div>
)
}

export default Gif