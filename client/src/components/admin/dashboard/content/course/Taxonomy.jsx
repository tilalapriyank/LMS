import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Stack,
  Chip,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { categoryList, tagList } from "../../../../../api/taxonomy";

const Taxonomy = ({ taxonomy, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(
    taxonomy.categories || []
  );
  const [selectedTags, setSelectedTags] = useState(taxonomy.tags || []);
  const [openModal, setOpenModal] = useState(null);
  const [tempSelected, setTempSelected] = useState([]);

  useEffect(() => {
    const fetchTaxonomyData = async () => {
      try {
        const fetchedCategories = await categoryList();
        const fetchedTags = await tagList();
        setCategories(fetchedCategories);
        setTags(fetchedTags);
      } catch (error) {
        console.error("Error fetching taxonomy data", error);
      }
    };
    fetchTaxonomyData();
  }, []);

  const handleOpenModal = (type) => {
    setOpenModal(type);
    const selected = type === "category" ? selectedCategories : selectedTags;
    setTempSelected(selected);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
    setTempSelected([]);
  };

  const handleToggleSelection = (item) => {
    if (tempSelected.includes(item)) {
      setTempSelected(
        tempSelected.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setTempSelected([...tempSelected, item]);
    }
  };

  const handleAddSelection = () => {
    if (openModal === "category") {
      setSelectedCategories(tempSelected);
      const categoryIds = tempSelected.map((category) => category.id);
      const tagIds = selectedTags.map((tag) => tag.id);
      onChange({ categories: categoryIds, tags: tagIds });
    } else {
      setSelectedTags(tempSelected);
      const categoryIds = selectedCategories.map((category) => category.id);
      const tagIds = tempSelected.map((tag) => tag.id);
      onChange({ categories: categoryIds, tags: tagIds });
    }
    handleCloseModal();
  };

  const renderModalContent = (type) => {
    const data = type === "category" ? categories : tags;

    return (
      <List>
        {data.length > 0 ? (
          data.map((item) => (
            <ListItem
              key={item.id || item.name} 
              button
              onClick={() => handleToggleSelection(item)}
            >
              <Checkbox checked={tempSelected.includes(item)} />
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No items available.
          </Typography>
        )}
      </List>
    );
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      style={{ marginTop: "30px" }}
    >
      <CardHeader
        title="Taxonomy"
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: "16px",
        }}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
      />
      <CardContent>
        <Stack direction="row" spacing={2} marginBottom={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleOpenModal("category")}
          >
            Add Category
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleOpenModal("tag")}
          >
            Add Tag
          </Button>
        </Stack>

        <Box marginBottom={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Categories
          </Typography>
          {selectedCategories.length > 0 ? (
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {selectedCategories.map((category) => (
                <Chip
                  key={category.id || category.name}
                  label={category.name}
                  onDelete={() =>
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== category)
                    )
                  }
                  sx={{
                    marginBottom: "8px !important",
                  }}
                />
              ))}
            </Stack>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No categories selected.
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            Tags
          </Typography>
          {selectedTags.length > 0 ? (
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {selectedTags.map((tag) => (
                <Chip
                  key={tag.id || tag.name}
                  label={tag.name}
                  onDelete={() =>
                    setSelectedTags(selectedTags.filter((t) => t !== tag))
                  }
                  sx={{
                    marginBottom: "8px !important",
                  }}
                />
              ))}
            </Stack>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No tags selected.
            </Typography>
          )}
        </Box>
      </CardContent>

      <Modal
        open={Boolean(openModal)}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: 24,
              width: "80%",
              maxWidth: 600,
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              {openModal === "category" ? "Select Categories" : "Select Tags"}
              <IconButton
                onClick={handleCloseModal}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
            <Box
              id="modal-description"
              sx={{
                marginTop: 2,
                maxHeight: "60vh",
                overflowY: "auto",
              }}
            >
              {renderModalContent(openModal)}
            </Box>
            <Box sx={{ marginTop: 2, textAlign: "left" }}>
              <Button
                onClick={handleAddSelection}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
};

export default Taxonomy;
