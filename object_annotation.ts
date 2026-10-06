let todaysWeather:{date:Date, weather:string} = {
    date : new Date(),
    weather : 'sunny'
}

let logWeather = (forecast:{date:Date, weather:string}):void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}