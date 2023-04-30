import YearPanel from './YearPanel';
import { useState } from 'react';






function CalenderPanel() {

    const [month, setMonth] = useState("Jan");


    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    }



    return (

        
    <div className="CalenderPanel">
        <select value={month} onChange={handleChangeMonth}>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Sept">Sept</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
        </select>
        <YearPanel month={month}/>
    </div>
  );
}

export default CalenderPanel;
