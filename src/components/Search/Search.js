import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { defaultPage } from "../variables";
import SearchIcon from "@material-ui/icons/Search";
import Loader from "../Loader/Loader";
import List from "./List";
import useFetch from "../CustomHooks/useFetch";
import useStyles from "../Movies/style";
import Paginator from "../Paginator/Paginator";
import MovieOutlinedIcon from "@material-ui/icons/MovieOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";

const Search = () => {
    const [activeMovie, setActiveMovie] = useState(true);
    const [activeTV, setActiveTV] = useState(false);
    const [query, setQuery] = useState("");
    const [type, setType] = useState("movie");
    const [loading, setLoading] = useState(true);
    const [isLoadingPaginator, setIsLoadingPaginator] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(defaultPage);
    const [totalPages, setTotalPages] = useState(null);
    const classes = useStyles();
    const fetch = useFetch();

    const enquiry = async (e) => {
        e.preventDefault();
        setQuery(query => query.trim());
        if(query ==="") {
            alert("Please enter something");
            return;
        } else {
            setLoading(true);
            const movies = await fetch.search(defaultPage, type, query);
            if(movies.status !== "error") {
                if(movies.data.results !== undefined) {
                  setTotalPages(movies.data.total_pages);
                  setMovies(movies.data);
                  if(movies.data.total_pages >0){setIsLoadingPaginator(false);}
                  setLoading(false);
                  //setQuery("");
                } else {
                    alert("No matching entities found for the query");
                }
            } else {
                alert("There was an error while fetching data. Please refresh the page to reload data");
            }
        }
    }
    const toggleMovie = () => {
        setActiveMovie(true); setActiveTV(false); setType("movie");
    }
    const toggleTV = () => {
        setActiveMovie(false); setActiveTV(true); setType("tv");
    }
    const fetchByPages = async () => {
        if(query !=="") {
            bus([], 0);
            const fetches = await fetch.search(page, type, query);
            if(fetches.status !== "error") {
                if(fetches.data.length !==0) {
                    bus(fetches.data, 1);
                    window.scrollTo(0, 0);
                } else{
                    bus([], 2);
                }
            } else {
                alert("There was an error while fetching data. Please refresh the page to reload data");
            }
        } else{
            alert("Query is missing");
        }
    }
    
    const bus = (data, progress) => {
        if (progress ===0) {
            setLoading(true);
        } else if(progress ===1){
            if(data.results !==undefined){ 
            if(data.results.length > 0) {setMovies(data);}
            }
            setLoading(false);
        } else if(progress ===2){
            setLoading(false);
        }
    }
    return (
        <Grid container justifyContent="center" style={{marginTop: '20px'}}>
            <div style={{display: 'flex', padding: '10px 10px'}}>
                <TextField 
                    label="Search . . ."
                    variant="filled"
                    style={{flex:1}}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />

                <Button variant="contained" style={{marginLeft: '10px'}} onSubmit={(e) => e.preventDefault()} onClick={enquiry}>
                    <SearchIcon />
                </Button>
            </div>
            <div style={{display: 'flex', padding: '10px 10px'}}>
                <Button variant="contained" color={activeMovie ? "primary" : "default"} onClick={toggleMovie}>
                    <MovieOutlinedIcon /> Movies
                </Button>

                <Button variant="contained" color={activeTV ? "primary" : "default"} style={{marginLeft: '10px'}} onClick={toggleTV}>
                    <LiveTvOutlinedIcon /> TV Series
                </Button>
            </div>

            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={12}>
                { loading ? 
                    <Grid container justifyContent="center">
                        <Loader />
                    </Grid>
                    : <List movies={movies} type={type} />
                }
                </Grid>
            </Grid>
            <Grid container justifyContent="center" className={classes.paginate}>
                { !isLoadingPaginator && <Paginator count={totalPages} fetchByPages={fetchByPages} setPage={setPage}/>}
            </Grid>
        </Grid>
    )
}

export default Search;