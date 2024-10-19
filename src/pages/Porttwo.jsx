import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
const github = <FontAwesomeIcon icon={faSquareGithub} />

import dadDinner from '../assets/images/dad-dinner.png'
import greentrail from '../assets/images/greentrail.png'
import craftCorner from '../assets/images/Craft-Corner.png'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Global, css } from '@emotion/react';

const globalStyles = css`
  .gowun-batang-regular {
    font-family: 'Gowun Batang', serif;
  }
`;

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

   

export default function ProjectCards() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

   

    return (
        <div>
           
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={3}
                sx={{ padding: 3 }}
            >
                <Box sx={{ flex: 1 }}>

                    <Card sx={{
                        maxWidth: 345,
                        backgroundColor: '#725D68',
                        color: '#A8B4A5',
                        fontFamily: '"Handjet", sans-serif'
                    }} className="card">
                        <CardHeader title="Greentrail" sx={{  '.MuiCardHeader-title': {fontFamily: "Gowun Batang, serif"}}}/>
                        <CardMedia component="img"
                            height="194"
                            image={greentrail}
                            alt="image of Greentrail homepage" />
                        <CardContent>
                            <Typography variant="body2" sx={{ fontFamily: 'Gowun Batang, serif' }}>Handlebars, REACT, SQL, CSS, Bootstrap, Javascript</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton
      component="a"
      href="https://github.com/Crestone-Tech/greentrail-original"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      sx={{ color: '#000' }}
    >
      <GitHubIcon fontSize="large" />
    </IconButton>
   
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Gowun Batang, serif' }}>
                                    Travel Greentrail! Greentrail is an ethical travel website, highlighting the local businesses over big business. Local communities are highlighted, and their community pages feature everything from accomidations, local food spots,to natural wonders and more. This project veered from the traditional HTML, using Handlebars for the display componenets. The data models featured a hierarchical interconnected SQL data structure, that was rewarding to work with, especially when it came time to write the necessary GET requests. An article I wrote on Medium talks about this specific topic, <a href={'https://medium.com/@stanzianiviolet/model-interconnectivity-912e55605bff'} className="article-a">here.</a>  Greentrial is currently preparing for it's v2 launch, featuring REACT.
                                </Typography>
                            </CardContent>
                        </Collapse>

                    </Card>
                </Box>
                <Box sx={{ flex: 1 }}>

                    <Card sx={{
                        maxWidth: 345,
                        backgroundColor: '#725D68',
                        color: '#A8B4A5'
                    }} className="card">
                        <CardHeader title="Craft Corner" sx={{  '.MuiCardHeader-title': {fontFamily: "Gowun Batang, serif"}}}/>
                        <CardMedia component="img"
                            height="194"
                            image={craftCorner}
                            alt="image of Craft Corner Homepage" />
                        <CardContent>
                            <Typography variant="body2" sx={{ fontFamily: 'Gowun Batang, serif' }}>REACT, MongoDB, GraphQL, Bootstrap, Express, CSS</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton
      component="a"
      href="https://github.com/kaitlynmooney/craft-corner"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      sx={{ color: '#000' }}
    >
      <GitHubIcon fontSize="large" />
    </IconButton>
    <IconButton
      component="a"
      href="https://craft-corner.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Deployment"
      sx={{ color: '#000' }}
    >
      <OpenInBrowserIcon fontSize="large" />
    </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Gowun Batang, serif' }}>
                                    Craft Corner is a crafting website made for crafters of any level. Take a survey when you sign up based on interests and price-point to have a few recommended crafts in your dashboard. Naviagte the site by crafting category and heart whatever you might want to work on later, adding it to your dashboard! This site featured dynamic REACT components and a graphQL backend.
                                </Typography>
                            </CardContent>
                        </Collapse>

                    </Card>
                </Box>
                <Box sx={{ flex: 1 }}>


                    <Card sx={{
                        maxWidth: 345,
                        backgroundColor: '#725D68',
                        color: '#A8B4A5',
                        fontFamily: 'Gowun Batang, serif'
                    }} className="card">
                        <CardHeader title="Dad's Dinner" sx={{  '.MuiCardHeader-title': {fontFamily: "Gowun Batang, serif"}}}/>
                        <CardMedia component="img"
                            height="194"
                            image={dadDinner}
                            alt="image of Dad Dinner homepage" />
                        <CardContent>
                            <Typography variant="body2" sx={{ fontFamily: 'Gowun Batang, serif' }}>HTML, Javascript, JQuery, CSS</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton
      component="a"
      href="https://github.com/adammathis05/dad-dinner"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      sx={{ color: '#000' }}
    >
      <GitHubIcon fontSize="large" />
    </IconButton>
    <IconButton
      component="a"
      href="https://adammathis05.github.io/dad-dinner/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Deployment"
      sx={{ color: '#000' }}
    >
      <OpenInBrowserIcon fontSize="large" />
    </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Gowun Batang, serif' }}>
                                    Dad's Dinner is a website for the busy parent in your life, they have a million things to do and figuring out what to have for dinner shouldn't be one of them. Search for a specific main ingreidient or randomzie for some fun. Working on this project put JavaScript skills to test, fetching from various API's, manipulating JSON and building responsive results pages.
                                </Typography>
                            </CardContent>
                        </Collapse>

                    </Card>
                </Box>
            </Stack>
            
        </div>

    )
}