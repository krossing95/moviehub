import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import useStyles  from "./style";
import { appName } from "../variables";

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Grid container>
                    <Grid item>
                        <Typography variant="h5" className={classes.title}>
                            {appName}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className={classes.rightTitle}>
                            {appName}
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;