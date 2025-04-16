from flask import jsonify, request
from flask_login import login_user, logout_user, login_required
from models import db, User

def configure_auth_routes(app):
    @app.route('/api/register', methods = ['POST'])
    def register():
        data = request.get_json()
        #data is user registering data in json format

        if User.query.filter_by(email=data['email']).first():
            return jsonify({"message": "Email already exists"}) # statud code 409
        
        user = User(email = data['email'], name= data['name'])
        user.set_password(data['password'])

        db.session.add(user)
        db.session.commit()

        return jsonify({"message": "User Created"}) # 201
    
    @app.route('/api/login', methods= ['POST'])
    def login():
        data = request.get_json()
        # data is user login details

        user = User.query.filter_by(email = data['email']).first()

        if not user or user.check_password(data['password']):
            return jsonify({"message": "invalid credentials"})
        
        #built in flask login session management
        login(user)

        return jsonify({'message': 'Logged in', 'user': {
            'id': user.id,
            'name': user.name,
            'email': user.email
        }})
    @app.route('/api/logout', methods=['POST'])
    def logout():
        logout_user()
        return jsonify({"message": "Logged out"})

