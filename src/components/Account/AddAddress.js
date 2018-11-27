import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {states} from './states';
import axios from 'axios';
import {connect} from 'react-redux';
import { updateUser } from './../../ducks/reducer';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },

  button: {
    margin: theme.spacing.unit,
  }
});


class AddressInput extends React.Component {
  state = {
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateAddress = async () => {
    if(!this.state.address1 || !this.state.city || !this.state.state || !this.state.zip ) return alert('Please fill out all fields.');

    else{
        let res = await axios.post('/cust/add-address',{
            email: this.props.user.email,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
        });

        this.props.updateUser(res.data);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField
          id="outlined-email-input"
          label="Address"
          className={classes.textField}
          type="text"
          name="email"
          autoComplete="shipping street-address"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange('address1')}
          fullWidth
        />
       <TextField
          id="outlined-email-input"
          label="Address"
          className={classes.textField}
          type="text"
          name="email"
          autoComplete="address-line2"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange('address2')}
          fullWidth
        />

         <TextField
          id="outlined-email-input"
          label="City"
          className={classes.textField}
          type="text"
          name="email"
          autoComplete="shipping address-level2"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange('city')}
          fullWidth
        />

         <TextField
          id="outlined-select-currency-native"
          select
          label="State"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('state')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your state"
          margin="normal"
          variant="outlined"
        >
          {states.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

         <TextField
          id="outlined-email-input"
          label="Zip"
          className={classes.textField}
          type="text"
          name="email"
          autoComplete="shipping postal-code"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange('zip')}
          fullWidth
        />        

        <Button variant="contained" color="primary" className={classes.button} onClick={this.updateAddress}>
        Save Address
      </Button>
      </form>
    );
  }
}

AddressInput.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispathtoProps = {
    updateUser
}
// This is how to pull data from redux off of state.
const mapStatetoProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps, mapDispathtoProps)(withStyles(styles)(AddressInput));