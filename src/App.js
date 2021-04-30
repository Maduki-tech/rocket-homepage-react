import React from "react";
import Title from "./components/Title";
import {CssBaseline, makeStyles} from '@material-ui/core';
import bgImage from "./assets/pexels-pixabay-71116.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
    }
}));
export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Title/>
            {/*<Context/>*/}
            {/*<CardImages/>*/}
            {/*<ContectUs/>*/}
        </div>
    )
}