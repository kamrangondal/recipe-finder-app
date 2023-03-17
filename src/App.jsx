import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import "./App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { recipes } from "./recipes";
import { useState } from "react";
import RecipeCards from "./RecipeCards";
import { Link } from "react-router-dom";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


export default function SearchAppBar() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }



  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
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
          <Search onChange={handleSearchChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by dish name or by ingredient…"
              inputProps={{ "aria-label": "search" }}
              sx={{ fontSize: 30 }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <br />

      <Grid container spacing={2}>
        <Grid item xs={4} sm={3}>
          <Stack spacing={2}>
            <Item sx={{ boxShadow: 0 }}>
              <Button disabled>
                <WidgetsIcon color="action" sx={{ marginRight: 2 }} />
                All recipes
              </Button>
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
              <Link to={`favorites`}>
              <Button>
                <FavoriteIcon color="action" sx={{ marginRight: 2 }} />
                Favourite
                
              </Button>
              </Link>
            </Item>
          </Stack>
        </Grid>
        <Grid item xs={8} sm={9}>
          <Item sx={{ boxShadow: 0 }}>
            <Grid container spacing={2}>
              <RecipeCards filteredRecipes={filteredRecipes} />
              {/* <FavouriteRecipes /> */}
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

      <br></br>
    </Box>
  );
}
