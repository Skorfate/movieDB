import React from "react";
import Modal from "@material-ui/core/Modal";
import { cleanText } from "../../constants";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      aarticlegnItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: '2px soarticled #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  }));

const Detalle = ({ open, handleClose, item }) => {


    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
    <Dialog open={open} 
        fullScreen={fullScreen}
        onClose={handleClose}        
        className={classes.modal}        
        >
      <>
      
      <DialogTitle id="responsive-dialog-title">{item.Title}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="textPrimary" component="p">
          Actors: {cleanText(item.Actors)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Awards: {cleanText(item.Awards)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          BoxOffice: {cleanText(item.BoxOffice)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Country: {cleanText(item.Country)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          DVD: {cleanText(item.DVD)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Director: {cleanText(item.Director)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Genre: {cleanText(item.Genre)}
        </Typography>
        <Divider variant="inset" component="article" />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>          
        </DialogActions>
      </>
    </Dialog>
  );
};

export default Detalle;
