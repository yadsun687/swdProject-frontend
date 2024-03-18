
export default async function getHospitals(){

    await new Promise( resolve => setTimeout(resolve , 1000));
    const response = await fetch("https://vaccine-app-backend.vercel.app/api/v1/hospitals")
    if(!response.ok) throw new Error("Cannot fetched hospitals")
    return await response.json();
}