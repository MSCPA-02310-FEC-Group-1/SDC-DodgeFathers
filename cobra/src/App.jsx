import { useEffect, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Product from './components/Product'
import FactOne from './components/FactOne'
import FactTwo from './components/FactTwo'
import FactThree from './components/FactThree'
import Fact4 from './components/Fact4'
import Carousel from './components/Carousel'
import Ad from './components/Ad'
import TechOverview from './components/TechOverview'
import ReviewHeader from './components/ReviewHeader'
import Specifications from './components/Specifications'
import ShaftSpecs from './components/ShaftSpecs'
import GripSpecs from './components/GripSpecs'
import RelatedProducts from './components/RelatedProducts'
import RecentlyViewed from './components/RecentlyViewed'
import TabComponent from './components/ReviewQuestionDisplay'
import Footer from './components/Footer'
import Klarna from './components/Klarna'
import Chat from './components/Chat'
import axios from 'axios'
import './App.css'

function App() {
  const [productModal, setProductModal] = useState([]);
  const [isLoading, setIsLoadidng] = useState(true)
  const [clubData, setClubData] = useState([])
  const [singleClubData, setSingleClubData] = useState(null)
  const [pageId, setPageId] = useState(1);

  const toggleModal = (images) => {
    if (productModal.length === 0) {
        setProductModal(images);
    } else {
        setProductModal([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api')
        setClubData(res.data)
      } catch (error) {
        console.error(`Error fetching data:`, error)
      }
    }

    const fetchSingleData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/${pageId}`)
        setSingleClubData(res.data)
      } catch (error){
        console.error(`Error fetching data:`, error)
      }
    }

    // fetchData()
    fetchSingleData()
    setIsLoadidng(false)
  },[])

  //on pageid changes
  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/${pageId}`)
        setSingleClubData(res.data)
      } catch (error){
        console.error(`Error fetching data:`, error)
      }
    }
    fetchSingleData();
    setIsLoadidng(false)
  }, [pageId])


  console.log('app.jsx',singleClubData)

  if(isLoading){
    return(<h1>Loading</h1>)
  }
  

  return (
    <>
        <Header />
        <Navbar setPageId={setPageId}/>
        <Product singleClubData={singleClubData}/>
        <FactOne />
        <FactTwo/>
        <FactThree/>
        <Fact4 />
        <Carousel />
        <Ad />
        <TechOverview />
        <Specifications />
        <ShaftSpecs />
        <GripSpecs />
        <RelatedProducts/>
        <RecentlyViewed />
        <ReviewHeader />
        <Footer />
        <Chat />
        <Klarna/>
    </>
  );
}

export default App

//   const [modalImages, setModalImages] = useState([])

//   const toggleModal = (images) => {
//     if (modalImages.length === 0) {
//         setModalImages(images);
//     } else {
//         setModalImages([]);
//     }
// };