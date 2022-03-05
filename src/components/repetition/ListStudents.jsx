import React from 'react';
import students from '../../data/students';

export default function listStudents(props) {

    const lis = students.map(student => {
        return (<li key={student.id}>
            {student.id}) {student.name} - {student.note}
        </li>)
    })

    return(
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    );
}