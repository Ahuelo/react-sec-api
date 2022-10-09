const API_URL = 'https://api.spacexdata.com/v3/launches';

export async function getAllLaunches () {
    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    };
}


export async function getLaunchByFlightNumber(flightNumber){
    try{
        const res = await fetch(`${API_URL}/${flightNumber}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    };
};