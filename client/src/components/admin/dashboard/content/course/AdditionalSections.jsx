import React, { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardContent } from "@mui/material";
import FAQ from "./FAQ";
import DynamicSection from "./DynamicSection"; // Import the DynamicSection component

const AdditionalSections = ({
  faqItems,
  requirements,
  targetAudience,
  keyFeatures,
  onChange,
}) => {
  const [faq, setFaq] = useState(faqItems || []);
  const [requirementsList, setRequirements] = useState(requirements || []);
  const [targetAudienceList, setTargetAudience] = useState(targetAudience || []);
  const [keyFeaturesList, setKeyFeatures] = useState(keyFeatures || []);

  useEffect(() => {
    // Syncing the local state with the passed props
    setFaq(faqItems);
    setRequirements(requirements);
    setTargetAudience(targetAudience);
    setKeyFeatures(keyFeatures);
  }, [faqItems, requirements, targetAudience, keyFeatures]);

  const addItem = (listSetter, item) => listSetter((prev) => [...prev, item]);
  const removeItem = (listSetter, index) =>
    listSetter((prev) => prev.filter((_, i) => i !== index));

  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
      <FAQ
        faqItems={faq}
        onAdd={(item) => {
          addItem(setFaq, item);
          handleChange("faq", [...faq, item]);
        }}
        onRemove={(index) => {
          removeItem(setFaq, index);
          handleChange("faq", faq.filter((_, i) => i !== index));
        }}
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
            items={requirementsList}
            onAdd={(item) => {
              addItem(setRequirements, item);
              handleChange("requirements", [...requirementsList, item]);
            }}
            onRemove={(index) => {
              removeItem(setRequirements, index);
              handleChange("requirements", requirementsList.filter((_, i) => i !== index));
            }}
            placeholder="Enter a requirement"
          />

          <DynamicSection
            title="Target Audience"
            items={targetAudienceList}
            onAdd={(item) => {
              addItem(setTargetAudience, item);
              handleChange("targetAudience", [...targetAudienceList, item]);
            }}
            onRemove={(index) => {
              removeItem(setTargetAudience, index);
              handleChange("targetAudience", targetAudienceList.filter((_, i) => i !== index));
            }}
            placeholder="Enter target audience"
          />

          <DynamicSection
            title="Key Features"
            items={keyFeaturesList}
            onAdd={(item) => {
              addItem(setKeyFeatures, item);
              handleChange("keyFeatures", [...keyFeaturesList, item]);
            }}
            onRemove={(index) => {
              removeItem(setKeyFeatures, index);
              handleChange("keyFeatures", keyFeaturesList.filter((_, i) => i !== index));
            }}
            placeholder="Enter a key feature"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdditionalSections;
