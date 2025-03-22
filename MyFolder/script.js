let hrs = document.getElementById("hrs");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
        let ampm = document.getElementById("ampm");
        let dateDisplay = document.getElementById("date");
        let alarmSound = document.getElementById("alarmSound");
        let alarmTimeInput = document.getElementById("alarmTime");
        let clock = document.getElementById("clock");

        function updateClock() {
            let now = new Date();
            let hours = now.getHours();
            let meridian = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12; 
            
            hrs.innerHTML = hours.toString().padStart(2, "0");
            min.innerHTML = now.getMinutes().toString().padStart(2, "0");
            sec.innerHTML = now.getSeconds().toString().padStart(2, "0");
            ampm.innerHTML = meridian;
            dateDisplay.innerHTML = now.toDateString();
            
            let currentTime = now.toTimeString().slice(0, 5);
            if (alarmTimeInput.value === currentTime) {
                alarmSound.play();
            }
        }

        document.getElementById("setAlarm").addEventListener("click", () => alert("Alarm set for " + alarmTimeInput.value));
        setInterval(updateClock, 1000);
        updateClock();