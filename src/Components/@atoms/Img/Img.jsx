import React from 'react';

function Img({ src, alt, width, height, cover, contain }) {
    return (
        <div className="classname">
            <img className={(cover || contain) ? `img-${cover ? cover : contain}` : null} src={src} alt={alt || 'фото'} width={width || null} height={height || null} />
        </div>
    );
}

export default Img;