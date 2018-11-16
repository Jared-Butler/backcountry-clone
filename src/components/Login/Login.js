import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


 class Login extends React.Component {
    state = {
      loginOpen: false,
      signUpOpen: false,
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
              <DialogContentText>
               Enter your email and password to Login or create your HighCountry account.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="loginEmail"
                label="Email Address"
                type="email"
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="loginPassword"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
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
              <DialogContentText>
               Enter your email and password to Login or create your HighCountry account.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
              />
               <TextField
                autoFocus
                margin="dense"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleLoginCloseOpen} color="primary">
                Login
              </Button>
              <Button onClick={this.handleSignUpClose} color="primary">
                Sign Up
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        </div>

      );
    }
  }

export default Login;