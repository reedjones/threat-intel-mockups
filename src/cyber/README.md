{
  "Entities": {
    "ThreatActors": {
      "Attributes": ["ID", "Name", "Description", "Motivation", "TTPs"]
    },
    "IndicatorsOfCompromise": {
      "Attributes": ["ID", "Type", "Value", "Description", "AssociatedThreatActors"]
    },
    "Incidents": {
      "Attributes": ["ID", "Title", "Description", "Severity", "DateTime", "AssociatedIoCs", "AffectedSystems"]
    },
    "Vulnerabilities": {
      "Attributes": ["ID", "CVEID", "Description", "AffectedSoftware", "Severity", "PatchStatus"]
    },
    "Assets": {
      "Attributes": ["ID", "Name", "Description", "Type", "CriticalityLevel"]
    }
  },
  "Relationships": {
    "ThreatActor_Incident": {
      "Description": "Threat Actors associated with Incidents",
      "RelatedEntities": ["ThreatActors", "Incidents"]
    },
    "Incident_IoC": {
      "Description": "Incidents linked to Indicators of Compromise",
      "RelatedEntities": ["Incidents", "IndicatorsOfCompromise"]
    },
    "IoC_ThreatActor": {
      "Description": "Indicators of Compromise associated with Threat Actors",
      "RelatedEntities": ["IndicatorsOfCompromise", "ThreatActors"]
    },
    "Vulnerability_Incident": {
      "Description": "Vulnerabilities related to Incidents",
      "RelatedEntities": ["Vulnerabilities", "Incidents"]
    },
    "Asset_Incident": {
      "Description": "Assets affected by Incidents",
      "RelatedEntities": ["Assets", "Incidents"]
    }
  }
}
