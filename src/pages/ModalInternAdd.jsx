import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import apiBackEnd from "../service/api.Backend";
import { skillService } from "../service/skill.service";
import * as Yup from "yup";
import Select from "react-select";

const ModalInternAdd = ({ isOpen, onClose, confirm }) => {
  
  
  const [skills, setSkills] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required("Le nom est requis"),
    firstName: Yup.string().required("Le prénom est requis"),
    email: Yup.string().required("L'email est requis")
  });

  const handleAddIntern = (values) => {
    console.log(values);

    const internDto = {
      lastName: values.lastName,
      firstName: values.firstName,
      email: values.email,
      arrivalDate: values.arrivalDate,
      skills: values.skills.map((option) => option.value)
    };

    apiBackEnd
      .post("/api/intern/register", internDto)
      .then((response) => {
        console.log(response.data);
        confirm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    skillService
      .getAllSkills()
      .then((res) => {
        setSkills(
          res.data.content.map((skill) => {
            return {
              value: skill.label,
              label: skill.label,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(skills);

  return (
    <>
      {isOpen ? (
        <>
          <Formik
            initialValues={{ lastName: "", firstName: "", email: "", arrivalDate: "", skills: [] }}
            validationSchema={validationSchema}
            onSubmit={handleAddIntern}
          >
            {({ setFieldValue }) => (
              <Form className="mt-8 space-y-6">
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                  <div div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                    <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                      <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">
                        Ajouter un stagiaire
                      </h2>
                    </div>

                    <div className="pl-10 mt-9">
                      <div className="">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-7"
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Nom"
                        />
                        <ErrorMessage name="lastName">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                   </div>

                    <div className="pl-10 mt-5">
                      <div className="">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-7"
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Prénom"
                        />
                        <ErrorMessage name="firstName">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                   </div>

                   <div className="pl-10 mt-5">
                      <div className="">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-7"
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                   </div>  

                   <div className="pl-10 mt-5">
                        <label
                          className="block text-gray-800 mb-2"
                          htmlFor="creation-date"
                        >
                          Date:
                        </label>
                        <Field
                          name="arrivalDate"
                          type="date"
                          className="border-2 border-grey-800  rounded-full p-1 px-12"
                        />
                        <ErrorMessage name="creationDate">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    

                      <div className="pl-10 mt-5">
                        <label
                          className="block text-gray-800 mb-2"
                          htmlFor="language"
                        >
                          Langage utilisées:
                        </label>
                        <div>
                          <Select
                            className="mr-14"
                            name="skills"
                            defaultValue={selectedOption}
                            onChange={(value) => setFieldValue("skills", value)}
                            options={skills}
                            isMulti
                          />
                        </div>
                      </div>               
                    
                    <div className="mt-9">
                   <div className="flex justify-between ">
                      <button
                        className="border-2 border-blue-100 rounded-full p-1 px-5 font-bold "
                        onClick={onClose}
                      >Annuler
                      </button>
                     
                      <button
                        type="submit"
                        className=" border-2 border-blue-500 rounded-full p-1 px-5 font-bold "
                      >Ajouter
                      </button>                
                    </div>
                    </div>

                    </div>
                  </div>
                  
              </Form>
            )}
          </Formik>
        </>
      ) : null}
    </>
  );
};

export default ModalInternAdd
