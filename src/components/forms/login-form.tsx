"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Cookies from "js-cookie"
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { LoginSchema } from '@/schemas';
import SnackbarComponent from '../snackbar/snackbar';
import { useDispatch } from 'react-redux';
import { setUser } from "@/redux/userSlice";
import { SnackbarProps } from '@/types';

const LoginForm = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({
        snackbarStatu: false, 
        closeSnackbar: () => setSnackbarProps((prev) => ({ ...prev, snackbarStatu: false })),            
        snackbarMess: "", 
        snackbarMode: "error",
    });    
    const [loading, setLoading] = useState<boolean>(false);
    const [passwordMode, setPasswordMode] = useState<boolean>(false);
    
    const {handleSubmit, register, formState: {errors}} = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
        email: "",
        password: "",
    }
    });


    const showSnackbar = (message: string, mode: "error" | "info" | "success" | "warning") => {
        setSnackbarProps({
            snackbarStatu: true,
            closeSnackbar: () => setSnackbarProps((prev) => ({ ...prev, snackbarStatu: false })),
            snackbarMess: message,
            snackbarMode: mode
        });
    };

    const onSubmit = async (values:z.infer<typeof LoginSchema>) => {

        setSnackbarProps((prev) => ({ ...prev, snackbarStatu: false }));
        setLoading(true);

        const formValue = {
            "email": "salar@beije.co",
            "password": "beijeApp"
        }

        try {

            const response = await axios.post("https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/sign-in-request",formValue);
            const accessToken = response.data.data.token

            if(response.data){
                
                try {
                    const responseUserData = await axios.get(
                        "https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/profile",
                        {
                            headers: { "x-auth-token": `Bearer ${accessToken}` }
                        }
                    );
                    if(responseUserData.data){
                        dispatch(setUser(responseUserData.data.data));
                        router.push("/");
                        Cookies.set("token", accessToken);
                        router.refresh();
                    }else{
                        showSnackbar("Lütfen daha sonra tekrar deneyiniz.", "error");
                    }

                } catch (error) {
                    showSnackbar("Sunucundan cevap alınamadı lütfen daha sonra tekrar deneyiniz.", "error");
                }
            
            }else{
                showSnackbar("Sunucundan cevap alınamadı lütfen daha sonra tekrar deneyiniz.", "error");

            }

        } catch (error) {
            showSnackbar("Üyelik bilgileriniz hatalıdır.", "error");
        } finally {
            setLoading(false);
        }

    }
    
    

    return (
        <form autoComplete="off" id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inpts">
                <TextField
                    id="email" 
                    label="E-mail Adresin" 
                    variant="outlined" 
                    placeholder="halide.edip@adivar.com"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        borderRadius:"8px",
                        "& .MuiInputBase-input": {
                            color: "#000",
                            padding: "18.5px 12px"
                        },
                        "& fieldset": {
                            borderColor: errors.email  ?  "#DB1F21" : "#000",
                        },
                        "& fieldset span": {
                            color: "#000 ", 
                        },
                        "&:hover fieldset": {
                            borderColor: errors.email  ?  "#DB1F21" : "#000", 
                        },
                        "&.Mui-focused fieldset": {
                            border: "1px solid",
                            borderColor: errors.email  ?  "#DB1F21" : "#000",
                        },
                        },
                        "& .MuiInputBase-input::placeholder": {
                            color: "#000" , // Placeholder rengi
                            opacity: .5, // Opaklık artırma (Bazı tarayıcılarda varsayılan olarak düşüktür)
                        },
                        "& .MuiFormLabel-root":{
                            color: errors.email ? "#DB1F21" : "#000",
                            lineHeight: "1.75rem"
                        },
                        "& .MuiFormLabel-root.Mui-focused":{
                            color: errors.email  ?  "#DB1F21" : "#000",
                        }
                    }}         
                    {...register("email")}
                />
                {errors.email && errors.email.message && <p className="inp-err-mess">{errors.email.message}</p>}
            </div>
            <div className="inpts">
                <TextField
                    type={passwordMode ? "text" : "password"}
                    id="outlined-basic" 
                    label="Şifren" 
                    variant="outlined" 
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        borderRadius:"8px",
                        "& .MuiInputBase-input": {
                            color: "#000",
                            padding: "18.5px 12px"
                        },
                        "& fieldset": {
                            borderColor: errors.password  ?  "#DB1F21" : "#000",
                        },
                        "& fieldset span": {
                            color: "#000 ", 
                        },
                        "&:hover fieldset": {
                            borderColor: errors.password  ?  "#DB1F21" : "#000", 
                        },
                        "&.Mui-focused fieldset": {
                            border: "1px solid",
                            borderColor: errors.password  ?  "#DB1F21" : "#000",
                        },
                        },
                        "& .MuiInputBase-input::placeholder": {
                            color: "#000" , // Placeholder rengi
                            opacity: .5, // Opaklık artırma (Bazı tarayıcılarda varsayılan olarak düşüktür)
                        },
                        "& .MuiFormLabel-root":{
                            color: errors.password ? "#DB1F21" : "#000",
                            lineHeight: "1.75rem"
                        },
                        "& .MuiFormLabel-root.Mui-focused":{
                            color: errors.password  ?  "#DB1F21" : "#000",
                        }
                    }}     
                    {...register("password")}
                />
                {errors.password && errors.password.message && <p className="inp-err-mess">{errors.password.message}</p>}
                <span className="shw-pass" onClick={() => setPasswordMode(!passwordMode)}>
                    {!passwordMode
                        ?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#042759" viewBox="0 0 24 24"><path fill="#000" d="M16.1 12.6l-1.45-1.45c.15-.784-.075-1.517-.675-2.2-.6-.684-1.375-.95-2.325-.8L10.2 6.7a4.24 4.24 0 01.863-.3c.292-.067.604-.1.937-.1 1.25 0 2.313.437 3.188 1.313.875.875 1.313 1.937 1.312 3.187 0 .333-.033.646-.1.938-.067.292-.167.579-.3.862zm3.2 3.15l-1.45-1.4a10.98 10.98 0 001.688-1.587A8.84 8.84 0 0020.8 10.8c-.833-1.684-2.03-3.021-3.588-4.012C15.653 5.796 13.916 5.3 12 5.3c-.483 0-.958.033-1.425.1a9.625 9.625 0 00-1.375.3L7.65 4.15a11.107 11.107 0 012.1-.638A11.505 11.505 0 0112 3.3c2.517 0 4.758.695 6.725 2.087C20.692 6.777 22.117 8.582 23 10.8a11.696 11.696 0 01-1.513 2.738A11.002 11.002 0 0119.3 15.75zm.5 6.15l-4.2-4.15c-.583.183-1.17.32-1.762.413-.591.092-1.204.137-1.838.137-2.517 0-4.758-.696-6.725-2.087C3.308 14.82 1.883 13.017 1 10.8c.35-.884.792-1.705 1.325-2.463A11.475 11.475 0 014.15 6.3L1.4 3.5l1.4-1.4 18.4 18.4-1.4 1.4zM5.55 7.7c-.483.433-.925.908-1.325 1.425A9.015 9.015 0 003.2 10.8c.833 1.683 2.03 3.02 3.588 4.013C8.347 15.805 10.084 16.3 12 16.3c.333 0 .658-.021.975-.062.317-.042.642-.088.975-.138l-.9-.95c-.183.05-.358.087-.525.113A3.41 3.41 0 0112 15.3c-1.25 0-2.313-.438-3.188-1.312-.875-.875-1.313-1.938-1.312-3.188 0-.184.013-.359.038-.525.025-.167.063-.342.112-.525L5.55 7.7z"></path></svg>
                        :<svg
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
                        d="M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.2 1.2 0 0 1 0-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287"
                        ></path>
                        <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                        ></path>
                    </svg>
                        }
                    
                </span>
            </div>
            <div className="forgot-pass">
                <span>Şifremi Unuttum</span>
            </div>
            <button className="send-frm" type="submit" >
              {
                loading
                    ? <CircularProgress color="inherit" size={20} />
                    : "Giriş yap"
              }
            </button>
            <SnackbarComponent {...snackbarProps} />
        </form>
    )
}

export default LoginForm