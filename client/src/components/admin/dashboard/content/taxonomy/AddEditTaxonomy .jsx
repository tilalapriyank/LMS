import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Grid, Paper, Alert, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { addTaxonomy, editTaxonomy, getTaxonomy } from "../../../../../api/taxonomy";
import CloseIcon from "@mui/icons-material/Close";

const AddEditTaxonomy = () => {
  const { type, id } = useParams();
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({ name: "", description: "" });
  const [openAlert, setOpenAlert] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      fetchItem(id);
    }
  }, [id]);

  const fetchItem = async (id) => {
    try {
      const item = await getTaxonomy(type, id);
      if (item) {
        setFormData({
          name: item.name,
          description: item.description || "",
        });
      }
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formatType = (type) => {
    if (!type) return "";

    const formattedType = type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedType;
  };

  const validateForm = () => {
    const { name, description } = formData;
    const newErrors = { name: "", description: "" };
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (name.length < 3) {
      newErrors.name = "Name should be at least 3 characters long";
      isValid = false;
    }

    // Validate description
    if (!description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description } = formData;

    if (!validateForm()) {
      return; // stop form submission if validation fails
    }

    try {
      let response;
      if (isEdit) {
        response = await editTaxonomy(type, id, { name, description });
      } else {
        response = await addTaxonomy(type, { name, description });
      }

      if (response) {
        navigate("/dashboard/taxonomy");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4">{isEdit ? "Edit" : "Add"} {formatType(type)}</Typography>

        {/* Display individual error alerts for name and description */}
        {errors.name && openAlert && (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleCloseAlert}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ marginBottom: 2 }}
          >
            {errors.name}
          </Alert>
        )}

        {errors.description && openAlert && (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleCloseAlert}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {errors.description}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                {isEdit ? "Update" : "Add"} {formatType(type)}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddEditTaxonomy;
