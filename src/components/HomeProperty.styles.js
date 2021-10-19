
import React from 'react'
import styled from 'styled-components'


export const StyledDiv = styled.div`
    width: '70%';
    width: 1182px;
    border-radius: 1px;
`;

export const StyledContainer = styled.div`
 position:relative;`;


export const StyledImage = styled.img`
position: relative;
width: 100%;
height: 100%;
top: 10px;
left: 0px;
background: url(Image.png);
border-radius: 4px;
z-index:1
`;

export const StyledFavorite = styled.img`
    position: relative;
    z-index: 4;  
    bottom:240px; 
    left: 140px;
    width: 39.17px;
    height: 35.94px;
`;

export const StyledText= styled.p`
width: 301px;
height: 32px;
font-weight: 600;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */

display: flex;
align-items: center;
color: #2D2D2D;
`;

export const StyledPrice= styled.p`
//position: absolute;
width: 112px;
height: 24px;
font-weight: bold;
font-size: 26px;
line-height: 24px;
display: flex;
align-items: center;

color: #2D2D2D;
`;


export const StyledAddress= styled.p`
width: 100%;
height: 32px;
font-size: 13px;
line-height: 32px;
display: flex;
align-items: center;
color: #2D2D2D;
`;


export const StyledListed= styled.p`
width: 301px;
height: 32px;
font-size: 14px;
line-height: 32px;
display: flex;
align-items: center;
color: #979797;
`;
