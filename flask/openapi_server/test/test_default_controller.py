# coding: utf-8

from __future__ import absolute_import
import unittest

from flask import json
from six import BytesIO

from openapi_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_assets_get(self):
        """Test case for assets_get

        Get a list of all Assets
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/assets',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_incidents_get(self):
        """Test case for incidents_get

        Get a list of all Incidents
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/incidents',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_indicators_of_compromise_get(self):
        """Test case for indicators_of_compromise_get

        Get a list of all Indicators of Compromise (IoCs)
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/indicators-of-compromise',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_threat_actors_get(self):
        """Test case for threat_actors_get

        Get a list of all Threat Actors
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/threat-actors',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_vulnerabilities_get(self):
        """Test case for vulnerabilities_get

        Get a list of all Vulnerabilities
        """
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/vulnerabilities',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
