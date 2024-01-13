import ProductImages from './ProductImages'
import ProductModal from './ProductModal'
import ProductDetails from './ProductDetails'
import { useState } from 'react'

 const Product = ({ singleClubData }) => {

    //something causes the page to crash below if singleClubData doesn't exist. no time to troubleshoot, but this solves it for now.
    if (!singleClubData) {
        return <div>Loading...</div>;
    }
    
    const [productModal, setProductModal] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
   
    const toggleModal = (images, selection) => {
        if (productModal.length === 0) {
            setSelectedImage(selection);
            setProductModal(images);
        } else {
            setProductModal([]);
        }
    }


    return (
        <> 
            <div className={'product-container flex justify-center mt-10'}>
                <div className="flex flex-col w-2/3 justify-center m-0 overflow-hidden ">
                    <div className="flex flex-wrap justify-center m-0  overflow-hidden">
                        <ProductImages singleClubData={singleClubData} selectedImage={selectedImage} toggleModal={toggleModal} />
                        <ProductDetails singleClubData={singleClubData}/>
                    </div>
                    <div className="flex flex-row h-28 w-1/2 gap-36 items-center self-start">
                        <p className="font-bold mt-10">
                        DETAILS
                        </p>
                        <p className="">
                        AEROJET 50th Anniversary Driver - Limited Edition
                        </p>
                    </div>
                </div>
            </div>
            
            {productModal.length > 0 && (
                <ProductModal productModal={productModal} toggleModal={toggleModal} />
            )}
        </>
    );
}

export default Product;