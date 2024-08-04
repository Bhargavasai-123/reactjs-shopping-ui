import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import Womencollections from "../Components/Womenscollections"
import {Gents,Ladies} from '../Data'
const Main = () => {
  const[gentsFashion,setGentsFashion]=useState(Gents)
  const[ladiesFashion,setladiesFashion]=useState(Ladies)
  console.log(Gents);
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <Womencollections ladiesFashion={ladiesFashion} />
        <Footer/>
      </div>
  )
}

export default Main
