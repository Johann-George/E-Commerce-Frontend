import React, { useState } from "react"
import { Box, Button, Card, CardContent, CardMedia, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"

export default function CartItem() {

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }

    return (
        <>
            <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardMedia
                    component="img"
                    alt="Koenigsegg Jesko"
                    image="/Koenigsegg Jesko.jpeg"
                    sx={{
                        width: "20%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: 2
                    }}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        columnGap: 85,
                        ml: 3
                    }}
                >
                    <Stack spacing={2}>
                        <Typography variant="h5">
                            Jesko
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            border: "2px solid #f1c40f",
                            borderRadius: 5,
                            px: 1,
                            width: "fit-content"
                        }}
                        >
                            <IconButton
                                size="small"
                                onClick={handleDecrement}
                                disabled={quantity === 1}
                            >
                                <RemoveIcon/>
                            </IconButton>
                            <Typography
                                sx={{
                                    mx: 2,
                                    minWidth: 20,
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                {quantity}
                            </Typography>
                            <IconButton size="small" onClick={handleIncrement}>
                                <AddIcon/>
                            </IconButton>
                        </Box>
                    </Stack>
                    <Typography variant="h5" fontWeight="bold">
                        500
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}