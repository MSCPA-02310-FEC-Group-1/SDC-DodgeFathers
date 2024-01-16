import { useState, useEffect } from 'react';
import { ZoomIcon } from './ZoomIcon';
// import imageUrls from '../assets/image_urls.js';

export default function ProductImages({ singleClubData, selectedImage, toggleModal }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //for checking if data is null : Optional chaining
    const imageLinks = singleClubData?.[0]?.image_urls || []

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (index) => {
        toggleModal(imageLinks, index);
    };

    return (
        <div className="w-3/5 flex-1">
            <div className="product-image relative cursor-zoom-in mb-2">
                <div
                    className={`image-container ${selectedImage === 0 ? 'border-2 border-black rounded-sm ' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <img src={imageLinks[0]} className="w-full h-full object-cover" />
                    <ZoomIcon />
                </div>
            </div>
            <div className={'grid grid-cols-2 gap-y-2 gap-x-4'}>
                {imageLinks.slice(1).map((url, index) => (
                    <div className="product-image relative cursor-zoom-in" key={index + 1}>
                        <div
                            className={`image-container ${selectedImage === index + 1 ? 'border-2 border-black rounded-sm' : ''}`}
                            onClick={() => handleClick(index + 1)}
                        >
                            <img src={url} alt={`Product Image ${index + 1}`} className="w-full h-full object-cover" />
                            <ZoomIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}