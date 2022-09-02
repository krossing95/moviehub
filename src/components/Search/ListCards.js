import React from "react";
import { Card, CardActions, CardActionArea, CardContent, Badge, CardMedia, Button,  Typography } from "@material-ui/core";
import useStyles from "../ListCard/style";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { imgPath, imgNotFound } from "../variables";
import useTrailer from "../CustomHooks/useTrailer";

const ListCards = ({ media_type, result:{id, poster_path, vote_average, original_title, original_name, release_date, title, first_air_date} }) => {
    const classes = useStyles();
    const open = useTrailer();
    const openInYoutube = async (type, id) => {
        return await open.openVideo(type, id);
    }
    return (
        <Card className={classes.card}>
            <CardActionArea >
                <CardMedia className={classes.photo} image={ poster_path !==null ? `${imgPath}w500${poster_path}` : imgNotFound}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{ release_date || first_air_date }</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{media_type ==="tv" ? "TV Series" : "MOVIE"}</Typography>
                </div>
                <Typography variant="h6" className={classes.title} gutterBottom>{title || original_title || original_name}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="large" onClick={() => openInYoutube(media_type, id)} color="secondary"><YouTubeIcon /> <span id={`vid-${id}`}>Trailer</span></Button>
                <Badge className={classes.badge} badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
            </CardActions>
        </Card>
    );
}

export default ListCards;