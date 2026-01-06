import { CardContent, Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

function ProductDetails({ title, description, price }) {
    return (
        <Card sx={{ display: "flex", p: 2 }}>
            <CardMedia
                component="img"
                alt="Koenigsegg Jesko"
                image="/Koenigsegg Jesko.jpeg"
                sx={{
                    width: 300,
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 2
                }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: 3
                }}
            >
                <Typography variant="h4" fontWeight="bold">
                    {/* {title} */}
                    Jesko 
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {/* {description} */}
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                    ₹500
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Button variant="contained">Buy Now</Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProductDetails;
