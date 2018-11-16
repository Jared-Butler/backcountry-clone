import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import headerLogo from "./../../images/Home/logo.svg";
import Input from '@material-ui/core/Input';
import 'typeface-roboto';
import { SvgIcon } from '@material-ui/core';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});



 class MobileDrawer extends Component{
    state = {
        mobileOpen: false,
      };

      handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
      };



render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
        <div>
            <Hidden smDown>
          <div className={classes.toolbar} />
            </Hidden>
         <h3>Menu</h3>
          <Divider />
            <List>
            <ul className="navigation2">
                    <Link id="navLink2" to='/men'><ListItem button className="nav-item">Men</ListItem></Link>

                    <Link id="navLink2" to='/women'><ListItem button className="nav-item">Women</ListItem></Link>

                    <Link id="navLink2" to='/brand'><ListItem button className="nav-item">Brands</ListItem></Link>

                    <Link id="navLink2" to='/activity'><ListItem button className="nav-item">Activity</ListItem></Link>

                    <Link id="navLink2" to='/contact-us'><ListItem button className="nav-item">Contact Us</ListItem></Link>
                </ul>
            </List>

        </div>
      );

    return(
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
              </IconButton>
              <div className="headLeft">
                    <Link to='/'><img className="headerLogo" src={headerLogo} alt ="" /></Link>
                        <Link to='/' className="headerTitle">HighCountry</Link>
                        <Input className="searchBar" placeholder="Search"  onChange={(e) => this.setState({ searchBar: e.target.value })} />
                    
              {/* The account button needs to use conditional rendering to route between the login/signup screen and the customer account view. */}
                        <Link to="/account"><IconButton><SvgIcon ><path fill="none" d="M0 0h24v24H0V0z" id="svg_1"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" id="svg_2"  fill="#ffffff" fillOpacity="1"/></SvgIcon></IconButton></Link>
                        
                        <h4 className="account">My Account</h4>
                        <Link to="/cart"><IconButton><SvgIcon ><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" id="svg_2"  fill="#ffffff" fillOpacity="1"/></SvgIcon></IconButton></Link>
                        </div>

            
     
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}

          
      
            </Drawer>
          </Hidden>
      
        </nav>
       
      </div>
    )
}
}

export default withStyles(styles)(MobileDrawer);




