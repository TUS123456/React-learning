const Apicall = async() => {
    const response=await fetch("https://randomuser.me/api/",{method:"GET"});
    console.log(response)
    return await response.json();
}

export default Apicall;
