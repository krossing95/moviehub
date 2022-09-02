import React, { useEffect, useState } from "react";
import Trending from "./Trending/Trending";
import Movies from "./Movies/Movies";
import TVSeries from "./TvSeries/TVSeries";
import Search from "./Search/Search";
import Header from "./Header/Header";
import { Grid, BottomNavigation, BottomNavigationAction, CssBaseline } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import MovieOutlinedIcon from "@material-ui/icons/MovieOutlined";
import useStyles from "./List/style";
import { useHistory } from "react-router-dom";

const Layer = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [ini, setIni] = useState(true);
    const history = useHistory();
    const array = [
        { value: 0, path: "/" },{ value: 1, path: "/tv-series" },{ value: 2, path: "/movies" },{ value: 3, path: "/search" }
    ];

    const selectHandler = (event, newVal) => {
        setValue(newVal);
        setIni(false);
    }

    useEffect(() => {
        if(ini) {
            if(value ===0 && props.location.pathname !=="/") {
                history.push(props.location.pathname);
                array.map((item) => {
                    if(item.path === props.location.pathname) {
                        setValue(item.value);
                    }
                    return null;
                });
            }
        }
        if(value ===0) {history.push('/');}
        else if(value ===1){ history.push('/tv-series');}
        else if(value ===2){ history.push('/movies');}
        else if(value ===3){ history.push('/search');}

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, value, ini]);
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container justifyContent="center">
                {props.location.pathname ==='/' && <Trending />}
                {props.location.pathname ==='/movies' && <Movies />}
                {props.location.pathname ==='/tv-series' && <TVSeries />}
                {props.location.pathname ==='/search' && <Search />}
            </Grid>
            <BottomNavigation
                showLabels className={classes.fixedBottom}
                value={value} onChange={selectHandler}
            >
                <BottomNavigationAction label="Hot" className={classes.fixedBottomItem} icon={<WhatshotIcon />}/>
                <BottomNavigationAction label="Series" className={classes.fixedBottomItem} icon={<LiveTvOutlinedIcon />}/>
                <BottomNavigationAction label="Movies" className={classes.fixedBottomItem} icon={<MovieOutlinedIcon />}/>
                <BottomNavigationAction label="Search" className={classes.fixedBottomItem} icon={<SearchIcon />}/>
            </BottomNavigation>
        </>
    );
}

export default Layer;