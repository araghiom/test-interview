import * as yup from "yup";

export const validationSchemaAddSocialForm = yup.object({
  type: yup.string().required("please choose type "),
  link: yup
    .string()
    .required("please choose type ")
    .url(" please enter correct url"),
});
