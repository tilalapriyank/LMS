import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { courseList } from "../api/course";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    isFree: false,
  });
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = courseList();
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Apply filters to the course list
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      filters.categories.length === 0 || filters.categories.includes(course.category);
    const matchesLevel = filters.levels.length === 0 || filters.levels.includes(course.level);
    const matchesPrice = filters.isFree ? course.price === 0 : true;

    return matchesCategory && matchesLevel && matchesPrice;
  });

  // Sort courses based on selected option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "price") return a.price - b.price;
    return 0;
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => {
        const newFilter = { ...prev };
        if (name === "categories" || name === "levels") {
          if (checked) {
            newFilter[name].push(value);
          } else {
            newFilter[name] = newFilter[name].filter((item) => item !== value);
          }
        } else {
          newFilter[name] = checked;
        }
        return newFilter;
      });
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid item xs={12} md={3}>
        <Box p={3} border="1px solid #e0e0e0" borderRadius={2} boxShadow={2}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />

          {/* Category Filter */}
          <Typography variant="body1" gutterBottom>
            Categories
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="categories"
                  value="Web Development"
                  checked={filters.categories.includes("Web Development")}
                  onChange={handleFilterChange}
                />
              }
              label="Web Development"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="categories"
                  value="Data Science"
                  checked={filters.categories.includes("Data Science")}
                  onChange={handleFilterChange}
                />
              }
              label="Data Science"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="categories"
                  value="Design"
                  checked={filters.categories.includes("Design")}
                  onChange={handleFilterChange}
                />
              }
              label="Design"
            />
          </FormGroup>

          {/* Level Filter */}
          <Typography variant="body1" gutterBottom>
            Levels
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="levels"
                  value="beginner"
                  checked={filters.levels.includes("beginner")}
                  onChange={handleFilterChange}
                />
              }
              label="Beginner"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="levels"
                  value="intermediate"
                  checked={filters.levels.includes("intermediate")}
                  onChange={handleFilterChange}
                />
              }
              label="Intermediate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="levels"
                  value="advanced"
                  checked={filters.levels.includes("advanced")}
                  onChange={handleFilterChange}
                />
              }
              label="Advanced"
            />
          </FormGroup>

          {/* Free/Paid Filter */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="isFree"
                  checked={filters.isFree}
                  onChange={handleFilterChange}
                />
              }
              label="Free Only"
            />
          </FormGroup>

          <Button
            variant="outlined"
            fullWidth
            onClick={() =>
              setFilters({ categories: [], levels: [], isFree: false })
            }
            sx={{ marginTop: 2 }}
          >
            Clear Filters
          </Button>
        </Box>
      </Grid>

      {/* Content Area */}
      <Grid item xs={12} md={9}>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <FormControl variant="outlined" size="small">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Button
              variant={view === "grid" ? "contained" : "outlined"}
              onClick={() => setView("grid")}
              sx={{ marginRight: 2 }}
            >
              Grid View
            </Button>
            <Button
              variant={view === "list" ? "contained" : "outlined"}
              onClick={() => setView("list")}
            >
              List View
            </Button>
          </Box>
        </Box>

        {/* Course List */}
        <Box
          display="flex"
          flexDirection={view === "grid" ? "row" : "column"}
          flexWrap={view === "grid" ? "wrap" : "nowrap"}
          gap={2}
        >
          {sortedCourses.map((course) => (
            <Card
              key={course.id}
              sx={{
                maxWidth: view === "grid" ? 320 : "100%",
                margin: view === "grid" ? 1 : "0 0 1rem",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: course.content.trim(),
                    }}
                  />
                </Typography>
                <Typography variant="body2" color="text.primary" mt={2}>
                  {course.price === 0 ? "Free" : `$${course.price}`}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoursesList;
