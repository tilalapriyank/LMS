import React from "react";
import { Grid, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

const Description = ({ Description, setDescription }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Description
        </Typography>
        <Editor
          apiKey="57ke804uzikwhfcd1xy6qjkpp90qy918so2yup5u194e825h"
          initialValue={Description}
          init={{
            height: 300,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | link image media",
          }}
          onEditorChange={setDescription}
        />
      </Grid>
    </Grid>
  );
};

export default Description;
