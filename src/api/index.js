import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let countryUrl = (country) ? `${url}/countries/${country}` :url;
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(countryUrl)
        const desctructuredData = { confirmed, recovered, deaths, lastUpdate }
        return desctructuredData
    } catch (error) {
        console.log("fetchData -> error", error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const desctructuredData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return desctructuredData
    } catch (error) {
        console.log("fetchData -> error", error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {
        console.log("fetchData -> error", error)
    }
}
