from app import app, db
from app.models import User
from flask import jsonify, request, render_template, abort, Response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data.get('username')).first()
    if user is None or not user.check_password(data.get('password')):
        return jsonify({ 'flag': 'failed', 'message': '用户名或密码错！' })
    else:
        token = user.generate_auth_token()
        return jsonify({ 
            'flag': 'success', 
            'user': {
                'id': user.id,
                'username': user.username,
                'token': token
            }
        })

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    user = User.query.filter_by(username=data.get('username')).first()
    if user is not None:
        return '用户名已注册'
    user = User.query.filter_by(email=data.get('email')).first()
    if user is not None:
        return '该邮箱已被注册'
    user = User(username=data.get('username'), email=data.get('email'))
    user.set_password(data.get('password'))
    db.session.add(user)
    db.session.commit()
    return 'success'

@app.route('/api/vertify_token', methods=['POST'])
def vertifyToken():
    data = request.get_json() 
    token = data['token'].encode()
    user = User.vertify_auth_token(token)
    if user is not None and user.id == data['id']:
        return 'success'
    else:
        return 'failed'
