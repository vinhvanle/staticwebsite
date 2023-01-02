function getDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    document.getElementById("date").innerHTML = currentDate;

}


function getTime(){
    const d = new Date();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    let currentTime = `${hour}h-${minute}m-${second}s`;
    document.getElementById("time").innerHTML = currentTime;   
}