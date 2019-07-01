import React from 'react';

const PersonForm = (props) => {
    const { addInformation, newName, handleNameChange, newNumber, handleNumberChange } = props
    return (
        <form onSubmit={addInformation}>
            <table>
                <tbody>
                    <tr>
                        <td> Name: </td>
                        <td><input value={newName} onChange={handleNameChange}/></td>
                    </tr>
                    <tr>
                        <td>Number: </td>
                        <td><input value={newNumber} onChange={handleNumberChange}/></td>
                    </tr>
                    <tr>
                        <td><button type="submit">add</button></td> 
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default PersonForm