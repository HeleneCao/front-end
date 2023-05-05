import * as Yup from "yup";


export const teamValidationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis"),
  });

  export const updateTeamValidationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis")
  });

  export const updateSupervisorValidationSchema = Yup.object().shape({
    lastName: Yup.string().required("Le nom est requis"),
    firstName: Yup.string().required("Le prenom est requis"),
 
  });

  export const updateInternValidationSchema = Yup.object().shape({
    lastName: Yup.string().required("Le nom est requis"),
    firstName: Yup.string().required("Le prenom est requis"),
  });