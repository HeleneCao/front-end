import { useEffect, useState } from "react";
import { skillService } from "../service/skill.service";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import apiBackEnd from "../service/api.Backend";
import { teamValidationSchema } from "../constants/yupConstants";

const ModalTeamAdd = ({ isOpen, onClose, confirm }) => {

  const [skills, setSkills] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);



  const handleAddTeam = (values) => {


    const teamDto = {
      name: values.name,
      creationDate: values.creationDate,
      skills: values.skills.map((option) => option.value)
    };

    apiBackEnd
      .post("/api/team/register", teamDto)
      .then((response) => {

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



  return (
    <>
      {isOpen ? (
        <>
          <Formik
            initialValues={{ name: "", creationDate: "", skills: [] }}
            validationSchema={teamValidationSchema}
            onSubmit={handleAddTeam}

          >
            {({ setFieldValue }) => (
              <Form className="mt-8 space-y-6">
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                  <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                    <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                      <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">
                        Ajouter une team
                      </h2>
                    </div>

                    <div className="p-10">
                      <div className="mb-4">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-10"
                          type="text"
                          name="name"
                          id="team-name"
                          placeholder="Nom de la team"
                        />
                        <ErrorMessage name="name">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-800 mb-2"
                          htmlFor="language"
                        >
                          Langage utilisées:
                        </label>
                        <div>
                          <Select
                            name="skills"
                            defaultValue={selectedOption}
                            onChange={(value) => setFieldValue("skills", value)}
                            options={skills}
                            isMulti
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-800 mb-2"
                          htmlFor="creation-date"
                        >
                          Date:
                        </label>
                        <Field
                          name="creationDate"
                          type="date"
                          className="border-2 border-grey-800  rounded-full p-1 px-16"
                        />
                        <ErrorMessage name="creationDate">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="flex justify-between">
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
              </Form>
            )}
          </Formik>
        </>
      ) : null}
    </>
  );
};

export default ModalTeamAdd;
