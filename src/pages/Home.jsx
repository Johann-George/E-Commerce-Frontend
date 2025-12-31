import React from "react";
import ProductCard from "../components/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Home() {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard
                        title="Lizard"
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard 
                        title="Lizard" 
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard
                        title="Lizard"
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard 
                        title="Lizard" 
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard
                        title="Lizard"
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard 
                        title="Lizard" 
                        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;