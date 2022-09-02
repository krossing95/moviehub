import React, { useEffect, useState } from "react";
import Pagination from '@material-ui/lab/Pagination';
import useStyles from "./style";

const Paginator = ({ count, fetchByPages, setPage }) => {
    const classes = useStyles();
    const [ini, setIni] = useState(true);
    const [p, setP] = useState(0);
    const pageHandler = (val) => {
        setPage(val); setP(val);
        setIni(false);
    }

    useEffect(() => {
        if(!ini) {
            fetchByPages();
        }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [p]);

    return (
        <div className={classes.root}>
            <Pagination onChange={(e) => pageHandler(e.target.textContent)} count={count} color="primary"/>
        </div>
    );
}

export default Paginator;