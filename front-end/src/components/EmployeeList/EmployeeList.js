import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeListItem from "./EmployeeListItem/EmployeeListItem";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const results = await axios.get("api/v1/employees");

    setEmployees(results.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-20 mx-auto'>
        <div className='flex pl-4 mt-4 lg:w-2/3 w-full mx-auto mb-3'>
          <a
            href='/add_employee'
            className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
          >
            Add Employee
          </a>
        </div>
        <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
          <table className='table-auto w-full text-left whitespace-no-wrap'>
            <thead>
              <tr>
                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
                  Id
                </th>
                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                  First Name
                </th>
                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                  Last Name
                </th>
                <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                  Email
                </th>
                <th className='w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'></th>
              </tr>
            </thead>
            <tbody>
              {employees != null && employees.length > 0
                ? employees.map((employee) => (
                    <EmployeeListItem
                      key={employee.id}
                      firstname={employee.firstName}
                      lastname={employee.lastName}
                      email={employee.emailId}
                      id={employee.id}
                    />
                  ))
                : "Loading."}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EmployeeList;
