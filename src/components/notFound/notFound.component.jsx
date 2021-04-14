import { Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Grid item xs={12} sm={12} style={{marginTop: '15px'}}>
        <Alert severity="warning">No existe resultado</Alert>
      </Grid>
    </div>
  );
};

export default NotFound;
