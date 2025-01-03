import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Women = () => {
    return (
        <div>
            <h1>Women</h1>
            <Grid container spacing={2} justifyContent="center">
                {/* Card 1 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/1.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" variant="contained">BUY NOW</Button>
                            <FavoriteBorderIcon />
                        </CardActions>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/1.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" variant="contained">BUY NOW</Button>
                            <FavoriteBorderIcon />
                        </CardActions>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/1.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" variant="contained">BUY NOW</Button>
                            <FavoriteBorderIcon />
                        </CardActions>
                    </Card>
                </Grid>

                {/* Card 4 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/1.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" variant="contained">BUY NOW</Button>
                            <FavoriteBorderIcon />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Women;
