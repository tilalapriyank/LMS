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
import { questionCategoryList } from "../../../../../api/taxonomy";

const QuestionCategory = ({ questioncategory, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(
    questioncategory.categories || []
  );
  const [openModal, setOpenModal] = useState(null);
  const [tempSelected, setTempSelected] = useState([]);
  useEffect(() => {
    const fetchTaxonomyData = async () => {
      try {
        const fetchedCategories = await questionCategoryList();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching taxonomy data", error);
      }
    };
    fetchTaxonomyData();
  }, []);

  const handleOpenModal = () => {
    setOpenModal("category");
    setTempSelected(selectedCategories);
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
    setSelectedCategories(tempSelected);
    const categoryIds = tempSelected.map((category) => category.id);
    onChange({ categories: categoryIds });
    handleCloseModal();
  };

  const renderModalContent = () => {
    return (
      <List>
        {categories.length > 0 ? (
          categories.map((item) => (
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
    >
      <CardHeader
        title="Question Category"
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
          <Button variant="outlined" color="primary" onClick={handleOpenModal}>
            Add Question Category
          </Button>
        </Stack>

        <Box marginBottom={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Question Categories
          </Typography>
          {selectedCategories.length > 0 ? (
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {selectedCategories.map((categoryId) => {
                const category = categories.find(
                  (cat) => cat.id === categoryId
                );
                return (
                  <Chip
                    key={categoryId}
                    label={category?.name || "Unknown"}
                    onDelete={() =>
                      setSelectedCategories(
                        selectedCategories.filter((id) => id !== categoryId)
                      )
                    }
                    sx={{
                      marginBottom: "8px !important",
                    }}
                  />
                );
              })}
            </Stack>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No question categories selected.
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
              Select Question Categories
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
              {renderModalContent()}
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

export default QuestionCategory;
