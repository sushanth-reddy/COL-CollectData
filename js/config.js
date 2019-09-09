var COL;
if (!COL) {
    COL = {};
}

(function () {

  COL.scenarioDescription = {
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
          "            sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
          "            aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
          "            ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
          "            Duis aute irure dolor in reprehenderit in voluptate velit\n" +
          "            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n" +
          "            occaecat cupidatat non proident, sunt in culpa qui officia\n" +
          "            deserunt mollit anim id est laborum."
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
