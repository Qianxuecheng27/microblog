from flask import Flask

app = Flask(__name__, static_folder="../../dist/", template_folder="../../dist/")

from app import routes