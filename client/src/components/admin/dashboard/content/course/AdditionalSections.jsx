import React, { useState } from "react";
import { Box, Card, CardHeader, CardContent } from "@mui/material";
import FAQ from "./FAQ";
import DynamicSection from "./DynamicSection"; // Import the DynamicSection component

const AdditionalSections = () => {
  const [faq, setFaq] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [targetAudience, setTargetAudience] = useState([]);
  const [keyFeatures, setKeyFeatures] = useState([]);

  const addItem = (listSetter, item) => listSetter((prev) => [...prev, item]);
  const removeItem = (listSetter, index) =>
    listSetter((prev) => prev.filter((_, i) => i !== index));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
      <FAQ
        faqItems={faq}
        onAdd={(item) => addItem(setFaq, item)}
        onRemove={(index) => removeItem(setFaq, index)}
      />
      <Card sx={{ bgcolor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
        <CardHeader
          title="Extra Information"
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
          <DynamicSection
            title="Requirements"
            items={requirements}
            onAdd={(item) => addItem(setRequirements, item)}
            onRemove={(index) => removeItem(setRequirements, index)}
            placeholder="Enter a requirement"
          />

          <DynamicSection
            title="Target Audience"
            items={targetAudience}
            onAdd={(item) => addItem(setTargetAudience, item)}
            onRemove={(index) => removeItem(setTargetAudience, index)}
            placeholder="Enter target audience"
          />

          <DynamicSection
            title="Key Features"
            items={keyFeatures}
            onAdd={(item) => addItem(setKeyFeatures, item)}
            onRemove={(index) => removeItem(setKeyFeatures, index)}
            placeholder="Enter a key feature"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdditionalSections;
