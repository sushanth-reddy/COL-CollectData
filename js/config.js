var COL;
if (!COL) {
    COL = {};
}

(function () {

  COL.scenarioDescription = {
      "description" : "Payer/Aggregator retrieves Colorectal Cancer Screening"+
      " Data from Provider using the Collect Data operation. The Provider "+
      "returns the MeasureReport and referenced resources as supporting "+
      "evidence for Colorectal Cancer Screening."
  };
  COL.clientSettings = {
    "client_id": "app-login",
    "scope"    : "user/*.* openid profile"
  };

  COL.collectDataEndpoint = "/Measure/45/$collect-data?";

  COL.providerEndpoints = [{
        "name": "DaVinci COL Provider (Open)",
        "type": "secure-smart",
        // "url": "http://cdex.mettles.com:8080/hapi-fhir-jpaserver/fhir",
        "url": "http://cdex.mettles.com:8181/cqf-ruler/baseDstu3",
        "clientID": "app-login",
    },
    {
        "name": "DaVinci COL Provider (Secure)",
        "type": "open",
        "url": "https://api.logicahealth.org/DaVinciCOLPayer/data",
        "clientID": "a46a1707-b22f-43b0-aa82-9023d84a13e8",
        "scope": "user/*.read"
    }
  ];

  // default configuration
  COL.configSetting = 0; // HSPC Payer Demo (Open)
  COL.providerEndpoint = COL.providerEndpoints[COL.configSetting];

  COL.reportPeriod = 12;

}());
