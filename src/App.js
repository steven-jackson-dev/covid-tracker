import React, {useEffect, useState} from 'react';
import { AppFooter } from 'components';
import { Container, Typography } from '@material-ui/core';
import { Cards, Chart, CountryPicker } from 'components'
import { fetchData } from 'api'

function App() {
  
  const [appData, setAppData] = useState({
    data: {},
    country: ''
  })

  useEffect(() => {
    (async () => {
      setAppData({data: await fetchData()})
    })()
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setAppData({data: fetchedData, country: country})
  }


  return (
    <div className="App">
      <Container>
      <Typography style={{textAlign: "center", margin: "1em 0"}} variant="h4" component="h1">Covid-19 Tracker</Typography>
        <Cards {...appData} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart  {...appData}/>
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
