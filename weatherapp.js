
import readline from 'readline/promises'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const apiKey = '74bf82a3544eb3a7ecbe27f1a5221fea'

const api = `https://api.openweathermap.org/data/2.5/weather`

const getWeather= async(city)=>{
const url = `${api}?q=${city}&appid=${apiKey}&units=metric`;
try {
    const res = await fetch(url)
    if (!res.ok) {
    throw new Error("City not found check the api")
    }
const data = await res.json()
// console.log(data);
console.log("Country",data.name);
console.log(`Temp ${data.main.temp}°C`);
console.log(`description ${data.weather[0].description}`);
const time = data.timezone/60;
console.log(`Time ${time} min`);
console.log(`Speed ${data.wind.speed} m/s`);
console.log(`Pressure ${data.main.pressure}`);
console.log("Visibility",data.visibility);
console.log(`humidity ${data.main.humidity}%`);

    
} catch (error) {
    console.error(error.message)
}

}



const city = await rl.question("Enetr the city to get weather data - ")
await getWeather(city)
rl.close()
















// const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
// const api = 'https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(search)}&appid=${apiKey}&units=metric'
