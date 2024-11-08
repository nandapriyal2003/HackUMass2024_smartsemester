def create_schedule(data):
    schedule = []
    for course in data['courses']:
        schedule.append({
            "course": course['name'],
            "start_time": course['start_time'],
            "end_time": course['end_time'],
            "location": course['location']
        })
    return {"schedule": schedule}
