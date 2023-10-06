import connexion
import six
from typing import Dict
from typing import Tuple
from typing import Union
import json
from openapi_server import util
import os


def load(w):
    return w


def assets_get():  # noqa: E501
    """Get a list of all Assets

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('assets.json')


def incidents_get():  # noqa: E501
    """Get a list of all Incidents

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('incidents.json')


def indicators_of_compromise_get():  # noqa: E501
    """Get a list of all Indicators of Compromise (IoCs)

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('iocs.json')


def threat_actors_get():  # noqa: E501
    """Get a list of all Threat Actors

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return load('actors.json')


def vulnerabilities_get():  # noqa: E501
    """Get a list of all Vulnerabilities

     # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return 1, 200
