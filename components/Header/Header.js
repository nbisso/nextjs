import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "../ui/Typography";
import { useStyles, IconButton } from "./styled";

const Header = () => {
  const classes = useStyles();
  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Cocinando
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link href="/account-settings/basic">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
