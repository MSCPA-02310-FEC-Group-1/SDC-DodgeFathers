import Product from "./Product";
import { useEffect, useState } from "react";
function FullScreenDropdown({ setPageId, isVisible, content, onClose, airX, setAirX }) {
    if (!isVisible) {
        return null;
    }

    // Close dropdown when clicking outside the content
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    const pageChangeHandler = (golfId) => {
        setPageId(golfId)
        console.log('clicked changeId:', golfId)
    }

    let displayContent;
    switch (content) {
        case 'Clubs':
            displayContent = 
                <div className="flex flex-row justify-center font-titillium font-regular">
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Featured</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a 
                            onClick={() => {
                                setAirX(true)
                                console.log(true)
                                pageChangeHandler(1)
                            }}
                             className="text-slate-400 hover:text-black cursor-pointer">AIR-X</a></li>
                            <li className="py-2"><a 
                                onClick={() => {pageChangeHandler(3)}} 
                                className="text-slate-400 hover:text-black cursor-pointer">AEROJET</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/pages/snakebite' className="text-slate-400 hover:text-black cursor-pointer">SNAKEBITE Wedges</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/pages/50th-anniversary' className="text-slate-400 hover:text-black cursor-pointer">50th Anniversary</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/pages/king-irons' className="text-slate-400 hover:text-black cursor-pointer">KING Irons</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/pages/king-putters' className="text-slate-400 hover:text-black cursor-pointer">King Putters</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/one-length' className="text-slate-400 hover:text-black cursor-pointer">ONE Length</a></li>
                        </ul>
                    </ul>
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Shop</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-drivers' className="text-slate-400 hover:text-black cursor-pointer">Drivers</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-fairways' className="text-slate-400 hover:text-black cursor-pointer">Fairways</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-hybrids' className="text-slate-400 hover:text-black cursor-pointer">Hybrids</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-sets' className="text-slate-400 hover:text-black cursor-pointer">Complete Sets</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-iron-hybrid-combo-sets' className="text-slate-400 hover:text-black cursor-pointer">Combo Sets</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-irons' className="text-slate-400 hover:text-black cursor-pointer">Irons</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-single-irons' className="text-slate-400 hover:text-black cursor-pointer">Single Irons</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-utility-irons' className="text-slate-400 hover:text-black cursor-pointer">Utility Irons</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-wedges' className="text-slate-400 hover:text-black cursor-pointer">Wedges</a></li>
                            <li className="pt-2 pb-8"><a href='https://www.cobragolf.com/collections/golf-clubs-putters' className="text-slate-400 hover:text-black cursor-pointer">Putters</a></li>
                        </ul>
                    </ul>
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Clubs For</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-womens' className="text-slate-400 hover:text-black cursor-pointer">Womens</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-juniors' className="text-slate-400 hover:text-black cursor-pointer">Juniors</a></li>
                        </ul>
                    </ul>
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Collections</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/aerojet' className="text-slate-400 hover:text-black cursor-pointer">AEROJET</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/king-irons' className="text-slate-400 hover:text-black cursor-pointer">KING Irons</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-wedges' className="text-slate-400 hover:text-black cursor-pointer">SNAKEBITE Wedges</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/ltdx' className="text-slate-400 hover:text-black cursor-pointer">LTDx</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/volition' className="text-slate-400 hover:text-black cursor-pointer">Volition</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/palm-tree-crew' className="text-slate-400 hover:text-black cursor-pointer">Palm Tree Crew</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/t-rail-2023' className="text-slate-400 hover:text-black cursor-pointer">T-RAIL</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/hot-list' className="text-slate-400 hover:text-black cursor-pointer">Hot List</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-limited-edition' className="text-slate-400 hover:text-black cursor-pointer">Limited Edition</a></li>
                        </ul>
                    </ul>
                </div>;
            break;
        case 'Accessories':
            displayContent = 
                <div  className="flex flex-row justify-center font-titillium font-regular">
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Featured</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/products/ultralight-pro-stand-bag' className="text-slate-400 hover:text-black cursor-pointer">UL Pro Stand Bag</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/products/microfiber-tour-towel' className="text-slate-400 hover:text-black cursor-pointer">Tour Towel</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/products/crown-c-umbrella' className="text-slate-400 hover:text-black cursor-pointer">Umbrella</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories-sale' className="text-slate-400 hover:text-black cursor-pointer">SALE</a></li>
                        </ul>
                        
                    </ul>
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Accessories</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-headcovers' className="text-slate-400 hover:text-black cursor-pointer">Headcovers</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-golf-bags' className="text-slate-400 hover:text-black cursor-pointer">Golf Bags</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories-headwear' className="text-slate-400 hover:text-black cursor-pointer">Hats</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories-gloves' className="text-slate-400 hover:text-black cursor-pointer">Gloves</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories-travel-gear' className="text-slate-400 hover:text-black cursor-pointer">Travel Gear</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories-towels' className="text-slate-400 hover:text-black cursor-pointer">Towels</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/products/cloudspun-cobra-golf-tee' className="text-slate-400 hover:text-black cursor-pointer">T-Shirt</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/golf-clubs-components' className="text-slate-400 hover:text-black cursor-pointer">Club Componets</a></li>
                        </ul>
                    </ul>
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-womens-accessories' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Womens</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-golf-bags' className="text-slate-400 hover:text-black cursor-pointer">Golf Bags</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-womens-accessories-headwear' className="text-slate-400 hover:text-black cursor-pointer">Hats</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-womens-accessories-gloves' className="text-slate-400 hover:text-black cursor-pointer">Gloves</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-accessories-travel-gear/gender--womens' className="text-slate-400 hover:text-black cursor-pointer">Travel Gear</a></li>
                        </ul>
                    </ul>
                    <ul className="w-[342px] mx-2">
                        <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-juniors-accessories' className="text-slate-600 hover:text-black cursor-pointer font-titillium font-semibold">Juniors</a></li>
                        <ul className="border-t-2 border-black">
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-juniors-accessories-headwear' className="text-slate-400 hover:text-black cursor-pointer">Hats</a></li>
                            <li className="py-2"><a href='https://www.cobragolf.com/collections/cobra-juniors-accessories-gloves' className="text-slate-400 hover:text-black cursor-pointer">Arccos</a></li>
                        </ul>
                    </ul>
                </div>;
            break;
        // Add cases for other links
        case 'Custom Fitting':
            displayContent = 
                <div className="flex flex-row items-center h-[70px] mx-60 pb-4 font-titillium font-semibold">
                    <a href='https://www.cobragolf.com/collections/golf-clubs-components' className="mr-52 text-slate-600 hover:text-black cursor-pointer">Club Components</a>
                    <a href='https://www.cobragolf.com/pages/find-a-fitter' className="mr-52 text-slate-600 hover:text-black cursor-pointer">Find a Fitter</a>
                    <a href='https://www.cobragolf.com/pages/adjustability-guide' className="mr-52 text-slate-600 hover:text-black cursor-pointer">Adjustability Guide</a>
                </div>;
            break;
        case 'On Tour':
            displayContent = 
            <div>
                <div  className="flex flex-row items-center h-[47px] mx-60 font-titillium font-semibold">
                    <a href='https://www.cobragolf.com/pages/cobra-tour-staff' className="mr-72 text-slate-600 hover:text-black cursor-pointer">COBRA Tour Staff</a>
                    <a href='https://www.cobragolf.com/pages/tour-tips' className="mr-52 text-slate-600 hover:text-black cursor-pointer">Tour Tips</a>
                </div>;
            </div>;
            break;
    }

    if (!airX) {
        return (
            <div className="fixed inset-x-0 top-0 mt-[100px] pt-4 border-b-2 bg-white z-50" onClick={handleOutsideClick}>
                <div>
                    {displayContent}
                </div>
            </div>
        );
    } else {
        return (
            <div className="fixed inset-x-0 top-0 mt-[100px] pt-4 border-b-2 bg-white z-50" onClick={handleOutsideClick}>
                <div>
                    <Product />
                </div>
            </div>
        );
    }
}

export default FullScreenDropdown;