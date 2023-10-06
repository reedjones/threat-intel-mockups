#!/usr/bin/env python3


from flask import Flask
import os
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def hello_world():
    return "<p>Hello, World!</p>"

def load(w):
    with open(os.path.join('api', w)) as f:
        data = json.load(f)
    return data
@cross_origin()
@app.route("/assets")
def assets_get():  # noqa: E501
    """Get a list of all Assets

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('assets.json')
@cross_origin()
@app.route("/incidents")
def incidents_get():  # noqa: E501
    """Get a list of all Incidents

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('incidents.json')


@cross_origin()
@app.route("/indicators-of-compromise")
def indicators_of_compromise_get():  # noqa: E501
    """Get a list of all Indicators of Compromise (IoCs)

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('iocs.json')
@cross_origin()
@app.route("/threat-actors")
def threat_actors_get():  # noqa: E501
    """Get a list of all Threat Actors

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('actors.json')
@cross_origin()
@app.route('/vulnerabilities')
def vulnerabilities_get():  # noqa: E501
    """Get a list of all Vulnerabilities

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('vulns.json')




