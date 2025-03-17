import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="svg-container"></div>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="member-mail">
                        <div className="light-logo">
                            <Link href={"/"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="57"
                                    height="25"
                                    fill="none"
                                    viewBox="0 0 57 25"
                                >
                                    <g fill="#fff" clipPath="url(#clip0_42_822)">
                                    <path d="M10.762 16.514c-1.112 1.222-2.512 1.822-4.224 1.822-.667 0-1.4-.178-2.178-.533q-1.167-.534-1.734-1.467v1.822H.047V.064h2.646v7.98c.378-.622.933-1.111 1.711-1.445q1.167-.533 2.2-.533 2.602 0 4.202 1.867c1.09 1.245 1.622 2.668 1.622 4.246q0 2.501-1.666 4.335M2.648 12.2c0 1.045.334 1.934.978 2.668.667.711 1.534 1.067 2.579 1.067 1.044 0 1.911-.356 2.556-1.067q1-1.1 1-2.668 0-1.567-1-2.667c-.645-.734-1.512-1.09-2.556-1.09s-1.912.355-2.579 1.09c-.644.734-.978 1.623-.978 2.667M16.651 13.002c.022.889.378 1.622 1.067 2.223q1.035.867 2.401.867c1.49 0 2.557-.623 3.201-1.845l1.912 1.267c-1 1.845-2.934 2.867-5.068 2.867-1.757 0-3.246-.578-4.446-1.756-1.178-1.178-1.779-2.667-1.779-4.423 0-1.712.578-3.157 1.712-4.357q1.7-1.801 4.268-1.801c1.8 0 3.223.556 4.246 1.69 1.022 1.134 1.534 2.6 1.534 4.445 0 .356-.023.623-.045.823zm.133-2h6.225c-.09-1.668-1.4-2.69-3.09-2.69-1.622 0-2.89 1.067-3.135 2.69M28.054 1.22c.689-.711 1.756-.711 2.445 0a1.705 1.705 0 0 1 0 2.445 1.705 1.705 0 0 1-2.445 0 1.705 1.705 0 0 1 0-2.445M30.61 18.16h-2.645V6.289h2.645zM36.522 6.289v13.27c0 3.002-1.445 4.491-4.312 4.491-.423 0-.823-.066-1.2-.178V21.56c.2.067.422.09.666.09 1.579 0 2.179-.601 2.179-2.38V6.29zm.423-3.846c0 .956-.8 1.733-1.779 1.733a1.736 1.736 0 0 1-1.734-1.733c0-.956.778-1.756 1.734-1.756.978 0 1.779.8 1.779 1.756M41.524 13.002c.022.889.377 1.622 1.067 2.223a3.62 3.62 0 0 0 2.4.867c1.49 0 2.556-.623 3.201-1.845l1.912 1.267c-1 1.845-2.934 2.867-5.068 2.867-1.756 0-3.246-.578-4.446-1.756-1.178-1.178-1.779-2.667-1.779-4.423 0-1.712.578-3.157 1.712-4.357q1.7-1.801 4.268-1.801c1.8 0 3.223.556 4.246 1.69 1.022 1.134 1.533 2.6 1.533 4.445 0 .356-.022.623-.044.823zm.133-2h6.224c-.089-1.668-1.4-2.69-3.09-2.69-1.622 0-2.89 1.067-3.134 2.69M56.386 16.48c0 .51-.39.886-.724 1.22s-.71.61-1.22.61-.85-.312-1.183-.646-.564-.674-.564-1.184-.036-1.115.298-1.45.94-.515 1.45-.515.967.329 1.301.663.642.792.642 1.302"></path>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_42_822">
                                        <path fill="#fff" d="M-.006.064h56.394v24H-.006z"></path>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <div className="member-txt">
                            <p>Arayı Açmayalım</p>
                            <span>beije'deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemizi döngü'ye abone ol!</span>
                        </div>
                        <div className="mail-area">
                            <form>
                                <div className="inpts">
                                    <TextField 
                                        id="outlined-basic" 
                                        label="E-mail Adresin" 
                                        variant="outlined" 
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& .MuiInputBase-input": {
                                                    color: "rgba(255, 255, 255, 0.698)", 
                                                },
                                                "& fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.23)", 
                                                },
                                                "& fieldset span": {
                                                    color: "rgba(255, 255, 255, 0.23) !important",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.23)",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    border: "1px solid rgba(255, 255, 255, 0.23)",
                                                },
                                            },
                                            "& .MuiInputBase-input::placeholder": {
                                              color: "rgba(255, 255, 255, 0.698)", 
                                              opacity: 1,
                                            },
                                            "& .MuiFormLabel-root":{
                                                color:"rgba(255, 255, 255, 0.698)"
                                            },
                                            "& .MuiFormLabel-root.Mui-focused":{
                                                color:"rgba(255, 255, 255, 0.698)"
                                            }
                                           
                                        }}    
                                    />
                                </div>
                                <button disabled>Gönder</button>
                            </form>
                            <p>Abone olarak, beije <Link href={"/"}><strong>KVKK</strong> ve <strong>Gizlilik Politikası</strong></Link>'nı kabul ediyor ve beijden haber almayı onaylıyorum</p>
                        </div>
                    </div>
                    <div className="links">
                        <nav>
                            <ul>
                                <li>
                                    <Link href={"/"}>
                                        beije Ped
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        beije Günlük Ped
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        beije Tampon
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                <li>
                                    <Link href={"/"}>
                                        Biz Kimiz?
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        Sıkça Sorulan Sorular
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        Ekibimize Katıl
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                <li>
                                    <Link href={"/"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 25 24"
                                        >
                                            <path
                                            fill="#fff"
                                            fillOpacity="0.7"
                                            d="M16.826 6.009h-3a1 1 0 0 0-1 1v3h4a.35.35 0 0 1 .34.46l-.74 2.2a.5.5 0 0 1-.47.34h-3.13l.001 7.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-7.5h-1.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1.5v-3a4 4 0 0 1 4-4h3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5"
                                            ></path>
                                        </svg>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 25 24"
                                        >
                                            <path
                                            fill="#fff"
                                            fillOpacity="0.7"
                                            fillRule="evenodd"
                                            d="M16.328 3.009h-8a5 5 0 0 0-5 5l.001 8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5m3.251 13a3.26 3.26 0 0 1-3.25 3.25h-8a3.26 3.26 0 0 1-3.25-3.25v-8a3.26 3.26 0 0 1 3.25-3.25h8a3.26 3.26 0 0 1 3.25 3.25zm-2.5-7.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4.75-.75a4.5 4.5 0 1 0 4.5 4.5 4.49 4.49 0 0 0-4.5-4.5m-2.75 4.5a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0"
                                            clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 25 24"
                                        >
                                            <path
                                            fill="#fff"
                                            fillOpacity="0.7"
                                            d="M21.304 6.726a7.2 7.2 0 0 1-1.663 1.6v.495a10.97 10.97 0 0 1-3.258 7.822 10.96 10.96 0 0 1-7.857 3.165 11 11 0 0 1-4.898-1.132.23.23 0 0 1-.135-.207v-.099c0-.13.105-.234.234-.234a7.96 7.96 0 0 0 4.6-1.654 3.93 3.93 0 0 1-3.495-2.302.234.234 0 0 1 .234-.323c.459.046.923.003 1.366-.126a3.92 3.92 0 0 1-3.1-3.426.234.234 0 0 1 .323-.233c.447.197.93.301 1.42.305a3.85 3.85 0 0 1-1.537-4.441.485.485 0 0 1 .817-.162 11.1 11.1 0 0 0 7.558 3.488 3.6 3.6 0 0 1-.108-.9 3.92 3.92 0 0 1 6.749-2.643 7.8 7.8 0 0 0 2.148-.746c.05-.031.112-.031.161 0 .031.05.031.112 0 .162a3.93 3.93 0 0 1-1.581 1.798 7.7 7.7 0 0 0 1.797-.432.14.14 0 0 1 .162 0 .153.153 0 0 1 .063.225"
                                            ></path>
                                        </svg>
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 25 24"
                                        >
                                            <path
                                            fill="#fff"
                                            fillOpacity="0.7"
                                            fillRule="evenodd"
                                            d="m5.333 3.01 14-.001a2 2 0 0 1 2 2l.001 14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2m3 15a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5zm-.75-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m10.25 8.999a.5.5 0 0 0 .5-.5v-4.6a3.1 3.1 0 0 0-2.72-3.14 3 3 0 0 0-2.78 1.34v-.6a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-3.75a1.5 1.5 0 1 1 3 0v3.75a.5.5 0 0 0 .5.5z"
                                            clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Linkedin
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 25 24"
                                        >
                                            <path
                                            fill="#fff"
                                            fillOpacity="0.7"
                                            d="M12.822 2.946a9 9 0 1 0 0 18 9 9 0 0 0 0-18m4.127 12.98a.56.56 0 0 1-.772.187c-2.113-1.291-4.773-1.583-7.906-.868a.561.561 0 0 1-.25-1.094c3.429-.783 6.37-.446 8.742 1.004a.56.56 0 0 1 .186.772m1.102-2.45a.7.7 0 0 1-.965.231c-2.42-1.487-6.107-1.918-8.969-1.049a.703.703 0 0 1-.408-1.343c3.269-.991 7.333-.511 10.11 1.196.33.203.435.635.232.965m.094-2.552C15.245 9.2 10.46 9.043 7.69 9.884a.842.842 0 1 1-.488-1.612c3.179-.965 8.464-.779 11.803 1.204a.84.84 0 1 1-.858 1.448"
                                            ></path>
                                        </svg>
                                        Spotify
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="rights">
                        <p className="right-txt disabled-clr-light">
                            2025 beije. Tüm hakları saklıdır.
                        </p>
                        <nav>
                            <ul>
                                <li>
                                    <Link href={"/"} className="disabled-clr-light">
                                        KVKK
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="disabled-clr-light">
                                        KVKK Başvuru Formu
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="disabled-clr-light">
                                        Üyelik Sözleşmesi
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="disabled-clr-light">
                                        Gizlilik Politikası
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="disabled-clr-light">
                                        Çerez Politikası
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="disabled-clr-light">
                                        Test Sonuçları
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="lang-opt">
                            <p className="disabled-clr-light">EN</p>
                            <span></span>
                            <p className="select-clr-light">TR</p>
                        </div>
                    </div>
                    <div className="payments">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="25"
                            fill="none"
                            viewBox="0 0 48 25"
                        >
                            <rect width="48" height="24" y="0.086" fill="#F79E1B" rx="2"></rect>
                            <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M29.807 21.086c5.077 0 9.193-4.03 9.193-9s-4.116-9-9.193-9c-5.078 0-9.194 4.03-9.194 9s4.116 9 9.194 9"
                            clipRule="evenodd"
                            ></path>
                            <path
                            fill="#EB001B"
                            fillRule="evenodd"
                            d="M18.194 21.086c5.077 0 9.193-4.03 9.193-9s-4.116-9-9.193-9c-5.078 0-9.194 4.03-9.194 9s4.116 9 9.194 9"
                            clipRule="evenodd"
                            ></path>
                            <path
                            fill="#FF5F00"
                            fillRule="evenodd"
                            d="M24 5.108c-2.067 1.65-3.387 4.164-3.387 6.978s1.32 5.328 3.387 6.978c2.067-1.65 3.387-4.163 3.387-6.978S26.067 6.76 24 5.108"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="25"
                            fill="none"
                            viewBox="0 0 48 25"
                        >
                            <rect width="48" height="24" y="0.086" fill="#1A1F71" rx="2"></rect>
                            <path
                            fill="#F0F0F0"
                            fillRule="evenodd"
                            d="M32.167 7.534a7.6 7.6 0 0 0-2.612-.448c-2.88 0-4.91 1.446-4.927 3.517-.015 1.532 1.449 2.385 2.555 2.896 1.134.521 1.515.855 1.51 1.32-.008.715-.906 1.041-1.744 1.041-1.166 0-1.786-.16-2.743-.558l-.376-.17-.41 2.386c.682.297 1.94.555 3.248.568 3.064 0 5.053-1.428 5.075-3.64.01-1.213-.765-2.135-2.446-2.895-1.02-.494-1.644-.823-1.637-1.322 0-.442.528-.917 1.668-.917a5.4 5.4 0 0 1 2.182.41l.262.121zM18.683 17.928l1.822-10.656h2.914l-1.823 10.656zM37.389 7.283h2.252L42 17.93h-2.705s-.267-1.224-.354-1.596l-2.052-.003h-.012l-1.669-.002c-.113.288-.613 1.6-.613 1.6h-3.061l4.328-9.764c.307-.694.829-.883 1.527-.883m-1.343 6.868c.242-.614 1.162-2.98 1.162-2.98-.008.014.048-.132.126-.333.08-.21.185-.479.26-.683l.197.918.675 3.078zm-22.661.395 2.853-7.266h3.087l-4.588 10.635-3.084.004L9.044 8.6c1.85.923 3.506 2.768 4.037 4.47z"
                            clipRule="evenodd"
                            ></path>
                            <path
                            fill="#F9A51A"
                            fillRule="evenodd"
                            d="M10.737 7.273h-4.7L6 7.494c3.657.883 6.076 3.015 7.08 5.576l-1.022-4.898c-.176-.675-.688-.876-1.32-.9"
                            clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer