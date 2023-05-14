import { useState } from 'react';
import { useEffect } from 'react';

function DatePanel({date1, month1}){

    const [date, setDate] = useState(0);
    const [month, setMonth] = useState("");
    const [task, setTask] = useState({});

    useEffect (() => {
            setMonth("");
        }, [month1]
    );

    function handleChangeDate(event, date1, month1) {
        setDate(date1);
        setMonth(month1);
    }

    function saveChangeDateMonth(e, nameV) {
        let textareaV = document.getElementsByName(nameV)[0].value;
        let newtmpStr = "";
        if(nameV in task){
            newtmpStr = task[nameV] + "\n" + textareaV; 
        }else{
            newtmpStr = textareaV;
        }
        setTask({...task,  [nameV]:newtmpStr});
        console.log("saveChangeDateMonth: success");
    }

    function updateChangeDateMonth(e, nameV) {
        let textareaV = document.getElementsByName(nameV)[0].value;
        let newtmpStr = textareaV;
        setTask({...task,  [nameV]:newtmpStr});
        console.log("updateChangeDateMonth: success");
    }

    function TodoBox(){
        
        const nameV = date1 + month1;
        const valueT = task[nameV];
        if((date > 0 && month !== "") || valueT)
            
            return (
                <div>
                    <textarea name={nameV} id="txt" cols="20" rows="5" defaultValue={valueT}></textarea>
                    <button onClick={(e) => {saveChangeDateMonth(e, nameV)}}> Submit</button>
                    <button onClick={(e) => {updateChangeDateMonth(e, nameV)}}> update</button>
                </div>
            );
        return;
    
    }
    return (
            <>
                <button value={date1} month={month1} onClick={(e) => {handleChangeDate(e, date1, month1)}}>{date1}</button>
                <TodoBox  />
            </>
        );
}
export default DatePanel;