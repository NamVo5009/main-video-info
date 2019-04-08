import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  grid-template-rows: 0.75fr 0.45fr;
  background: rgba(76, 76, 76, 0.5);
  font-family: Alternate Gothic No1 D;
  clear: both;
`;

const MovieTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 3.5em;
  margin: 0;
  padding-bottom: 0.5vh;
`;
const Nav = styled.ul`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 0;
  list-style: none;
  margin: 0.75vh 0 0 0;
  color: white;
  :hover {
    color: #ccc;
    transition: all .2s ease-in-out;
  }
`;

const NavItem = styled.li`
  float: left;
  margin-right: 3.5vw;
  font-size: 1.1em;
  font-family: ProximaNovaW01-Bold, Helvetica;
  text-transform: uppercase;
  :hover {
    color: white;
    transition: all .2s ease-in-out;
  }
`;

const HeartIcon = styled.h1`
  font-family: Proxima Nova;
  font-size: 0.75em;
  margin: 0;
  padding-bottom: 0.5vh;
  color: white;
  display: inline-block;
`;

const ArrowIcon = styled.span`
  color: #f15500;
`;


const MovieNavbar = (props) => {

  return (
    <NavWrapper>
      <MovieTitle>{props.movie.info.name} ({props.movie.info.releaseYear})  <HeartIcon> <i class="far fa-heart"></i></HeartIcon></MovieTitle>
      <Nav>
        <NavItem>Overview</NavItem>
        <NavItem>Movie Times + Tickets</NavItem>
        <NavItem>Synopsis</NavItem>
        <NavItem>Movie Reviews</NavItem>
        <NavItem>Trailers</NavItem>
        <NavItem>More <ArrowIcon className="fas fa-caret-down"></ArrowIcon>
        </NavItem>
      </Nav>
    </NavWrapper>
  );
};

export default MovieNavbar;