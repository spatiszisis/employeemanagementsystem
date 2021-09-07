import React from 'react'
import {Link} from 'react-router-dom'

const EmployeeListItem = ({id, firstname, lastname, email}) => {
    return (
     
        <tr>
            <td className="border-b-2 border-gray-200 px-4 py-3">{id}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{firstname}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{lastname}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">{email}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
            <div className="flex flex-row justify-center" >
                <div className="bg-red-600 flex flex-row items-center mr-3 px-2 rounded-md text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
<p>Delete</p>
                </div>
                <Link to={`/edit_employee/${id}`} className="bg-gray-400 flex flex-row items-center mr-3 px-2 rounded-md text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg><p>Update</p>
                </Link>
                </div></td>
          </tr>
    );
}

export default EmployeeListItem
