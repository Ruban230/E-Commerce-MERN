import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        style={{  marginBottom: "1rem" ,fontFamily:`serif` }}
      >
        Welcome to the Men's Section
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ marginBottom: "2rem", color: "gray",fontFamily:`sans-serif` }}
      >
        Explore our exclusive men's collection and find the perfect fit for your needs. 
        Enjoy high-quality products at unbeatable prices!
      </Typography>

      {/* Responsive Grid for Cards */}
      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to={'/men-stylish-jackets'}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="https://fittedshop.com/cdn/shop/files/2_584130fa-0ea1-4b2b-863d-b0a88059ad6c.jpg?v=1726650455&width=540"
              alt="Stylish Jackets"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Stylish Jackets
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Stay warm and look sharp with our premium jacket collection.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginTop: "1rem" }}
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>
          </Link>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to={'/men-casual-shoes'}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="https://fittedshop.com/cdn/shop/files/2_584130fa-0ea1-4b2b-863d-b0a88059ad6c.jpg?v=1726650455&width=540"
              alt="Casual Shoes"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Casual Shoes
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Discover comfortable and stylish shoes for every occasion.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginTop: "1rem" }}
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>
          </Link>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to={'/men-shirts'}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="https://fittedshop.com/cdn/shop/files/2_584130fa-0ea1-4b2b-863d-b0a88059ad6c.jpg?v=1726650455&width=540"
              alt="shirts"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Shirts
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Complete your look with our range of trendy Shirts.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginTop: "1rem" }}
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Men;
