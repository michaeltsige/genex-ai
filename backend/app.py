from flask import Flask
from flask_login import LoginManager, current_user
from flask_cors import CORS
from config import Config
from models import db, User
from auth import configure_auth_routes

# Initialize app
app = Flask(__name__)
app.config.from_object(Config)

# Database setup
db.init_app(app)
with app.app_context():
    db.create_all()

# Authentication setup
login_manager = LoginManager(app)
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# CORS configuration
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# Configure routes
configure_auth_routes(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)