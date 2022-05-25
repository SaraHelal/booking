import './list.css'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { Options } from '../components/Options'
import SearchItem from '../components/searchItem/SearchItem'


const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  console.log('location: ', location)

  const handleOptions = (name, operation )=>{
    setOptions(oldOption=>{
      return {
        ...oldOption, [name] : 
        operation === "i" ? options[name]+1 : options[name] -1
      }
    })
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1>Search</h1>
            <div className="listInput">
              <small>Destination/Property name</small>
              <div className='listInputHolder'>
              <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder={destination ? destination : 'Where are you going ? '}/>
              </div>
            </div>

            <div className="listInput">
              <small>Check-in date
              </small>
              <div className='listInputHolder select' 
               onClick={()=>setOpenDate(!openDate)}
              >
                <FontAwesomeIcon icon={faCalendar} />
                <span className='listInputDateText'>
                  {`${format(date[0].startDate,'eee d MMM')} - ${format(date[0].endDate,'eee d MMM')}`}
                </span>
                {openDate && 
                <div onClick={(e)=>e.stopPropagation()}><DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="date"
                  /></div>
                  }
              </div>
            </div>

            <div className="listInput" onClick={()=>setOpenOptions(!openOptions)}>
              <div className='listInputHolder select' 
              >
              <span className='listInputOptionsText'>
                {`${options.adult} adults . ${options.children} children . ${options.room} room`}
              </span>
              {openOptions && <Options options={options} handleOptions={handleOptions} />}
            </div>
          </div>
            
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List