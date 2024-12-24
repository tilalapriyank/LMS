import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import HeroSection from "../../components/home/HeroSection";
import FeatureCard from "../../components/home/FeatureCard";
import PopularCourses from "../../components/home/PopularCourses";
import TestimonialCard from "../../components/home/TestimonialCard";
import LiveChat from "../../components/home/LiveChat";

// Example course data for demonstration
const popularCourses = [
  {
    title: "Web Development Masterclass",
    description:
      "Learn how to build modern websites and applications with HTML, CSS, JavaScript, and React.",
    image: "https://via.placeholder.com/300x200.png?text=Web+Development",
    rating: 4.5,
    instructor: "John Doe",
  },
  {
    title: "Data Science Bootcamp",
    description:
      "Master Python, R, and SQL, and work with real-world data sets to gain insights and build models.",
    image: "https://via.placeholder.com/300x200.png?text=Data+Science",
    rating: 4.7,
    instructor: "Jane Smith",
  },
  {
    title: "Digital Marketing Strategies",
    description:
      "Get hands-on with SEO, social media marketing, and email campaigns to grow your business online.",
    image: "https://via.placeholder.com/300x200.png?text=Digital+Marketing",
    rating: 4.3,
    instructor: "Mark Adams",
  },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Our Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              title="Personalized Learning Paths"
              description="Tailored courses that match your skill level and goals, ensuring maximum learning effectiveness."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              title="Certification on Completion"
              description="Earn recognized certificates upon course completion that boost your career opportunities."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              title="Interactive Community Support"
              description="Engage with mentors and peers in a collaborative environment to deepen your learning experience."
            />
          </Grid>
        </Grid>
      </Container>
      <PopularCourses courses={popularCourses} />
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          What Our Users Are Saying
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard
              testimonial="This platform transformed my career by providing the tools and knowledge to succeed. Highly recommended!"
              name="Emily"
              profession="Software Engineer"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard
              testimonial="The resources available here are top-notch. The support system made my learning journey smooth."
              name="Michael"
              profession="Marketing Specialist"
            />
          </Grid>
        </Grid>
      </Container>
      <LiveChat />
    </div>
  );
};

export default Home;
