"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { RootState } from "@/redux/store";
import Card from "@/components/cards/card";


const ProductList = () => {

  const { data, loading, error } = useSelector((state: RootState) => state.products);


  const productSvg = [
    "/card-svg/product/first.svg",  
    "/card-svg/product/second.svg",  
    "/card-svg/product/third.svg",  
    "/card-svg/product/fourth.svg",  
    "/card-svg/product/fifth.svg",  
    "/card-svg/product/sixth.svg",  
  ]

  const packetstSvg = [
    "/card-svg/packets/first.svg",  
    "/card-svg/packets/second.svg",  
    "/card-svg/packets/third.svg",  
    "/card-svg/packets/fourth.svg",  
  ]


  return (
    <main className="main-list main-page-list">
      <div className="container">
        <div className="list products">
          <div className="title">
            <p>Ürünler</p>
          </div>
          <div className="list-items">
            {loading
              ?<div className="loading-mui"><CircularProgress color="inherit" size={40}  /></div>
              :data.products.map((item,index)=>(
                <Card key={index} cardImg={item.image} cardTitle={item.title} svgPath={productSvg[index]}/>
              ))
            }
          </div>
        </div>
        <div className="list packets">
          <div className="title">
            <p>Paketler</p>
            <Link href={"/packets"}>
              <strong>Tüm Paketler</strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#343131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="list-items">
            {loading
              ?<div className="loading-mui"><CircularProgress color="inherit" size={40}  /></div>
              :data.packets.map((item,index)=>(
                <Card key={index} cardImg={item.image} cardTitle={item.title} svgPath={packetstSvg[index]}/>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
