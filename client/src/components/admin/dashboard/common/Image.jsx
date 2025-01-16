import React from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { styled } from "@mui/system";

const InputButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));

const ImagePreview = styled("div")(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  border: `2px solid #ddd`,
  borderRadius: '8px',
  padding: theme.spacing(1),
  marginTop: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  '& button': {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: '#d32f2f',
    color: '#fff',
    borderRadius: '50%',
    padding: '5px',
    minWidth: 'unset',
    '&:hover': {
      backgroundColor: '#b71c1c',
    },
  },
}));

const Image = ({ image, onChange, onClear }) => (
  <Card
    sx={{
      maxWidth: 400,
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
    }}
  >
    <CardHeader
      title="Upload Image"
      sx={{
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: '16px',
      }}
      titleTypographyProps={{
        variant: 'h6',
        fontWeight: 'bold',
      }}
    />
    <CardContent
      sx={{
        padding: '16px',
      }}
    >
      <Box>
        <InputButton variant="contained" component="label">
          Choose Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => onChange(e.target.files[0])}
          />
        </InputButton>

        {image && (
          <ImagePreview>
            <img src={URL.createObjectURL(image)} alt="Preview" />
            <Button onClick={onClear} sx={{ padding: '6px' }}>
              X
            </Button>
          </ImagePreview>
        )}
      </Box>
    </CardContent>
  </Card>
);

export default Image;
