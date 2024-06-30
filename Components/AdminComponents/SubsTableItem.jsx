import React from 'react'

const SubsTableItem = ({email}) => {
  return (
    <div>
        <tr className='bg-white border-b text-left '>
            <th scope='row' className='px-6 py-4 font-medium text-gray-900 '>
                {email?email:"No Email"}

            </th>
            <td className='px-12 py-4 hidden sm:block'>{'30 June 2024'}</td>
            <td className='px-6 py-4 cursor-pointer'>x</td>
        </tr>
    </div>
  )
}

export default SubsTableItem