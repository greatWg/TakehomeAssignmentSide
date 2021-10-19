import react , { useEffect, useState } from 'react';
import { StyledImage, StyledText ,StyledPrice, StyledAddress, StyledListed, StyledContainer, StyledFavorite} from './HomeProperty.styles';

import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';
export const HomeProperty = ({ home, favorited }) => {
  
    const baths = home.property.bathsFull + (home.property.bathsHalf > 0 ?home.property.bathsHalf/2 : 0);
    const bedBathSquareFit = `${home.property.bedrooms} BR | ${baths} Bath | ${home.property.area} Sq Ft`;
    const price =`$${home.listPrice}`;
    const address=  `${home.address.streetNumber} ${home.address.streetName}, ${home.address.city}, ${home.address.state}`; 
    const date= new Date(home.listDate)
    const dateUS= `${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear()}`;
    const listed = `Listed : ${dateUS}`;

    const [favorite, setFavorite]= useState(favorited);

    useEffect(()=>{
        setFavorite(favorite)
    }, [favorite])
    const handleClick = ()=>{
        setFavorite(!favorite);
    }
    return (
       <>         
            <StyledContainer> 
            <StyledImage alt= {home} src={home.photos[0]} onClick = {handleClick}></StyledImage>
            {!favorite 
                ? <StyledFavorite src={heartFill}  className="App-logo" alt="favorite icon" /> 
                : <StyledFavorite src={heartStroke}  className="App-logo" alt="favorite icon" /> }
            </StyledContainer>      
            <StyledText>{bedBathSquareFit}</StyledText>
            <StyledPrice>{price}</StyledPrice>
            <StyledAddress>{address} </StyledAddress>
            <StyledListed>{listed}</StyledListed>
        </>
    );
};