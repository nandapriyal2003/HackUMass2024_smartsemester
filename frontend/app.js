function fetchSchedule() {
    fetch('http://127.0.0.1:5000/api/schedule', {  // Correct URL for the Flask backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            courses: [
                { name: "Math", start_time: "09:00", end_time: "10:00", location: "Building A" },
                { name: "Science", start_time: "10:15", end_time: "11:15", location: "Building B" }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display the schedule in a more readable format
        const scheduleDiv = document.getElementById("schedule");
        scheduleDiv.innerHTML = "<h2>Your Schedule:</h2>";
        
        data.schedule.forEach(course => {
            scheduleDiv.innerHTML += `
                <p>
                    Course: ${course.course} <br>
                    Start Time: ${course.start_time} <br>
                    End Time: ${course.end_time} <br>
                    Location: ${course.location}
                </p>
                <hr>
            `;
        });
    })
    .catch(error => console.error("Error fetching schedule:", error));
}
