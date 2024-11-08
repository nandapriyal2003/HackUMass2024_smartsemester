from flask import Flask, jsonify, request
from scheduling import create_schedule
from midterm_planning import check_midterm_conflicts
from auth import auth_blueprint

app = Flask(__name__)
app.register_blueprint(auth_blueprint, url_prefix='/auth')

@app.route('/api/schedule', methods=['POST'])
def schedule():
    data = request.get_json()
    schedule = create_schedule(data)
    return jsonify(schedule)

@app.route('/api/midterms', methods=['POST'])
def midterms():
    data = request.get_json()
    conflicts = check_midterm_conflicts(data)
    return jsonify(conflicts)

if __name__ == '__main__':
    app.run(debug=True)
