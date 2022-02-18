import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";




export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Grid container spacing={1} >
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4"> 
                        Create a room 
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">
                                Can Guest Control Play/Pause
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="True">
                            <FormControlLabel 
                            value="true" 
                            control={<Radio color="primary"/>}
                            label="YES"
                            labelPlacement="bottom"
                            />

                            <FormControlLabel 
                            value="false" 
                            control={<Radio color="secondary"/>}
                            label="NO"
                            labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}