import React from "react";
import {Box, Grid, Button, Typography } from "@mui/material";
import CurriculumSection from "./CurriculumSection";

const Curriculum = ({ curriculum, setCurriculum }) => {
  const addSection = () =>
    setCurriculum([
      ...curriculum,
      { id: Date.now(), title: "", description: "", lessons: [] },
    ]);

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Curriculum
      </Typography>
      <Grid container spacing={2}>
        {curriculum.map((section) => (
          <CurriculumSection
            key={section.id}
            section={section}
            setCurriculum={setCurriculum}
          />
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={addSection}
      >
        Add Section
      </Button>
    </Box>
  );
};

export default Curriculum;
