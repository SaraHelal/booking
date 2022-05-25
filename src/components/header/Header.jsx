import {useState} from 'react'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import './header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { Options } from '../Options';


const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const [openDate , setOpenDate] = useState(false)
    const [openOptions , setOpenOptions] = useState(false)
    
    const [options , setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1
    })
    const handleOptions= (name,operation)=>{
        setOptions(oldOption=>{
           return {
               ...oldOption, [name] : operation === 'i' ? options[name] + 1 : options[name] - 1
           }
       })
    }
    const navigate = useNavigate()
    const handleSearch = ()=>{
        navigate('/hotels',{state:{destination, date, options}})
    }
    return (
    <div className='header'>
        <div className={type === 'list' ? 'container list' : 'container'}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rental</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxsi</span>
                </div>
            </div>
            { type !== 'list' &&
            <>
            <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" 
                    placeholder='Where are you going ?'
                     className='headerSearchInput'
                     onChange={(e)=>setDestination(e.target.value)}/>
                </div>
                <div className="headerSearchItem relative">
                    <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                    <span className='headerSearchText' onClick={()=>setOpenDate(!openDate)}>
                        {`${format(date[0].startDate,'eee d MMM')} - ${format(date[0].endDate,'eee d MMM')}`} 
                   </span>
                    { openDate &&
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                    />}
                </div>
                <div className="headerSearchItem relative" >
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>
                        {`${options.adult} adults . ${options.children} Children . ${options.room} room`}</span>
                    { openOptions && <Options options={options} handleOptions={handleOptions}  />
                    }
                </div>
                <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header