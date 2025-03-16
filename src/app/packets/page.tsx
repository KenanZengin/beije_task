"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { RootState } from "@/redux/store";
import { addToCart, removeByTitle, removeFromCart } from "@/redux/cartSlice";
import { groupByTitle, groupByType } from "@/utils.ts/groupProductType";
import SnackbarComponent from "@/components/snackbar/snackbar";
import { CartItem, SnackbarProps } from "@/types";

const Packets = () => {

    const { data, loading, error } = useSelector((state: RootState) => state.products);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = useSelector((state: RootState) => state.cart.totalAmount);
    const user = useSelector((state: RootState) => state.user.user);

    const groupedProducts = groupByType(data.products);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState<string>("Menstrual");
    const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
        snackbarStatu: false, 
        closeSnackbar: () => setSnackbarProps((prev) => ({ ...prev, snackbarStatu: false })),            
        snackbarMess: "", 
        snackbarMode: "error",
    });   
    
    const packetstSvg = [
        "/accordion-svg/first.svg",  
        "/accordion-svg/second.svg",  
        "/accordion-svg/third.svg",  
    ]
    const packetstTitleSvg = [
        "/accordion-svg/title/first.svg",  
        "/accordion-svg/title/second.svg",  
        "/accordion-svg/title/third.svg",  
    ]
    const packetText = [
        "Döngüleri yoğun geçen kullanıcıların X’i günde 3 adet standart ped tercih ediyor. ",
        "Kullanıcılarımızın %68’i akıntıları olan günlerde Standart Günlük Pedi, regllerinin son günlerinde veya daha yoğun akıntıları olan günlerde ise Süper Günlük Ped'i tercih"
    ]

    const showSnackbar = (message: string, mode: "error" | "info" | "success" | "warning") => {
        setSnackbarProps({
            snackbarStatu: true,
            closeSnackbar: () => setSnackbarProps((prev) => ({ ...prev, snackbarStatu: false })),
            snackbarMess: message,
            snackbarMode: mode
        });
    };

    const handleAddToCart = (subProduct: CartItem) => {

        setSnackbarProps((prev) => ({ ...prev, snackbarStatu: false }));

        if(!user){
            showSnackbar("Sepete ürün eklemek için giriş yapmalısınız!", "error");
            return
        }

        dispatch(addToCart({
            _id: subProduct._id,
            name: subProduct.name,
            price: subProduct.price,
            count: 1,
            title: subProduct.title 
        }));
        
        const updatedCart = cartItems.map(item => 
            item._id === subProduct._id 
                ? { ...item, count: item.count + 1 } 
                : item
        );
    
        if (!cartItems.find(item => item._id === subProduct._id)) {
            updatedCart.push({ ...subProduct, count: 1 });
        }
    
        const body = {
            packet: updatedCart.map(item => ({
                _id: item._id,
                count: item.count
            })),
            totalPrice: updatedCart.reduce((acc, item) => acc + item.price * item.count, 0)
        };
    
        axios.post("https://3a631b5b-9b1b-4b7f-b736-00d1ce4a1505.mock.pstmn.io/verify-packet-price", body)
            .then((response) => {
                showSnackbar("Ürün sepete eklendi", "success");
            })
            .catch((error) => {
                dispatch(removeFromCart(subProduct._id));
                showSnackbar("Ürün sepete eklenemedi daha sonra tekrar deneyiniz.", "error");
            });
    };
    const groupedCart = groupByTitle(cartItems);

    return (
    <div className="user-packets">
        <div className="container">
            <div className="user-packets-wrapper">
                <div className="packet-list">
                    <div className="packet-list-title">
                        <p>Kendi Paketini Oluştur</p>
                        <span>Nasıl Çalışır?</span>
                    </div>
                    <p className="disabled-clr-dark">Döngünün uzunluğuna, kanamanın yoğunluğuna ve kullanmak istediğin ürünlere göre tamamen kendine özel bir paket oluştur!</p>
                    <div className="packet-subtitles">
                        <h3 
                            onClick={() => setSelectedCategory("Menstrual")}
                            style={{
                                color: selectedCategory === "Menstrual" ? "#000" : "#686767",
                            }}
                        >
                            Menstrual Ürünler
                        </h3>
                        <h3 
                            onClick={() => setSelectedCategory("Other")}
                            style={{
                                color: selectedCategory === "Other" ? "#000" : "#686767",
                            }}
                        >
                            Destekleyici Ürünler
                        </h3>
                        <span className="selected-br" style={{left: selectedCategory === "Other" ? "50%" : "0%"}}></span>
                    </div>
                    {loading
                        ?<div className="loading-mui"><CircularProgress color="inherit" size={40}  /></div>
                        :<div className="selected-products">
                        {Object.entries(groupedProducts).filter(([category]) => category === selectedCategory).map(([category, products]) => (
                            <div key={category} className="product-list">
                                {products.map((product,i) => (
                                    <div key={product._id}>
                                        <Accordion className="product-accordion product-accordion-pricing" style={{borderRadius:"1rem"}} defaultExpanded={i===0}>
                                            <AccordionSummary
                                                expandIcon={
                                                <>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                        stroke="#343131"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m6 9 6 6 6-6"
                                                        ></path>
                                                    </svg>
                                                </>
                                                }
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                className="product-accordion-header"
                                            >
                                                <div className="option">
                                                    <h3>
                                                        <Image src={packetstTitleSvg[i]} alt="svg" width={32} height={32}/>
                                                        {product.title}
                                                    </h3>
                                                    <div>
                                                        {Object.entries(groupedCart).map(([title, group]) => (
                                                            <>
                                                                {group.title === product.title && group.products.map((product,index) => (
                                                                    <p style={{color:"#343131"}}>{product.count} {product.name} {group.products.length > 1 && index !== group.products.length - 1 &&  " , "}</p>
                                                                ))}
                                                            </>
                                                        ))}     
                                                    </div>                                               
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails className="product-accordion-body">
                                                {(i === 0 || i === 1) && selectedCategory === "Menstrual" && (
                                                    <div className="product-text">
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                fill="#B9D54D"
                                                                stroke="#B9D54D"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M11.993 5.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.635 2.105 6.585 6.544 8.207 7.98.182.162.272.242.378.274a.5.5 0 0 0 .286 0c.106-.032.197-.112.378-.273 1.623-1.437 6.573-5.876 8.208-7.98 1.967-2.532 1.658-6.133-.89-8.251s-5.84-1.512-7.839.826"
                                                                clipRule="evenodd"
                                                                ></path>
                                                        </svg>
                                                        <p>
                                                            {packetText[i]}
                                                        </p>
                                                    </div>
                                                )}
                                                <ul className="product-details">
                                                    {product.subProducts.map((subProduct,index) => {
                                                        const cartItem = cartItems.find((item) => item._id === subProduct._id);
                                                        return (
                                                            <li key={subProduct._id} className="product-detail">
                                                                    <p>
                                                                    <Image src={packetstSvg[index]} alt="svg" width={48} height={20}/>
                                                                    {subProduct.name}
                                                                    {/* {subProduct.price} */}
                                                                </p>
                                                                <div className="product-count">
                                                                    <button
                                                                        onClick={() => cartItem && dispatch(removeFromCart(subProduct._id))}
                                                                        style={{ opacity: cartItem ? 1 : 0.5, pointerEvents: cartItem ? "auto" : "none" }}
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M5 12H19" stroke="#343131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </button>
                                                                    <span>{cartItem ? cartItem.count : 0}</span>
                                                                    <button
                                                                         onClick={() => handleAddToCart({ 
                                                                            _id: subProduct._id, 
                                                                            name: subProduct.name, 
                                                                            price: subProduct.price, 
                                                                            count: 1,
                                                                            title: product.title
                                                                        } )}
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M12 5V19M5 12H19" stroke="#343131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                ))}
                            </div>
                        ))}
                        </div>
                    }
                </div>
                <div className="packet-basket">
                    <div className="basket-title">
                        <p>Paketin</p>
                        <div><span></span> 2 Ayda bir gönderim</div>
                    </div>
                    <p className="basket-txt disabled-clr-dark">
                        Kişisel ihtiyacına yönelik istediğin miktarda ped, günlük ped, tampon veya destekleyici ürünler ekleyerek kendine özel paket oluşturabilirsin.
                    </p>
                    <div className="basket-list">
                    {Object.entries(groupedCart).map(([title, group]) => (
                        <div key={title} className="group-section">
                            <div className="group-title">
                                <h2>{group.title}</h2>
                                <button onClick={() => dispatch(removeByTitle(group.title))}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 24 25"
                                    >
                                        <path
                                        stroke="#342929"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeOpacity="0.5"
                                        strokeWidth="1.5"
                                        d="M9 3.5h6m-12 3h18m-2 0-.701 10.52c-.105 1.578-.158 2.367-.499 2.965a3 3 0 0 1-1.298 1.215c-.62.3-1.41.3-2.993.3h-3.018c-1.582 0-2.373 0-2.993-.3A3 3 0 0 1 6.2 19.985c-.34-.598-.394-1.387-.499-2.966L5 6.5m5 4.5v5m4-5v5"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <ul>
                                {group.products.map(product => (
                                    <li key={product._id}>
                                        <p className="disabled-clr-dark">{product.count} x {product.name}</p>
                                        <p style={{color:"#343131"}}><strong>{product.price * product.count}₺</strong></p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    </div>
                    <button className={`add-packets ${cartItems.length > 0 ? "select-package" : "not-selet-package"} `}>
                        Sepete Ekle ({totalPrice}₺)
                    </button>
                </div>
                <div className="mobile-price">
                    <button  className={`add-packets ${cartItems.length > 0 ? "select-package" : "not-selet-package"} `}>
                        Sepete Ekle ({totalPrice}₺)
                    </button>
                </div>
            </div>  
        </div>
        <SnackbarComponent {...snackbarProps} />
    </div>
    )
}

export default Packets