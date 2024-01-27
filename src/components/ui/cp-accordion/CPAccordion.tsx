"use client";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactNode, useState } from "react";

type CPAccordionProps = {
  renderChildren: (
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  ) => ReactNode;
  accordionSummery: React.ReactNode;
};

const CPAccordion = ({
  renderChildren,
  accordionSummery,
}: CPAccordionProps) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <Accordion
      className="cp-accordion"
      onChange={(e, extend) => setState(extend)}
      expanded={state}
    >
      <AccordionSummary disabled={state ? true : false}>
        {accordionSummery}
      </AccordionSummary>
      <AccordionDetails>{renderChildren(setState)}</AccordionDetails>
    </Accordion>
  );
};
export default CPAccordion;
