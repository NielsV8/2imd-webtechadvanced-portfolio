export default class App{
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        this.lat = 0;
        this.lng = 0;
        this.getLocation();
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(this.locationSuccess.bind(this), this.locationError.bind(this));
    }

    locationSuccess(location){
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        this.getWeather();
    }

    getWeather(){
        console.log("Getting weather");
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.lat}&lon=${this.lng}&appid=${this.API_KEY}`;
        fetch(url).then((res)=>{
           return res.json();
        }).then((json)=>{
            console.log(json);
            this.printWeather(json);
        }).catch( err => {
            console.log(err);
        }).finally(()=>{
            console.log("finally done");
        });
    }

    printWeather(json){
        let summary = json.weather[0].description;
        let temp = Math.round(json.main.temp);
        document.querySelector("h1").innerHTML = summary;
        document.querySelector("h2").innerHTML = temp + "°";
        console.log(temp); 
    }

    locationError(err){
        console.log(err);
    }
}