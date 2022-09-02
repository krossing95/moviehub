import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import List from "./List";
import useStyles from "./style";
import useFetch from "../CustomHooks/useFetch";
import { defaultPage } from "../variables";
import Paginator from "../Paginator/Paginator";
import Loader from "../Loader/Loader";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [isLoadingPaginator, setIsLoadingPaginator] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(defaultPage);
  const [totalPages, setTotalPages] = useState(null);
  const classes = useStyles();
  const fetch = useFetch();

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetch.discover(defaultPage);

      if(movies.status !== "error") {
        if(movies.data.results !== undefined) {
          setTotalPages(movies.data.total_pages);
          setMovies(movies.data);
          if(movies.data.results.length >0){setIsLoadingPaginator(false);}
          setLoading(false);
        }
      } else {
        alert("There was an error while fetching data. Please refresh the page to reload data");
      }
    }

    fetchMovies();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchByPages = async () => {
    bus([], 0);
    const fetches = await fetch.discover(page);
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
    <>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={12}>
          { loading ? 
            <Grid container justifyContent="center">
              <Loader />
            </Grid>
            : <List movies={movies}/>
          }
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.paginate}>
        { !isLoadingPaginator && <Paginator count={totalPages} fetchByPages={fetchByPages} setPage={setPage}/>}
      </Grid>
    </>
  );
}

export default Movies;
