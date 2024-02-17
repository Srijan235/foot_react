import { HorizontalRule, Margin } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography ,Grid} from "@mui/material";
import React from "react";
// import pngwing from '.'
import images from '../images.json';
import ImgMediaCard from './card';
import pngwing from './pngwing.png';

const HomePage=()=>{


    return (
        <div>

        <Box sx={{backgroundColor:'#8ccbf5', height:200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        mb:4
      }} 
      >
        <Typography variant="h5">
          Make a good journey With FootOnShoe
        </Typography>
        
     <img
        src={pngwing}
        alt="Your Image"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
          

        
        </Box>
        <div style={{margin:"35px"}}>
        <Typography variant="h4">Recent Launches</Typography>
        </div>
        

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        
        <div style={{display:"flex",justifyContent:"space-evenly",width:"100vw"}}>
       
        {images.map((data,index)=>{
              return <ImgMediaCard key={index} value={data} sx={{mb:4}} />  
            })} 
        </div>
       



          </Grid>
        </div>
   

    )
}

export default HomePage;



// 'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?w=740&t=st=1708017375~exp=1708017975~hmac=ae86257653afa471a9c9e3666ccae7b6ebb73c1038f6b080e1a7aeb14d20122a'