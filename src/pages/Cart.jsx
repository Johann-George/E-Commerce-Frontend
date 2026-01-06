import { Card, CardMedia, Stack } from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Cart() {
    return (
        <>
            <Card sx={{ display: "flex", p: 2 }}>
                <Stack>
                    <CartItem />
                    <CartItem />
                </Stack>

                <Box sx={{ ml: 2 }}>
                    <Button variant="contained">Proceed to Checkout</Button>
                </Box>
            </Card>
        </>
    );
}