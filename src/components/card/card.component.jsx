import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, Tooltip } from '@material-ui/core';
import posterNotFound from './../../assets/broken-1.png';
import {cleanText} from './../../constants/index';
import Detalle from '../detalle/detalle.component';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    minHeight: "100px",
  },
});

const CardData = ({item}) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const showModal = () => {
        setOpen(true);
    }

    return (
        <>
        <Grid item xs={ 12 } sm={ 12 }>
            <Card className={classes.root} onClick={ () => showModal()} >
                <CardActionArea>
                <Tooltip title={"Director: " + item.Director} aria-label={"Director: " + item.Director}>
                    <img  src={item.Poster && item.Poster !== "N/A" ? item.Poster : posterNotFound} alt={item.Title} />
                </Tooltip>

                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {cleanText(item.Title)}
                    </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                        {cleanText(item.Year)}
                    </Typography>

                    <Typography variant="body2" color="textPrimary" component="p">
                        {cleanText(item.Plot)}
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>               
            </Card>
            </Grid>
            <Detalle handleClose={handleClose} open={open} item={item}  />
                
        </>
    )
}

export default CardData
