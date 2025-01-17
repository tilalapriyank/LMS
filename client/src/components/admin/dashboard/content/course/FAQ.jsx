import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const FAQ = ({ faqItems, onAdd, onRemove }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAdd = () => {
    if (question.trim() && answer.trim()) {
      onAdd({ question: question.trim(), answer: answer.trim() });
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <Card sx={{ bgcolor: "#ffffff", borderRadius: 2, boxShadow: 3, mb: 3 }}>
      <CardHeader
        title="FAQ"
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
        style={{
          backgroundColor: "#1976d2",
          borderBottom: "1px solid #ddd",
          padding: "16px",
          color: "#fff",
        }}
      />
      <CardContent>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter FAQ question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <TextField
            fullWidth
            size="small"
            placeholder="Enter FAQ answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Box>

        <List dense>
          {faqItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                bgcolor: "#f5f5f5",
                mb: 1,
                borderRadius: 1,
                padding: "8px 16px",
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onRemove(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={<strong>{item.question}</strong>}
                secondary={item.answer}
              />
            </ListItem>
          ))}
        </List>

        <Divider />
      </CardContent>
    </Card>
  );
};

export default FAQ;
