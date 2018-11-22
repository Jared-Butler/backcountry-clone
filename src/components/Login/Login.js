import React, {Component} from 'react';
import headerLogo from "./../../images/Home/logo.svg";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {connect} from 'react-redux';
import { updateUser } from './../../ducks/reducer';


 class Login extends Component {
    state = {
      user: {},
      loginOpen: false,
      signUpOpen: false,
      email: '',
      pWord: '',
      pWord2: '',
      fName: '',
      lName: '',
    };
  
    handleClickOpen = () => {
      this.setState({ loginOpen: true });
    };
  
    handleClose = () => {
      this.setState({ loginOpen: false });
    };

    handleSignUpCloseOpen = () => {
        this.setState({ loginOpen: false,
                        signUpOpen: true });
      };

      handleLoginCloseOpen = () => {
        this.setState({ loginOpen: true,
                        signUpOpen: false });
      };

    handleClickSignUpOpen = () => {
        this.setState({ signUpOpen: true });
      };

    handleSignUpClose = () => {
        this.setState({ signUpOpen: false });
      };

      updateEmail = (e) => {
        this.setState({email: e.target.value})
      };

      updatePword = (e) => {
        this.setState({pWord: e.target.value})
      };

      updatePword2 = (e) => {
        this.setState({pWord2: e.target.value})
      };

      updateFname = (e) => {
        this.setState({fName: e.target.value})
      };

      updateLname = (e) => {
        this.setState({lName: e.target.value})
      };

      signup = async () => {
        if(!this.state.email || !this.state.pWord || !this.state.pWord2 || !this.state.fName || !this.state.lName) return alert('Please fill out all fields.');
        if (this.state.pWord !== this.state.pWord2) return alert('Passwords do not match.');
        else
        {let res = await axios.post('/auth/signup',{
          firstName: this.state.fName,
          lastName: this.state.lName,
          email: this.state.email,
          password: this.state.pWord,
        });

        this.props.updateUser(res.data);

        this.handleSignUpClose()
      }}

      login = async () => {
        if(!this.state.email || !this.state.pWord) return alert("Please enter your email and password.");
        else {
          let res = await axios.post('/auth/login',{
            email: this.state.email,
          password: this.state.pWord,
          })

          this.props.updateUser(res.data);

           this.handleClose();
        }
      }

  
    render() {
      return (
        <div>

          
        <div>
          <Button onClick={this.handleClickOpen}>Login | Sign Up</Button>
          <Dialog
            open={this.state.loginOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <img className="loginLogo" src={headerLogo} alt ="" />
              <DialogContentText>
              Enter your email and password to log into your HighCountry account.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="loginEmail"
                label="Email Address"
                type="email"
                fullWidth
                onChange={(e)=> this.updateEmail(e)}
              />

              <TextField
                margin="dense"
                id="loginPassword"
                label="Password"
                type="password"
                fullWidth
                onChange={(e)=> this.updatePword(e)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.login} color="primary">
                Login
              </Button>
              <Button onClick={this.handleSignUpCloseOpen} color="primary">
                Sign Up
              </Button>
            </DialogActions>
          </Dialog>
        </div>


        <div>
          
          <Dialog
            open={this.state.signUpOpen}
            onClose={this.handleSignUpClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
            <DialogContent>
            <img className="signUpLogo" src={headerLogo} alt ="" />
              <DialogContentText>
               Enter your email and password to create your HighCountry account.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
                onChange={(e)=> this.updateFname(e)}
              />
               <TextField
                margin="dense"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
                onChange={(e)=> this.updateLname(e)}
              />
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                onChange={(e)=> this.updateEmail(e)}
              />

              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                onChange={(e)=> this.updatePword(e)}
              />
              <TextField
                margin="dense"
                id="password2"
                label="Retype Password"
                type="password"
                fullWidth
                onChange={(e)=> this.updatePword2(e)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.signup} color="primary">
                Sign Up
              </Button>
              <Button onClick={this.handleLoginCloseOpen} color="primary">
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        </div>

      );
    }
  }

const mapDispathtoProps = {
  updateUser
}

export default connect(null, mapDispathtoProps)(Login);