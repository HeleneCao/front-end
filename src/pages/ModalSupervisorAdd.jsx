import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { roleService } from "../service/role.service";
import Select from "react-select";
import apiBackEnd from "../service/api.Backend";
import * as Yup from "yup";

const ModalSupervisorAdd = ({ isOpen, onClose, confirm }) => {
  const [roles, setRoles] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required("Le nom est requis"),
    firstName: Yup.string().required("Le prénom est requis"),
    email: Yup.string().required("L'email est requis"),
    password: Yup.string().required("Mot de passe est requis")
  });

  const handleAddSupervisor = (values) => {
    console.log(values);

    const supervisorPostDto = {
      lastName: values.lastName,
      firstName: values.firstName,
      role: values.roles.value,
      email: values.email,
      password: values.password
    };

    apiBackEnd
      .post("/api/supervisor/admin/register", supervisorPostDto)
      .then((response) => {
        console.log(response.data);
        confirm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    roleService
      .getAllRoles()
      .then((res) => {
        setRoles(
          res.data.content.map((role) => {
            return {
              value: role.name,
              label: role.name,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(roles);


  return (
    <>
      {isOpen ? (
        <>
          <Formik
            initialValues={{ last_name: "", first_name: "", roles: [], email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleAddSupervisor}
          >
            {({ setFieldValue }) => (
              <Form className="mt-8 space-y-6">
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                  <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                    <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                      <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">
                        Ajouter un responsable
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
                      <div className="">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-7"
                          id="password"
                          name="password"
                          type="password"
                          placeholder="mot de passe"
                        />
                        <ErrorMessage name="password">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="pl-10 mt-4">
                        <label
                          className="block text-gray-800 mb-2"
                          htmlFor="role"
                        >
                          Role:
                        </label>
                        <div>
                          <Select
                          className="mr-14"
                            name="roles"
                            defaultValue={selectedOption}
                            onChange={(value) => setFieldValue("roles", value)}
                            options={roles}
                          />
                        </div>
                      </div>
                    
                    <div className="mt-9">
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
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : null}
    </>
  );
};

export default ModalSupervisorAdd;
