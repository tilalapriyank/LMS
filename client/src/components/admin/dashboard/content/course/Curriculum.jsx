import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { fetchItems } from "../../../../../api/fetchitem.js";
import CloseIcon from "@mui/icons-material/Close";

const Curriculum = ({ curriculum, setCurriculum }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [dialogType, setDialogType] = useState(""); // "lesson" or "quiz"
  const [lessons, setLessons] = useState([]); // Store lessons
  const [quizzes, setQuizzes] = useState([]); // Store quizzes
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items
  const [loading, setLoading] = useState(false);

  const handleAddSection = () => {
    setCurriculum([
      ...curriculum,
      { id: curriculum.length + 1, title: "", description: "" },
    ]);
  };

  const handleRemoveSection = (id) => {
    setCurriculum(curriculum.filter((section) => section.id !== id));
  };

  const handleOpenDialog = (type, sectionId) => {
    setDialogType(type);
    setCurrentSectionId(sectionId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentSectionId(null);
    setDialogType("");
    setLessons([]);
    setQuizzes([]);
    setSelectedItems([]); // Reset selected items when closing the dialog
  };

  const handleToggleItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleSaveSelection = () => {
    console.log("Selected items:", selectedItems);
    handleCloseDialog();
  };

  useEffect(() => {
    if (openDialog) {
      setLoading(true);
      const fetchData = async () => {
        const data = await fetchItems(dialogType);
        if (dialogType === "lessons") {
          setLessons(data);
        } else if (dialogType === "quiz") {
          setQuizzes(data);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [openDialog, dialogType]);

  const handleChangeSectionTitle = (e, index) => {
    const updatedSections = [...curriculum];
    updatedSections[index].title = e.target.value;
    setCurriculum(updatedSections);
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddSection}
        sx={{ marginBottom: 2 }}
      >
        Add Section
      </Button>

      <Card>
        <CardHeader title="Curriculum" />
        <CardContent>
          {curriculum.map((section, index) => (
            <Box key={section.id} sx={{ marginBottom: 2 }}>
              <Typography variant="h6">Section {section.id}</Typography>

              {/* Section Title Input */}
              <TextField
                label="Section Title"
                fullWidth
                value={section.title}
                onChange={(e) => handleChangeSectionTitle(e, index)}
                sx={{ marginBottom: 2 }}
              />

              {/* Section Description */}
              <TextField
                label="Section Description"
                fullWidth
                multiline
                rows={3}
                value={section.description}
                onChange={(e) => {
                  const updatedSections = [...curriculum];
                  updatedSections[index].description = e.target.value;
                  setCurriculum(updatedSections);
                }}
                sx={{ marginBottom: 2 }}
              />

              {/* Action Buttons */}
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginRight: 1 }}
                onClick={() => handleOpenDialog("lessons", section.id)}
              >
                Add Lesson
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginRight: 1 }}
                onClick={() => handleOpenDialog("quiz", section.id)}
              >
                Add Quiz
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveSection(section.id)}
              >
                Remove Section
              </Button>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Dialog (Popup) */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxWidth: 600,
            margin: "auto",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            {dialogType === "lessons" ? "Add Lesson" : "Add Quiz"}
          </Typography>
          <IconButton onClick={handleCloseDialog} color="primary">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            maxHeight: 400,
            overflowY: "auto",
            padding: 1,
          }}
        >
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", padding: 1 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              <List sx={{ padding: 0 }}>
                {(dialogType === "lessons" ? lessons : quizzes).map((item) => (
                  <ListItem key={item.id} sx={{ padding: 0 }}>
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleToggleItem(item.id)}
                    />
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={handleSaveSelection}
            color="primary"
            disabled={selectedItems.length === 0}
          >
            Save
          </Button>
          <Typography variant="body2">
            {selectedItems.length} item(s) selected
          </Typography>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Curriculum;
