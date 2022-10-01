import {
  Grid,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Card,
  List,
  ListItem,
  Link,
} from "@mui/material";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import NextLink from "next/Link";
import Image from "next/Image";
//import Link from "next/Link";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHander = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const addItemHandler = async (item) => {
    const existItem = state.cart.cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry! Product is out of stock!");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const subItemHandler = async (item) => {
    const existItem = state.cart.cartItems.find((x) => x._id === item._id);
    const quantity = existItem.quantity - 1;
    if (quantity === 0) {
      dispatch({ type: "CART_REMOVE_ITEM", payload: item });
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  const checkOutHandler = () => {
    router.push("/shipping");
  };
  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is Empty.
          <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            ></Image>
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                            color: "#208080",
                          }}
                          onClick={() => addItemHandler(item)}
                        >
                          +
                        </Button>
                        <Button
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                          }}
                        >
                          {item.quantity}
                        </Button>
                        <Button
                          variant="outlined"
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            minWidth: "30px",
                            minHeight: "30px",
                            color: "#208080",
                          }}
                          onClick={() => subItemHandler(item)}
                        >
                          -
                        </Button>
                      </TableCell>

                      <TableCell align="right">${item.price}</TableCell>

                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHander(item)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items): ${" "}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={checkOutHandler}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
