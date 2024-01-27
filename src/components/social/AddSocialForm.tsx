"use client";

import { Paper } from "@mui/material";
import CPAccordion from "../ui/cp-accordion/CPAccordion";
import CPPaper from "../ui/cp-paper/CPPaper";
import { Form, Formik } from "formik";
import { validationSchemaAddSocialForm } from "@/validation";
import CPSelect from "../ui/cp-select/CPSelect";
import CPInput from "../ui/cp-input/CPInput";
import CPButton from "../ui/cp-button/CPButton";
import { socialType } from "@/constant/Form.constant";
import { AddSocialFormType } from "@/type/profile";
import * as actions from "../../actions";
import { Dispatch, SetStateAction } from "react";

type AddSocialFormProps = {
  setState: Dispatch<SetStateAction<boolean>>;
};

const AddSocialForm = ({ setState }: AddSocialFormProps) => {
  const onsubmit = async (values: AddSocialFormType) => {
    try {
      const result = await actions.createSocial(values);
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <CPPaper>
      <Formik
        enableReinitialize
        initialValues={{ type: "", link: "" }}
        validationSchema={validationSchemaAddSocialForm}
        onSubmit={(values) => onsubmit(values)}
      >
        {({
          touched,
          errors,
          isSubmitting,
          setFieldValue,
          values,
          isValid,
        }) => (
          <Form>
            <div className=" grid grid-cols-3 justify-center items-center gap-4 p-4 ">
              <div className="col-span-1 ">
                <CPSelect
                  selectList={socialType}
                  label="type"
                  name="type"
                  value={values.type}
                  onchange={(name, value) => setFieldValue(name, value)}
                  error={(touched.type && errors.type) as boolean}
                  helperText={errors.type}
                />
              </div>
              <div className="w-full col-span-2 ">
                <CPInput
                  variant="outlined"
                  name="link"
                  label="link"
                  value={values.link}
                  onchange={(name: string, value: string) =>
                    setFieldValue(name, value)
                  }
                  error={(touched.link && errors.link) as boolean}
                  helperText={errors.link}
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 ">
              <CPButton
                variant="outlined"
                text="submit social"
                type="submit"
                disable={errors?.link && errors?.link.length ? true : false}
              />
              <CPButton
                variant="outlined"
                text="cancel"
                type="button"
                onClick={() => setState(false)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </CPPaper>
  );
};
export default AddSocialForm;
