

const Inputbox = ({Inputbox,searchChange,date,days,hours,mins,secs}) => {
    return(
        <div className="display">
            
            <h3 id={time}>{days}-Days {hours}-Hours {mins}-Mins {secs}-Secs </h3>
            <div>
                <input type="datetime-local" placeholder="01 January, 2020(format)" onChange={searchChange}/>
                <button onClick={Inputbox}>submit</button>
            </div>
            
        </div>
    )
}

export default Inputbox;