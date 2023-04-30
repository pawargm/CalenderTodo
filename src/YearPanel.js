import MonthPanel from './MonthPanel';



function YearPanel({month}){
    console.log("year");
    console.log(month);
    return <MonthPanel month={month}/> ;
}

export default YearPanel;