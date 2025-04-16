from flask import Flask
from flask_login import LoginManager, current_user
from flask_cors import CORS
from config import Config
from models import db, User
from auth import configure_auth_routes