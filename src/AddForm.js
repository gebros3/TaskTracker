import React from 'react';
import {useState} from 'react';


const AddForm = (props) => {
    let currentDate = new Date().toJSON().slice(0,10);
    const [date, setDate] = useState(currentDate);
    const search = (formData) => {
        const name = formData.get("name");
        props.add(name, date);
    }


    return (<form action = {search}>
        <label> Enter a Task </label>
        <input name = "name"/>
        <br/>
        <label for="due">Due date:</label>
        <input type="date" name="date" value={date} min="2025-01-01" max="2025-12-31" onChange={(e) => setDate(e.target.value)}/>
        <button type= "submit"> Submit </button>   
         </form>);

}

export default AddForm;
