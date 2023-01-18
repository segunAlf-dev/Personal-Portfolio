import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './About.css';
import AboutImg from "../../Assets/images/segun.jpg";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#01132F',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={-1}>
        <Item>
          <img
            src={AboutImg}
            alt="Profile"
            id="Profile_img"
            width="400px"
          />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item id="About-Fontcolor">
          <h1 id="About_header">A Little About Me...</h1>
          <p id="About_text">
            I'm a budding Software Engineer, with deep interests in frontend
            engineering and cloud engineering who is currently also enrolled in
            a software engineering school at AltSchool Africa. I'm passionate
            about sharing knowledge, documentation, web engineering, cloud
            engineering, and others.
          </p>{" "}
          {/* <p id="About_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p> */}
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box className='About_Box'
     sx={{ flexGrow: 1}}>
      <Grid container spacing={3}>
        <Grid container item spacing={1}
             direction="row"
                justifyContent="center"
                    alignItems="center" 
                      marginTop={5}>
                     
          <FormRow />
        </Grid>         
      </Grid>
    </Box>
  );
}
