import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PorductDetails from './ProductDetails';

export default function ProductCard({title, description, price}) {
  return (
    <Card 
      sx={{ maxWidth: 345, cursor: "pointer" }}
      onClick={() => 
        <PorductDetails title={title} description={description} price={price}/>
      }
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><ShoppingCartIcon/></Button>
        <Typography variant='h6' fontWeight='bold'>
          ₹{price}
        </Typography>
      </CardActions>
    </Card>
  );
}
