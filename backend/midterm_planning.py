def check_midterm_conflicts(data):
    conflicts = []
    for midterm in data['midterms']:
        conflicts.append({
            "course": midterm['course'],
            "conflict": False  # Simplified conflict detection
        })
    return {"conflicts": conflicts}
