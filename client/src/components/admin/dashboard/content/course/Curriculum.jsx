import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Checkbox,
  TextField,
  FormControlLabel,
  Typography,
  Box,
  IconButton,
  Divider,
  Stack,
  Backdrop,
  Fade,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import { quizList } from '../../../../../api/quiz';
import { lessonList } from '../../../../../api/lesson';

const Curriculum = () => {
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(null);
  const [isLessonModalOpen, setLessonModalOpen] = useState(false);
  const [isQuizModalOpen, setQuizModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedLessons = await lessonList();
        const fetchedQuizzes = await quizList();
        setLessons(fetchedLessons || []);
        setQuizzes(fetchedQuizzes || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddSection = () => {
    setSections([...sections, { title: '', description: '', items: [] }]);
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
  };

  const handleAddSelectedItems = (type) => {
    const updatedSections = sections.map((section, i) =>
      i === currentSectionIndex
        ? {
            ...section,
            items: [
              ...section.items,
              ...selectedItems.map((title) => ({ type, title })),
            ],
          }
        : section
    );
    setSections(updatedSections);
    closeAllModals();
  };

  const handleDeleteItem = (sectionIndex, itemIndex) => {
    const updatedSections = sections.map((section, i) =>
      i === sectionIndex
        ? {
            ...section,
            items: section.items.filter((_, idx) => idx !== itemIndex),
          }
        : section
    );
    setSections(updatedSections);
  };

  const openModal = (index, modalType) => {
    setCurrentSectionIndex(index);
    setSelectedItems([]);
    if (modalType === 'lesson') setLessonModalOpen(true);
    if (modalType === 'quiz') setQuizModalOpen(true);
  };

  const closeAllModals = () => {
    setLessonModalOpen(false);
    setQuizModalOpen(false);
    setCurrentSectionIndex(null);
    setSelectedItems([]);
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const renderModalContent = (type, items) => (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 2,
        }}
      >
        <Typography variant="h6">
          {type === 'lesson' ? 'Select Lessons' : 'Select Quizzes'}
        </Typography>
        <IconButton onClick={closeAllModals}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ padding: 2, maxHeight: '50vh', overflowY: 'auto' }}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                checked={selectedItems.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
              />
            }
            label={item.name}
          />
        ))}
      </Box>
      <Divider />
      <Box sx={{ paddingTop: 2 }}>
        <Button
          onClick={() => handleAddSelectedItems(type)}
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Selected {type === 'lesson' ? 'Lessons' : 'Quizzes'}
        </Button>
      </Box>
    </>
  );

  return (
    <Card sx={{ bgcolor: '#ffffff', borderRadius: 2, boxShadow: 3, mb: 3 }}>
      <CardHeader
        title="Curriculum"
        titleTypographyProps={{
          variant: 'h6',
          fontWeight: 'bold',
        }}
        sx={{
          backgroundColor: '#1976d2',
          color: '#fff',
          borderBottom: '1px solid #ddd',
        }}
      />
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddSection}
          sx={{ marginBottom: 2 }}
        >
          Add Section
        </Button>
        {sections.map((section, index) => (
          <Accordion
            key={index}
            sx={{
              marginBottom: 2,
              border: '1px solid #e0e0e0',
              boxShadow: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <TextField
                label="Section Title"
                variant="outlined"
                size="small"
                value={section.title}
                onChange={(e) =>
                  handleSectionChange(index, 'title', e.target.value)
                }
                sx={{ width: '75%' }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Description"
                variant="outlined"
                value={section.description}
                onChange={(e) =>
                  handleSectionChange(index, 'description', e.target.value)
                }
                multiline
                rows={3}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => openModal(index, 'lesson')}
                >
                  Add Lesson
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => openModal(index, 'quiz')}
                >
                  Add Quiz
                </Button>
              </Stack>
              <Divider />
              <Box sx={{ marginTop: 2 }}>
                {section.items.map((item, itemIndex) => (
                  <Stack
                    key={itemIndex}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      marginBottom: 1,
                      padding: 1,
                      border: '1px solid #f0f0f0',
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="body2">
                      {item.type.toUpperCase()}: {item.title || 'Untitled'}
                    </Typography>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDeleteItem(index, itemIndex)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Stack>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>

      {/* Lesson Modal */}
      <Modal
        open={isLessonModalOpen}
        onClose={closeAllModals}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isLessonModalOpen}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              margin: 'auto',
              marginTop: '10%',
              maxWidth: 500,
            }}
          >
            {renderModalContent('lesson', lessons)}
          </Box>
        </Fade>
      </Modal>

      {/* Quiz Modal */}
      <Modal
        open={isQuizModalOpen}
        onClose={closeAllModals}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isQuizModalOpen}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 3,
              padding: 3,
              margin: 'auto',
              marginTop: '10%',
              maxWidth: 500,
            }}
          >
            {renderModalContent('quiz', quizzes)}
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
};

export default Curriculum;
