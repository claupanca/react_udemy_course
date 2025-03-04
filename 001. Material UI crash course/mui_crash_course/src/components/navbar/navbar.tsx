import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { navbarItems } from "./consts/navbarItems";

import { navbarStyles } from "../navbar/styles";
import { Link, NavLink, useNavigation } from "react-router-dom";

// Workaround for dinamic Icons
// import * as MuiIcon from "@mui/icons-material";

const Navbar: React.FC = () => {
  // we create the navbar buttons

  const drawerWidth = 220;

  // const navigator = useNavigation();

  return (
    <Drawer open={true} variant="permanent" sx={navbarStyles.drawer}>
      <List>
        {navbarItems.map((item) => (
          // <NavLink to={item.route}>
          <ListItemButton key={item.id} component={Link} to={item.route}>
            <ListItemIcon>
              <item.icon sx={navbarStyles.icon} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={navbarStyles.text}
            ></ListItemText>
          </ListItemButton>
          // </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
