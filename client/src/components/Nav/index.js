import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Jumbo } from "../jumbotron";
import { Link } from "react-router-dom";
import PatternIcon from "@mui/icons-material/Pattern";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Marque } from "../Marque/index";

export default function Nav() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color="transparent"
          sx={{ backgroundColor: "black", opacity: ".94" }}
          position="static"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ color: "white", flexGrow: 1, fontFamily: "Montserrat" }}
            >
              Cosmos Currency
            </Typography>
            <Link to="/login" underline="none">
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "14px" }}
              >
                Login <PatternIcon />
              </IconButton>
            </Link>
            <Link to="/Signup" underline="none">
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "14px" }}
              >
                Sign Up <PersonAddAltSharpIcon />
              </IconButton>
            </Link>
            {/* {Auth.loggedIn() ? ( */}
            <Link to="/Checkout" underline="none">
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2, fontSize: "14px" }}
              >
                <ShoppingCartSharpIcon />
              </IconButton>
            </Link>

            {/* ) : ( */}
            <div></div>
            {/* )} */}
          </Toolbar>
        </AppBar>
        <Marque />
      </Box>
      <>
        <Jumbo />
      </>
    </>
  );
}
