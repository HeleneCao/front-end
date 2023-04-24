import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import apiBackEnd from "../service/api.Backend";
import * as Yup from "yup";

const ModalSupervisorAdd = ({ isOpen, onClose, confirm }) => {
  const [supervisorLastName, setSupervisorLastName] = useState("");
  const [supervisorFirstName, setSupervisorFirstName] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");

  const validationSchema = Yup.object().shape({
    last_name: Yup.string().required("Le nom est requis"),
    first_name: Yup.string().required("Le prénom est requis"),
    email: Yup.string().required("L'email est requis"),
  });

  const handleAddSupervisor = (values) => {
    console.log(values);
    const supervisorDto = {
      last_name: values.last_name,
      first_name: values.first_name,
      email: values.email,
    };

    apiBackEnd
      .post("/api/supervisor/register", supervisorDto)
      .then((response) => {
        console.log(response.data);
        confirm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isOpen ? (
        <>
          <Formik
            initialValues={{ last_name: "", first_name: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleAddSupervisor}
          >
            {({ isSubmitting, setFieldValue }) => (
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
                          className="border-2 border-grey-800  rounded-full p-1 px-5"
                          type="text"
                          name="last_name"
                          id="last_name"
                          placeholder="Nom"
                        />
                        <ErrorMessage name="last_name">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="mb-4">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-5"
                          type="text"
                          name="first_name"
                          id="first_name"
                          placeholder="Prénom"
                        />
                        <ErrorMessage name="first_name">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="mb-4">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1 px-5"
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

                    <div className="flex justify-end">
                      <button
                        className="border-2 border-blue-500 rounded-full p-1 px-5 font-bold"
                        onClick={onClose}
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className=" border-2 border-blue-500 rounded-full p-1 px-5 font-bold"
                        // onClick={handleAddTeam}
                      >
                        Ajouter
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

export default ModalSupervisorAdd;
