import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditEmployee = () => {
  let { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const history = useHistory();

  const getEmployeeById = async () => {
    const employeeData = await axios.get(`/api/v1/employees/${id}`);

    setEmployee(employeeData.data);

    setFirstName(employeeData.data.firstName);
    setLastName(employeeData.data.lastName);
    setEmailId(employeeData.data.emailId);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    await axios.put(`/api/v1/employees/${id}`, employeeData);

    history.push("/");
  };

  useEffect(() => {
    getEmployeeById();
  }, []);

  return (
    <div className='text-gray-600 body-font mt-10 flex items-center'>
      <div className='mx-auto bg-gray-100 rounded-lg p-8 flex flex-col'>
        <form onSubmit={onSubmit}>
          <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
            Edit Employee
          </h2>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600'>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600'>Email</label>
            <input
              type='email'
              name='emailId'
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
