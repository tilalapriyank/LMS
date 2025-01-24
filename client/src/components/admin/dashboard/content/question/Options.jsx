import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Radio,
  Button,
  FormControlLabel,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

const Options = ({ options: initialOptions, onChange }) => {
  const [type, setType] = useState(initialOptions.options.type);
  const [options, setOptions] = useState(initialOptions.options.options || []);
  const [shortAnswer, setShortAnswer] = useState("");

  // Notify parent on data change
  useEffect(() => {
    if (onChange) {
      if (type === "short-answer") {
        onChange({ type, shortAnswer });
      } else {
        onChange({ type, options });
      }
    }
  }, [type, options, shortAnswer, onChange]);

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    setOptions([{ value: "", correct: false }]); // Reset options for most types
    setShortAnswer(""); // Reset short answer field

    if (newType === "true-false") {
      setOptions([
        { value: "True", correct: false },
        { value: "False", correct: false },
      ]);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].value = value;
    setOptions(newOptions);
  };

  const handleCorrectChange = (index) => {
    const newOptions = [...options];
    if (type === "single") {
      newOptions.forEach((_, i) => (newOptions[i].correct = i === index));
    } else if (type === "multiple") {
      newOptions[index].correct = !newOptions[index].correct;
    } else if (type === "true-false") {
      newOptions.forEach((_, i) => (newOptions[i].correct = i === index));
    }
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { value: "", correct: false }]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <Box key={index} display="flex" alignItems="center" marginBottom={2}>
        <TextField
          label={`Option ${index + 1}`}
          value={option.value}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
        />
        {type === "single" && (
          <Radio
            checked={option.correct}
            onChange={() => handleCorrectChange(index)}
            color="primary"
          />
        )}
        {type === "multiple" && (
          <Checkbox
            checked={option.correct}
            onChange={() => handleCorrectChange(index)}
            color="primary"
          />
        )}
        <Button
          onClick={() => removeOption(index)}
          color="error"
          size="small"
          variant="outlined"
          style={{ marginLeft: 8 }}
        >
          Remove
        </Button>
      </Box>
    ));
  };

  return (
    <Card
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginTop: "30px",
      }}
    >
      <CardHeader
        title="Options"
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
        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value="true-false">True/False</MenuItem>
            <MenuItem value="single">Single Choice</MenuItem>
            <MenuItem value="multiple">Multiple Choice</MenuItem>
            <MenuItem value="short-answer">Short Answer</MenuItem>
          </Select>
        </FormControl>

        {type === "true-false" && (
          <Box marginTop={2}>
            <Typography variant="subtitle1">True/False</Typography>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Radio
                    checked={option.correct}
                    onChange={() => handleCorrectChange(index)}
                    color="primary"
                  />
                }
                label={option.value}
              />
            ))}
          </Box>
        )}

        {(type === "single" || type === "multiple") && (
          <Box marginTop={2}>
            <Typography variant="subtitle1">
              {type === "single" ? "Single Choice" : "Multiple Choice"}
            </Typography>
            {renderOptions()}
            <Button
              variant="contained"
              color="primary"
              onClick={addOption}
              size="small"
              style={{ marginTop: 8 }}
            >
              Add Option
            </Button>
          </Box>
        )}

        {type === "short-answer" && (
          <Box marginTop={2}>
            <Typography variant="subtitle1">Short Answer</Typography>
            <TextField
              label="Answer"
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              multiline
              rows={3}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Options;