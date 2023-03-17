import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./App.css";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { recipes } from "./recipes";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import { favRecipesList22 } from "./FavRecipesList";
import Stack from "@mui/material/Stack";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { recipes as recipes33 } from "./recipes";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FavouriteRecipes() {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [colorgg, setColorgg] = useState([favRecipesList22.map((i) => i.isFavorite)]);


  const listItems =  favRecipesList22.map((recipes) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={recipes.id + " main cards"}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={() => {
            setOpen(true);
            setSelectedId(recipes.id);
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={recipes.img}
            alt={recipes.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipes.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Behold! Click me to get recipe about mouth watering {recipes.name}
              ...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Watch Tutorial
          </Button>
          <IconButton aria-label="Delete from favorites" onClick={() => handleDeleteRecipe(recipes)} >
            <DeleteIcon color="error" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  ));


  const handleDeleteRecipe = (recipes) => {
    const index = favRecipesList22.indexOf(recipes);
    if (index > -1) {
      favRecipesList22.splice(index, 1);
      recipes33[recipes33.findIndex((i) => i === recipes)].isFavorite = false;
      setColorgg([favRecipesList22.map((i) => i.isFavorite)]);
    }
  };

  const modalValues = recipes.map((recipes) => {
    if (recipes.id === selectedId) {
      return (
        <Card
          sx={{ maxWidth: "50vw", maxHeight: "75vh", overflow: "auto" }}
          key={recipes.id + " modal cards"}
        >
          <CardMedia
            component="img"
            height="200"
            image={recipes.img}
            alt={recipes.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipes.name}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              Ingredients
            </Typography>
            <ul>
              {recipes.ingredients.map((ingredient) => (
                <li key={ingredient + " ingredients"}>{ingredient}</li>
              ))}
            </ul>
            <Typography gutterBottom variant="h8" component="div">
              Instructions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipes.instructions}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Watch Tutorial
            </Button>
          </CardActions>
        </Card>
      );
    } else {
      return null;
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "radial-gradient(circle, #5c0067 0%, #00d4ff 100%)",
        }}
      >
        <Toolbar>
          <FoodBankIcon
            sx={{ display: { xs: "none", md: "flex", fontSize: 80 }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Recipes Bank
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: { xs: "none", sm: "block" },
            }}
          >
            Recipe Finder Application
          </Typography>

        </Toolbar>
      </AppBar>
      <br />
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />

          {modalValues}
        </Sheet>
      </Modal>


      <Grid container spacing={2}>
        <Grid item xs={4} sm={3}>
          <Stack spacing={2}>
            <Item sx={{ boxShadow: 0 }}>
              <Link to={`/`}>
              <Button>
                <WidgetsIcon color="action" sx={{ marginRight: 2 }} />
                All recipes
              </Button>
              </Link>
            </Item>
            {/* <Item sx={{ boxShadow: 0 }}>
              <Button>
                <GrassIcon color="action" sx={{ marginRight: 2 }} />
                Vegetarian
              </Button>
            </Item>
            <Item sx={{ boxShadow: 0 }}>
              <Button>
                <SetMealIcon color="action" sx={{ marginRight: 2 }} />
                Meat
              </Button>
            </Item> */}
            <Item sx={{ boxShadow: 0 }}>

              <Button disabled>
                <FavoriteIcon color="action" sx={{ marginRight: 2 }} />
                Favourite
                
              </Button>

            </Item>
          </Stack>
        </Grid>
        <Grid item xs={8} sm={9}>
          <Item sx={{ boxShadow: 0 }}>
            <Grid container spacing={2}>
            {listItems}

            </Grid>
          </Item>
        </Grid>
      </Grid>



      <Divider sx={{ my: 3 }} />

      <Grid container spacing={2}>
        <Grid item sm={6} md={8} lg={8}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              About
            </Typography>
            <Typography variant="body2" gutterBottom>
              This is a demo app. It is a simple recipe app that allows users to
              search for recipes and view them.
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Item>
            &copy; 2023 Recipe app by
            <strong> Kamran Saif</strong>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                aria-label="delete"
                size="large"
                target="_blank"
                href="https://github.com/kamrangondal"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                target="_blank"
                href="https://www.linkedin.com/in/kamran-saif/"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Item>
        </Grid>
      </Grid>

      
    </Box>
  );
}
