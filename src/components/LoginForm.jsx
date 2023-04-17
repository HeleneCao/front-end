import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Adresse e-mail invalide')
        .required('L’adresse e-mail est requise'),
    password: Yup.string()
        .required('Le mot de passe est requis'),
});

const LoginForm = () => {

    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          "http://localhost:8081/api/v1/auth/authenticate",
          values
        );
        console.log(response.data);
          navigate("/");

      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="sr-only">
                                        Adresse e-mail
                                    </label>
                                    <Field id="email"
                                           name="email"
                                           type="email"
                                           autoComplete="email"
                                           required
                                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                           placeholder="Adresse e-mail"
                                    />
                                    <ErrorMessage name="email">
                                        {msg => <div className="text-red-600 text-sm">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="password" className="sr-only">
                                        Mot de passe
                                    </label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Mot de passe"
                                    />
                                    <ErrorMessage name="password">
                                        {msg => <div className="text-red-600 text-sm">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-bleu-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {isSubmitting ? 'Connexion...' : 'Se connecter'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
            )}

            export default LoginForm;