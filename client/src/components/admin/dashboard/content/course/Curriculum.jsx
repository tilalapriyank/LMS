import React from 'react';
import { TextField } from '@mui/material';

const Curriculum = ({ curriculum, onChange }) => (
  <TextField
    label="Curriculum"
    value={curriculum}
    onChange={(e) => onChange(e.target.value)}
    fullWidth
    multiline
    rows={4}
  />
);

export default Curriculum;
