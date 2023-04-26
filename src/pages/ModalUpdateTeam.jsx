import { useEffect, useState } from "react";
import { skillService } from "../service/skill.service";
import Select from "react-select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import apiBackEnd from "../service/api.Backend";
import { updateTeamValidationSchema } from "../constants/yupConstants";

const ModalUpdateTeam = ({
  isOpen,
  onClose,
  confirm,
  nomTeam,
  dateCreation,
  repo,
  backlog,
  uuid,
  skillsTeam
}) => {
  const [teamName, setTeamName] = useState("");
  const [language, setLanguage] = useState("");
  const [skills, setSkills] = useState([]);
  const [teamCreationDate, setTeamCreationDate] = useState("");
  const [teamRepository, setTeamRepository] = useState("");
  const [teamBacklog, setTeamBacklog] = useState("");





   const handleUpdateTeam = (values) => {
    console.log(values);

    const teamDto = {
      name: values.name,
      urlBacklog: values.urlBacklog,
      urlRepository: values.urlRepository,
      skills: values.skills.map((option) => option.value),
    };

console.log(uuid)
    apiBackEnd
    .put(`/api/team/update/${uuid}`, teamDto)
    .then((response) => {
      console.log(response.data);
      confirm();
    })
    .catch((error) => {
      console.log(error);
    })
  };

  useEffect(() => {
    setTeamName;
    skillService
      .getAllSkills()
      .then((res) => {
        setSkills(
          res.data.content.map((s) => {
            return {
              value: s.label,
              label: s.label,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(skills);

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      {isOpen ? (
        <>
        <Formik
          initialValues={{name: nomTeam, skills: skillsTeam,urlBacklog: backlog, urlRepository: repo }}
          validationSchema={updateTeamValidationSchema}
          onSubmit={handleUpdateTeam}
          >
             {({ setFieldValue, values }) => (
        <Form className="">
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
              <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
              <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Modifier la team</h2>
              </div>

<div className="p-10">
              <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
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
                    <div>
                    <label
                      className="block text-gray-800 mb-2"
                      htmlFor="language"
                    >
                      Langage utilisées:
                    </label>
                    </div>
                    <div>
                      
                      <Select
                      name="skills"
                        defaultValue={values.skills}
                        onChange={(value) => setFieldValue("skills", value)}
                        options={skills}
                        isMulti
                      />
                    </div>
                  </div>

              {/* <div className="mb-4">
                <input
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  id="date-creation"
                  placeholder="team-Date de creation"
                  value={dateCreation}
                  onChange={(e) => setTeamCreationDate(e.target.value)}
                  
                />
              </div> */}

              <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="urlBacklog"
                  id="team-backlog"
                  placeholder="Url backlog"
        
                  
                />
              </div>

              <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="urlRepository"
                  id="team-repo"
                  placeholder="team-Url repository"
           
                  
                />
              </div>

             

              </div>
            
              <div className="flex justify-between">
                <button
                  className= "border-2 border-blue-100 rounded-full p-1 px-5 font-bold"
                  onClick={onClose}
                >
                  Annuler
                </button>
                <button
                  type='submit'
                  className= " border-2 border-blue-500 rounded-full p-1 px-5 font-bold"
              
                >
                  Modifier
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

export default ModalUpdateTeam;
