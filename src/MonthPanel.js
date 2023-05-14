import DatePanel from './DatePanel';
import './MonthPanel.css';

export function GetRowDate( days, month ){

    let indexD = 1;
    let arr = [];

    for(let no = 0; no < 7; no++){
        arr[no] = [];
    }
    for(let no = 0; no < 7; no++){
        for(let tmp = 0; tmp < 5; tmp++){
            arr[no].push(<DatePanel date1={indexD} month1={month} />);
            indexD++;
            if(indexD > days)
                break;
        }
        if(indexD > days)
            break;
    }    
    return arr;
}

function MonthPanel({month}){

    let indexD = 0;
    let arrRw = []; 
    
    let days = {
      "Jan":31,
      "Feb":28,
      "March":31,
      "April":30,
      "May":31,
      "June":30,
      "July":31,
      "Aug":31,
      "Sept":30,
      "Oct":31,
      "Nov":30,
      "Dec":31  
    };

    const jsxCell = GetRowDate(days[month], month);
    for(let rwIndex = 0 ; rwIndex < 7; rwIndex++){
     const jsxRw = (   <tr>
            <th>{jsxCell[rwIndex]}</th>                
        </tr>);
        arrRw.push(jsxRw);
        

    }
    return (<><div className={month}><table> {arrRw} </table></div></>);
}

export default MonthPanel;
