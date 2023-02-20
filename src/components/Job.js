import React from 'react';

function Job({ job, onCompleted  }) {

    const handleCompleted = () => {
        onCompleted(job);
    }

    const getStyle = (complete) => ({
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #cccccc dotted',
        textDecoration: complete ? 'line-through' : 'none',
        width: '80%',
    })
    return (
        <p key={job.id} style={getStyle(job.completed)}>
            <table width="100%">
                <tr>
                    <td width="40%"><input type="checkbox" onChange={handleCompleted}></input>{job.tyotehtava}</td>
                    <td width="20%">{job.osoite}</td>
                    <td width="40%"><a href={job.linkki}>LISÄTIETOA</a></td>
                </tr>
            </table>
        </p>
    )
}
export default Job;