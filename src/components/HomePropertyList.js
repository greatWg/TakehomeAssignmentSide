import React, { useEffect, useState } from 'react';
import { HomeProperty } from "./HomeProperty";
import { Grid } from '@mui/material'
import base64 from 'react-native-base64'

import { experimentalStyled as styled } from '@mui/material/styles';
import { StyledDiv } from './HomeProperty.styles'

import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    fontFamily: 'Open Sans',
  }));
  
export const HomeProperties = () => {

    const username= 'simplyrets';
    const pw= 'simplyrets'   
    const [homes, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite ]= useState(true);
    useEffect(() => {
        const apiUrl = `https://api.simplyrets.com/properties`;
        fetch(apiUrl, {method:'GET', headers: {'Authorization': 'Basic ' + base64.encode(username + ":" + pw)}})
          .then((res) => res.json())
          .then((homes) => {
            setData(homes);
            setLoading(false);
            setFavorite(false);
          });
      }, []);

    return(
        <StyledDiv>
            <div> {loading && <p> Loadding ....</p>}</div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {homes.map((home, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                     <Item ><HomeProperty key= {index} home={home} favorited= {favorite}/></Item>
                </Grid>
                ))}
            </Grid>
        </StyledDiv>
  
    ) ;
}

