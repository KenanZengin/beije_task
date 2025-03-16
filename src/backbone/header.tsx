"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Reeact, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"; 
import Popover from '@mui/material/Popover';
import Badge from '@mui/material/Badge';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '@/redux/userSlice';
import { clearCart } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';
import Card from '@/components/cards/card';

const Header = () => {


  const router = useRouter();

  const { data, loading, error } = useSelector((state: RootState) => state.products);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const reduxUser  = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch(); 


  const [user,setUser] = useState(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElMenu(null);
  };
  const openMenu = Boolean(anchorElMenu);

  const [anchorElMobile, setAnchorElMobile] = useState<null | HTMLElement>(null);
  const handleClickMobile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMobile(event.currentTarget);
  };
  const handleCloseMobile = () => {
    setAnchorElMobile(null);
  };
  const openMenuMobile = Boolean(anchorElMobile);
  
  const handleLogout = () => {
    dispatch(logout()); 
    dispatch(clearCart());
    router.push("/login");
    setAnchorElMenu(null);
    setAnchorElMobile(null);
};;

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

  

  useEffect(() => {
    setUser(reduxUser);
  }, [ reduxUser]);

  const pushNewRout = (rout:string) => {
    router.push(rout);
    setAnchorElMenu(null);
    setAnchorElMobile(null);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-left">
            <div className="main-logo">
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="beije_logo02_svg__Layer_1"
                width="56.39"
                height="24"
                x="0"
                y="0"
                cursor="pointer"
                viewBox="0 0 1001 426"
              >
                <path
                  fill="#ce7328"
                  d="M191.13 291.98c-19.73 21.7-44.58 32.35-74.97 32.35-11.84 0-24.86-3.16-38.67-9.47s-24.07-15-30.78-26.04v32.35H.95V0H47.9v141.65c6.71-11.05 16.57-19.73 30.38-25.65 13.81-6.31 26.83-9.47 39.06-9.47 30.78 0 55.64 11.05 74.57 33.14 19.34 22.1 28.8 47.35 28.8 75.36.01 29.61-9.85 55.25-29.58 76.95M47.11 215.43c0 18.54 5.92 34.33 17.36 47.35 11.83 12.63 27.22 18.94 45.77 18.94 18.54 0 33.93-6.31 45.37-18.94 11.84-13.02 17.76-28.8 17.76-47.35s-5.92-34.33-17.76-47.35c-11.44-13.02-26.83-19.34-45.37-19.34-18.55 0-33.94 6.31-45.77 19.34-11.44 13.03-17.36 28.81-17.36 47.35m248.56 14.21c.39 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.44 15.39 42.61 15.39 26.44 0 45.38-11.05 56.82-32.75l33.93 22.49c-17.76 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34s45.37-31.96 75.76-31.96c31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.23 46.17 27.23 78.91 0 6.31-.4 11.05-.79 14.6zm2.36-35.51h110.48c-1.58-29.6-24.86-47.74-54.84-47.74-28.8 0-51.3 18.94-55.64 47.74M498.06 20.52c12.23-12.63 31.17-12.63 43.4 0 12.23 12.23 12.23 31.17 0 43.4s-31.17 12.23-43.4 0-12.23-31.17 0-43.4m45.37 300.66h-46.95v-210.7h46.95zm104.95-210.7v235.56c0 53.27-25.65 79.71-76.55 79.71-7.5 0-14.6-1.18-21.3-3.16v-41.04c3.55 1.18 7.5 1.58 11.83 1.58 28.02 0 38.67-10.66 38.67-42.22V110.48zm7.5-68.26c0 16.97-14.2 30.77-31.57 30.77-16.97 0-30.78-13.81-30.78-30.77 0-16.97 13.81-31.17 30.78-31.17 17.36 0 31.57 14.2 31.57 31.17m81.27 187.42c.4 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.43 15.39 42.61 15.39 26.43 0 45.37-11.05 56.82-32.75l33.93 22.49c-17.75 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34s45.38-31.96 75.76-31.96c31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.22 46.17 27.22 78.91 0 6.31-.39 11.05-.79 14.6zm2.37-35.51H850c-1.58-29.6-24.86-47.74-54.85-47.74-28.8 0-51.29 18.94-55.63 47.74"
                ></path>
                <path
                  fill="#F68C1E"
                  d="M1000.95 291.38c0 9.05-6.91 15.72-12.84 21.65s-12.6 10.84-21.65 10.84-15.08-5.55-21.01-11.48-10-11.96-10-21.01-.65-19.8 5.28-25.73 16.68-9.15 25.73-9.15 17.18 5.84 23.11 11.77 11.38 14.06 11.38 23.11"
                ></path>
              </svg>
            </Link>
            </div>
          <div className="user-menu">
            <p
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
            > 
              Tüm Ürünler
            </p>
            <p> 
              Biz Kimiz?
            </p>
            <p> 
              Bağış Kültürü
            </p>
            <p> 
              Regl Testi!
            </p>
            <p> 
              Kendi Paketini Oluştur
            </p>
          </div>
          </div>
          <div className="header-right">
            <div className="user-menu nav-links">
              <Badge  
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  '& .MuiBadge-badge': { 
                    backgroundColor: "#000", 
                    color: "#fff",
                  }
                }}
                badgeContent={cartItems.length}
              >
                <Link href={"/packets"}>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6zM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  ></path>
                  </svg>
                </Link>
              </Badge>
              {user
                ? 
                <button
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className="menu-btn"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
                  ></path>
                </svg>
                </button>
                : <Link href={"/login"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
                      ></path>
                    </svg>
                  </Link>
              }
              <button
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickMobile}
                className="menu-btn hamburder-menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          sx: {
            overflow: "hidden",
            width: "100vw",
            maxWidth: "100vw",
            left:" 0 !important",
            top: "94px !important"

          },
          onMouseEnter: () => setAnchorEl(anchorEl),
          onMouseLeave: handlePopoverClose,
        }}
      >
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: open ? "630px" : 0, opacity: open ? 1 : 0 }}
          exit={{ maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="popover-cntnt">
            <div className="main-list">
              <div className="container">
                <div className="list products">
                  <div className="title">
                    <p>Ürünler</p>
                  </div>
                  <div className="list-items">
                    {data.products.map((item, index) => (
                      <Card key={index} cardImg={item.image} cardTitle={item.title} svgPath={productSvg[index]} />
                    ))}
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
                    {data.packets.map((item, index) => (
                      <Card key={index} cardImg={item.image} cardTitle={item.title} svgPath={packetstSvg[index]} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Popover>
      <Menu
        id="menu"
        anchorEl={anchorElMenu}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="menu-wrapper">
          <button className="menu-btn" onClick={handleLogout}>Çıkış yap</button>
          <button className="menu-btn" onClick={() => {router.push("/packets");setAnchorElMenu(null)}}>Ürünler</button>
        </div>
      </Menu>
      <Menu
        id="menu"
        anchorEl={anchorElMobile}
        open={openMenuMobile}
        onClose={handleCloseMobile}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          "& .MuiPaper-root": {
            left: "0 !important",
            top: "94px !important",
            maxWidth: "100vw"
          }
         
      }}    
      >
        <div className="menu-wrapper-mobile">
          <button className="menu-close" onClick={handleCloseMobile}><CloseIcon /></button>
          {user 
            ? <button className="menu-btn" onClick={handleLogout}>Çıkış yap</button>
            : <button className="menu-btn" onClick={() => pushNewRout("/login")}>Giriş yap</button>
          }
          <button className="menu-btn" onClick={() => pushNewRout("/packets")}>Tüm Ürünler</button>
          <button className="menu-btn" onClick={() => pushNewRout("/")}>Biz Kimiz?</button>
          <button className="menu-btn" onClick={() => pushNewRout("/")}>Bağış Kültürü</button>
          <button className="menu-btn" onClick={() => pushNewRout("/")}>Regl Testi!</button>
          <button className="menu-btn" onClick={() => pushNewRout("/")}>Kendi Paketini Oluştur</button>
        </div>
      </Menu>
    </header>
  )
}

export default Header