import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigate, useNavigate } from "react-router-dom";

const navBtn = ['Home','Product', 'About'];

const Navbar = ()=>{
    const navigate = useNavigate();
    const loginhandler= ()=>{
            navigate('/login');
    }

    return (
        <AppBar position="static"  sx={{backgroundColor:'#0e6096'}}>
            <Toolbar >
                <IconButton size="large" edge='start' color="inherit">
                    <ShoppingBasketIcon/>
                </IconButton>
                <Typography 
               
                variant="h6"
                component="div"
                 sx={{flexGrow:1}}
                >
                FootOnShoes</Typography>
                <Box   sx={{flexGrow:1}} >
                   
                    {
                        navBtn.map((btn)=>{
                            return <Button sx={{color: '#ffff'}}>{btn}</Button>
                        })
                    }

                </Box>
                <IconButton sx={{color: '#ffff'}}>
                    <ShoppingCartIcon/>
                    <Typography sx={{mb:.2,ml:0.5,mr:0.5}}>|</Typography>
                    
                </IconButton>
                <IconButton>
                <Typography onClick={loginhandler} >Login/SignUp</Typography>
                    <LoginIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>

      
    )
}

export default Navbar;
