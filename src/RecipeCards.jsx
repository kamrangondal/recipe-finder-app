import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./App.css";
import Grid from "@mui/material/Grid";
import { alertClasses, Button, CardActionArea, CardActions } from "@mui/material";
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
import { recipes  as recipe33 } from "./recipes";


export default function RecipeCards({ filteredRecipes }) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [colorgg, setColorgg] = useState([recipe33.map((i) => i.isFavorite)]);

    const handleFavouriteClick = (recipe) => {
      let ghq = recipe33.findIndex((i) => i === recipe);
      favRecipesList22.push(recipe33[ghq]); // add icon color change boolean here!
      recipe33[recipe33.findIndex((i) => i === recipe)].isFavorite = true;
      // setColorgg(colorgg[recipe33.findIndex((i) => i === recipe)]= true) ;
      // console.log(favRecipesList22);
       //console.log(recipe33.map((i) => i.isFavorite));
       setColorgg(recipe33.map((i) => i.isFavorite));
       //console.log(favRecipesList22);
       //setColorgg(recipe33.map((i) => i.isFavorite));
      //console.log(colorgg)
    }

    const handleFavouriteClick2 = (recipe) => {
      favRecipesList22.splice(favRecipesList22.indexOf(recipe33.findIndex((i) => i === recipe)), 1);
      recipe33[recipe33.findIndex((i) => i === recipe)].isFavorite = false;
      // setColorgg(colorgg[recipe33.findIndex((i) => i === recipe)]= false) ;
      // console.log(favRecipesList22);
       //console.log(recipe33.map((i) => i.isFavorite));
       setColorgg(recipe33.map((i) => i.isFavorite));
       //console.log(favRecipesList22);
       //setColorgg(recipe33.map((i) => i.isFavorite));
      //console.log(colorgg)
    }

    

  const listItems = filteredRecipes.map((recipes) => (
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
          <Button size="small" color="primary" onClick={() => alert("Look for yourself on youtube.")}>
            Watch Tutorial
          </Button>     
          <IconButton aria-label="add to favorites" onClick={() => {
            if (recipes.isFavorite) {
              handleFavouriteClick2(recipes)
            } else {
              handleFavouriteClick(recipes)
            }}}>
            {/* <FavoriteIcon color={colorgg[recipe33.indexOf(recipes)] ? "primary" : "action"} /> */}
            <FavoriteIcon color={recipes.isFavorite ? "primary" : "action"} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  ));

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
            <Button size="small" color="primary"  onClick={() => alert("Look for yourself on youtube.")}>
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
    <>
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

      {listItems}
    </>
  );
}
