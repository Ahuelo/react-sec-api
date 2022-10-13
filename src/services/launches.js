const API_URL = 'https://api.spacexdata.com/v3';

export async function getAllLaunches () {
    try{
        const res = await fetch(`${API_URL}/launches`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    };
}


export async function getLaunchByFlightNumber(flightNumber){
    try{
        const res = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    };
};

export async function getRocketById(rocketId){
    try{
        const res = await fetch(`${API_URL}/rockets/${rocketId}`);
        const data = await res.json();
        return data;
    } catch(error){
        console.log(error);
    };
};