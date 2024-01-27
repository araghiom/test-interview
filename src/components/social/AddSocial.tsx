"use client";

import CPAccordion from "../ui/cp-accordion/CPAccordion";
import CPButton from "../ui/cp-button/CPButton";
import AddSocialForm from "./AddSocialForm";
import AddIcon from "@mui/icons-material/Add";

const AddSocial = () => {
  return (
    <CPAccordion
      accordionSummery={
        <CPButton
          type="button"
          variant="text"
          text="add social"
          startIcon={<AddIcon />}
        />
      }
      renderChildren={(setState) => (
        <>
          <AddSocialForm setState={setState} />
        </>
      )}
    ></CPAccordion>
  );
};
export default AddSocial;
