import React, { useState, useEffect } from 'react';
// import CobraClub from '../assets/cobra-club.js'
import CustomClub from './CustomClub'
import Klarna from './Klarna.jsx';


const ProductDetails = ({singleClubData}) => {
    const [selectedHand, setSelectedHand] = useState('Right');
    const [selectedLoft, setSelectedLoft] = useState('9.0');
    const [isSoldOut, setSoldOut] = useState(false);
    const [learnMore, setLearnMore] = useState(false)

    const {custom_options, 
            loft, 
            price, 
            sale_price, 
            title} = singleClubData[0]

    

    const handleLearnMoreClick = () => {
        setLearnMore(true);
    }

    const handleHandClick = (value) => {
        setSelectedHand(value);
        checkSoldOut()
    };

    const handleLoftClick = (value) => {
        setSelectedLoft(value);
        checkSoldOut()
    };

    const checkSoldOut = () => {
        if (selectedHand === 'Left' && selectedLoft === '9.0') {
          setSoldOut(true);
        } else {
          setSoldOut(false);
        }
      };

    useEffect(() => {
        checkSoldOut();
    }, [selectedHand, selectedLoft]);

    return (
        <>
        {learnMore && <Klarna learnMore={learnMore} setLearnMore={setLearnMore}/>}
            <div className="w-2/5 flex-initial flex-row justify-center ">
                <div className="product-details sticky flex-col min-w-[330px] overflow-x-auto  w-8/12 ">
                    <header className="m-1 text-[22px] font-titillium font-semibold">
                        AEROJET 50th Anniversary Driver - Limited Edition
                    </header>
                    <p><span className="line-through">$599.00</span> <span className="font-semibold text-xl">$449.00</span></p>
                    <p className="my-4 text-xl">4 interest-free payments of $112.25 with <b>Klarna.</b> <u onClick={handleLearnMoreClick}>Learn More</u></p>
                    <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                    <p className="mx-1 my-5 text-[14px]">The COBRA AEROJET 50th Anniversary Limited Edition Driver was designed to celebrate our fans,
                        players, and all golf enthusiasts. Bold design, alongside next-level innovations,
                        provide the most thrilling on-course experience. Go ahead, take a rip.</p>
                    <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                    <p className="font-semibold text-[10px]">Hand</p>
                    <div className="flex flex-row gap-2 p-1 py-2">
                        <button className={`btn-sm border border-black rounded-full ${selectedHand === 'Right' ? 'bg-black text-white' : 'bg-white'} px-4`}
                                onClick={() => handleHandClick('Right')}>Right</button>
                        <button className={`btn-sm border border-black rounded-full ${selectedHand === 'Left' ? 'bg-black text-white' : 'bg-white'} px-4`}
                                 onClick={() => handleHandClick('Left')}>Left</button>
                    </div>
                    <p className="font-semibold text-[10px]">Loft</p>
                    <div className="flex flex-row gap-2 p-1 py-2">
                        <button
                            className={`btn-sm border border-black rounded-full ${selectedLoft === '9.0' ? 'bg-black text-white' : 'bg-white'} px-4`}
                            onClick={() => handleLoftClick('9.0')}
                        >
                            9.0
                        </button>
                        <button
                            className={`btn-sm border border-black rounded-full ${selectedLoft === '10.5' ? 'bg-black text-white' : 'bg-white'} px-4`}
                            onClick={() => handleLoftClick('10.5')}
                        >
                            10.5
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <p className="font-semibold text-[10px]">Shaft Flex</p>
                        <select className="select w-full mt-2 border-gray-400 rounded-lg text-[7px] focus:border-white focus:ring-1 focus:ring-white">
                            <option className='bg-white text-black' disabled selected>
                            Choose an Option
                            </option>
                            {custom_options.ShaftFlex.map((option, index) => (
                            <option className='bg-white text-black' key={index} value={option.value} disabled={option.disabled}>{option.value}</option>
                            ))}
                        </select>
                    </div>

                    <div className={`collapse ${isSoldOut ? 'collapse-close' : 'collapse-open'}`}>
                        <CustomClub />
                    </div>
                   
                    <div className="qty-container flex flex-row items-center gap-2 my-4">
                        <div className="flex flex-row items-center justify-center gap-6 border">
                            <p className="text-[8px] font-bold">QTY</p>
                            <input type="text" placeholder="" className="input input-bordered w-[2.5rem] h-[2.5rem] rounded-none" />
                        </div>
                        <div className="flex w-full justify-center border">
                            {isSoldOut ?
                                (<button className="bg-black opacity-50 text-sm font-semibold text-white uppercase rounded-full h-10 w-full flex-shrink-0 cursor-no-drop">Sold Out</button>)
                                : (<button className="btn bg-black w-full text-l text-white uppercase rounded-full hover:bg-black hover:scale-105 ">Add To Cart</button>)}
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="w-5/6 hover:cursor-pointer">
                            <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                            <div className="flex flex-row justify-between">
                                <p className="text-[8px] font-bold">SPECS</p>
                                <span className="material-symbols-outlined scale-50">arrow_downward</span>
                            </div>
                            <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                            <div className="flex flex-row justify-between">
                                <p className="text-[8px] font-bold hover:text-blue-700 hover:underline">DETAILS</p>
                                <span className="material-symbols-outlined scale-50">arrow_downward</span>
                            </div>
                            <div className="w-[98%] mx-auto h-px bg-gray-200"></div>
                            <div className="collapse collapse-plus p-0">
                                <input type="checkbox" />
                                <div className="collapse-title w-full px-0">
                                    <p className="text-[8px] font-bold">RETURNS & SHIPPING </p>
                                </div>
                                <div className="collapse-content w-full p-0">
                                    <p className="text-[10px] font-titillium">
                                        Please note returns must be requested within 30 days of receipt and all
                                        product returned in new and unused condition.
                                    </p>
                                </div>
                                <div className="w-full h-px bg-gray-200"></div>
                            </div>
                            <div className="mt-8 flex flex-row justify-center " href="">
                                    <a className="w-full h-full" href="https://www.cobragolf.com/pages/trade-in" target="_blank" rel="noopener noreferrer">
                                        <button className="btn w-full h-[50px] text-l bg-white border border-black rounded-full uppercase hover:bg-white hover:border-2 hover:border-black hover:text-blue-700">Have a trade in? </button>
                                    </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
