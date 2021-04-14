import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Buscador = ({buscarPelicula}) =>  {

    const [nombre, setNombre] = useState('');

    const getPelicula = () => {
        const name = document.querySelector('#buscador').value.toLowerCase().trim();
        console.log(name);
        if (nombre !== name){
            setNombre(name);
            buscarPelicula(name);
        }
    }


    return (
        <Grid item xs={ 12 } sm={ 6 } style={{width: '90%'}}>
            <Paper className="paper">
                <Autocomplete 
                    id="buscador"
                    freeSolo
                    options= {[]}
                    renderInput={ params => (
                        <TextField 
                            {...params}
                            label="Pelicula"
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                />
                <IconButton onClick={() => getPelicula()}>
                        <SearchIcon/>
                </IconButton>
            </Paper>
        </Grid>
    );
}

export default Buscador
