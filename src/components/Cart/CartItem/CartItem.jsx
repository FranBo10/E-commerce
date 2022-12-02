import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardMedia
          image={item.image.url}
          alt={item.name}
          title={item.name}
          className={classes.media}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5">
              {item.name}
            </Typography>
            <Typography gutterBottom variant="h6">
              {item.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="large"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography size="large">{item.quantity}</Typography>
            <Button
              type="button"
              size="large"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            color="secondary"
            type="button"
            size="large"
            onClick={() => onRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
