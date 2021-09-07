import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();

        const employee = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId 
        }

        if(firstName !== '' || lastName !== '' || emailId !== ''){
            await axios.post('api/v1/employees', employee);
        }

        history.push("/");
    }

    return (
        <div className="text-gray-600 body-font mt-10 flex items-center">
        <div className="mx-auto bg-gray-100 rounded-lg p-8 flex flex-col">
            <form onSubmit={onSubmit}>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Employee</h2>
        <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">First Name</label>
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value) } className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Last Name</label>
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value) } className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
                <label  className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" name="emailId" value={emailId} onChange={(e) => setEmailId(e.target.value) } className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
            </form>
            </div>
        </div>
    );
}

export default AddEmployee
