import React from 'react';
import './App.css';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "@material-ui/core/styles/styled";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      color: '#e1e1e1',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#38e515',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      borderColor: '#38e515',
      padding: '4px !important', // override inline-style
    },
    '&&: hover': {
      borderColor: '#38e515',
      borderWidth: 2,
    }
  },
})(TextField);


const StyledButton = styled(Button)`
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  && {
    color: #00ffff66;
    width: 100%;
    border-radius: 0;
    animation: all 2s;
    font-size: 2em;
    font-weight: 800;
    &:hover {
      color: #00bbbb; 
      background-color: #00ffff66;
    }
  }
`;


function App() {

  const classes = useStyles();

  const [category, setCategory] = React.useState('');

  const [content, setContent] = React.useState('Type here');

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    switch (category) {
      case 1:
        //goto anime cate
        break;
      case 2:
        //goto game cate
        break;
      case 3:
        // goto porn cate
        break;
      default:
        alert("Must specify category");
    }
  };

  return (
    <div className="App">
      <Container maxWidth={"lg"}>
        <h1>Torrent Search Tool</h1>

        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item sm={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                required
                onChange={handleChange}
                label="Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Anime</MenuItem>
                <MenuItem value={2}>Game</MenuItem>
                <MenuItem value={3}>Pxxn</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={8}>
            <form className={classes.root} noValidate autoComplete="off">
              <ValidationTextField
                className={classes.margin}
                required
                value={content}
                onChange={handleContentChange}
                variant="outlined"
                id="validation-outlined-input"
              />
            </form>
          </Grid>
          <Grid item sm={2}>
            <StyledButton onClick={handleClick}>
              Search
            </StyledButton>
          </Grid>
        </Grid>
      </Container>
      <button onClick={Test} >test </button>
    </div>
  );
}

const parse5 = require('parse5');

const Test = async  (props) => {
  let links = await fetch('http://localhost:4000/anime/fullmetal').then((res) => res.text());
  let parsed = parse5.parse(links);
  let tbody = parsed.childNodes[1].childNodes[2].childNodes[5].childNodes[3].childNodes[1].childNodes[3].childNodes;
  console.log(tbody);

};

export default App;
