import React from 'react';
import {AppBar, Button, Container, makeStyles, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    appbar: {
        background: "none",
        marginTop: '8rem',

    },
    toolbar: {
        justifyContent: "center",

    },
    text: {
        fontFamily: 'Zen Dots, cursive'

    },
    descText: {
        color: '#fff',
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },
    textContainer: {
        textAlign: "center",
    },
    btn: {
        marginTop: '3rem',
        fontSize: '1rem',
        fontWeight: '700',
        color: '#000',
        background: 'rgba(50,50,50,.2)',
        borderColor: '#000',
        '&:hover': {
            background: 'linear-gradient(90deg, rgba(161,1,0,0.4) 0%, rgba(179,10,1,0.4) 20%, rgba(243,60,4,0.4) 40%, rgba(254,101,13,0.4) 60%, rgba(255,193,31,0.4) 80%, rgba(255,247,93,0.4) 100%)'
        }
    },
    famousNames: {
        color: 'rgb(255,193,31)'

    }

}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.text} variant={"h3"}>SpaceD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.textContainer}>
                <Typography className={classes.descText}>
                    Our Company is the Newest Rocket Fabric in the World.<br/>
                    We work with Famous People like <span className={classes.famousNames}>Elon Musik</span> and <span className={classes.famousNames}>Jeff Bezos</span>.

                </Typography>
                <Button variant="outlined" className={classes.btn} href="#outlined-buttons">
                    Learn more
                </Button>
            </Container>
        </div>
    )
}