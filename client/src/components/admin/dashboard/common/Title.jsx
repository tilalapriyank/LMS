import React from "react";
import { Grid, TextField } from "@mui/material";

const Title = ({ Title, setTitle }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title here"
        />
      </Grid>
    </Grid>
  );
};

export default Title;
