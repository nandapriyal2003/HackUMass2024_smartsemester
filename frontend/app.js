function fetchSchedule() {
    fetch('/api/schedule', {
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
        document.getElementById("schedule").innerHTML = JSON.stringify(data.schedule, null, 2);
    });
}
