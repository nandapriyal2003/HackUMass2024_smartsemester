from flask import Blueprint, request, jsonify

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if data['username'] == "student" and data['password'] == "password":
        return jsonify({"message": "Login successful", "token": "mock-token"})
    return jsonify({"message": "Invalid credentials"}), 401
