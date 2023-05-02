import * as Yup from "yup";


export const teamValidationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis"),
    creationDate: Yup.date().required("La date est requise"),
  });

  export const updateTeamValidationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis"),
    // urlBacklog: Yup.string(),
    // urlRepository: Yup.string()
  });