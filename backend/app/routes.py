from app import app
from flask import jsonify, request, render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/test')
def test():
    return "hello!!!!!"