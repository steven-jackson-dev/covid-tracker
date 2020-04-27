import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from 'api'
const AppCountryPicker = (props) => {
    const {handleCountryChange} = props
    const [countries, setCountries] = useState([])
    // console.log("CountryPicker -> countries", countries)

    useEffect(() => {
        (async () => {
            setCountries(await fetchCountries())
        })()
    }, [setCountries]);


    return (
        <div className={styles.container}>
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default AppCountryPicker
