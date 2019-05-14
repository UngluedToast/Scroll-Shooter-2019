import React from 'react';

const Canvas = () => {
    const viewBox = [window.innerWidt / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg 
        id="aliens-go-home-canvas"
        preserveAspectRatio="xMaxYmax none"
        viewBox={viewBox}
        >
            <circle cx={0} cy={0} r={50} />
        </svg>
    )
};

export default Canvas