import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import './App.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GrassIcon from '@mui/icons-material/Grass';
import SetMealIcon from '@mui/icons-material/SetMeal';
import FavoriteIcon from '@mui/icons-material/Favorite';



import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';

import Sheet from '@mui/joy/Sheet';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

  const [open, setOpen] = React.useState(false);
  
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static"
        sx={{
          background: 'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)',

        }}
      >



      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          {/* <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography> */}
          <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Behold! An authentic Chicken Biryani recipe with simple, easy-to-follow instructions (no curveballs!) and mouthwatering, traditional Pakistani and Indian flavor. This recipe includes tips on how to get fluffy rice, tender chicken, and the distinct biryani taste. Tested to perfection!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                    Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
        </Sheet>
      </Modal>


        <Toolbar>
          <FoodBankIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: 80 }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Recipes Bank
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', display: { xs: 'none', sm: 'block' } }}
          >
            Recipe Finder Application
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by dish name or by ingredient…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ fontSize: 30 }}
            />

          </Search>
        </Toolbar>
      </AppBar>
      <br />


      {/* <section style={{paddingLeft: '20px', paddingRight: '20px'}}>

        <Box>
          <Typography variant="h4" component="div" gutterBottom>
            Welcome to Recipes Bank
          </Typography>
        </Box>
      </section> */}

      <Grid container spacing={2}>
        <Grid item xs={4} sm={3}>
          <Stack spacing={2}>
            <Item sx={{ boxShadow: 0 }}><Button><WidgetsIcon color="action" sx={{ marginRight: 2 }} />All recipes</Button></Item>
            <Item sx={{ boxShadow: 0 }}><Button><GrassIcon color="action" sx={{ marginRight: 2 }} />Vegetarian</Button></Item>
            <Item sx={{ boxShadow: 0 }}><Button><SetMealIcon color="action" sx={{ marginRight: 2 }} />Meat</Button></Item>
            <Item sx={{ boxShadow: 0 }}><Button><FavoriteIcon color="action" sx={{ marginRight: 2 }} />Favourite</Button></Item>
          </Stack>
        </Grid>
        <Grid item xs={8} sm={9}>
          <Item sx={{ boxShadow: 0 }}>

            <Grid container spacing={2}>

              <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Behold! An authentic Chicken Biryani recipe...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Behold! An authentic Chicken Biryani recipe...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                    Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>


              <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Behold! An authentic Chicken Biryani recipe...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                    Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Behold! An authentic Chicken Biryani recipe...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                    Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Behold! An authentic Chicken Biryani recipe...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                    Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>

                </Card>

              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => setOpen(true)}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="/ffg.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Biryani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Behold! An authentic Chicken Biryani recipe...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Watch Tutorial
                    </Button>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>

              </Grid>

            </Grid>

          </Item>
        </Grid>
      </Grid>

    </Box>

  );
}