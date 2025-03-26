import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react';

interface searchBoxProps {
    searchCountry: Function,
    input: string,
    handleInputChange: Function
}

const SearchBox: FC<searchBoxProps> = (props) => {
    return(
        <div className='search-box'>
        <FontAwesomeIcon icon={faLocationDot}  className='location-dot-icon'/>
        <input
          placeholder={"Enter your location"}
          value={props.input}
          onChange={(e) => props.handleInputChange(e)}
        />
        <button onClick={() => props.searchCountry()}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div>
    )
}

export default SearchBox;