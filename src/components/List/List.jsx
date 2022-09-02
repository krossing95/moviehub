import React from "react";
import ListCards from "../ListCard/ListCards";
import { Grid, Grow } from "@material-ui/core";
import useStyles from "./style";
import { noResult } from "../variables";

const List = ({ movies, bus }) => {
    const classes = useStyles();
    
    return (
        <Grow in>
            <>
                <h2 className={classes.header}>Trending Now</h2>
                <Grid container className={classes.wrapper} alignItems="stretch" spacing={3}> 
                    {   movies?.results?.length === 0 ? <img src={noResult} alt="No results found" className={classes.oopps}/>
                        :
                        movies.results.map((result,i) => (
                            <Grid item xs={12} sm={6} md={3} key={i} style={{display: 'flex'}}>
                                <ListCards className={classes.singlets} result={result} i={i}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </>
        </Grow>
    );
}

export default List;