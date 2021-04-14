import { Grid } from '@material-ui/core';
import React, {useState } from 'react'
import Buscador from '../../components/buscador/buscador.component';
import CardData from '../../components/card/card.component';
import NotFound from '../../components/notFound/notFound.component';
import { getApiUrl } from '../../constants';

const Home = () => {

    const [item, setItem] = useState({})

    const buscarPelicula = (nombre) => {
        console.log('buscar pelicula');
        nombre && fetch(getApiUrl(nombre))
        .then(data =>  data.json())
        .then(res => {
            console.log(res);
            const data =  {Year: cleanText(res.Year), Director: cleanText(res.Director), Title : res.Title, Plot : cleanText(res.Plot)
                ,Poster: res.Poster
            };
            setItem(res);
        })
        .catch(err => console.log(err));   
    }

    const cleanText = texto => !texto || texto === "N/A" ? "Sin informacion" : texto;


    return (
            <Grid container  justify="center" 
                alignItems="center"  direction="column">
                
                    <Buscador buscarPelicula = {buscarPelicula} />
                    <Grid item spacing={ 3 }  xs={12} sm={12} md={12} justify="center">
                        {item && item.Title ? 
                            <CardData item = {item} />
                        :
                            <NotFound/>
                        }

                    </Grid>               
            </Grid>
    )
    
}

export default Home

