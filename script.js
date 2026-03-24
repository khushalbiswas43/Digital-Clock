function updateClock() {
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Time Format Logic
    // Format hours, minutes, and seconds to be 2 digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
   
    let ampm = hours >= 12 ? "PM" : "AM";
    timeString += " " + ampm;
  
    document.getElementById("time").innerText = timeString;

    // Date Logic
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric"}; 


    // let dateString1= now.toLocaleDateString("en-IN", options);

    let dateString2= now.toLocaleDateString("hi-IN", options);

    
     document.getElementById("date").innerText = dateString2;

    // document.getElementById("date").innerText = dateString1 + " | " + dateString2; // ye line dono date ko ek sath show karega, agar aapko sirf ek hi date show karna hai to is line ko comment kar dein aur upar wali line ka comment hata dein
}    

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();