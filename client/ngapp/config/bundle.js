window.CONFIG = {
  "routes": {
    "/highlights/": {
      "controller": "HighlightsCtrl",
      "templateUrl": "/views/highlights.html"
    },
    "/about/": {
      "controller": "HighlightsCtrl",
      "templateUrl": "/views/about.html"
    },
    "/world/": {
      "controller": "WorldCtrl",
      "templateUrl": "/views/world.html"
    },
    "/explore/": {
      "controller": "ExploreViewCtrl",
      "templateUrl": "/views/explore.html"
    },
    "/measurement/:id": {
      "controller": "MeasurementDetailViewCtrl",
      "templateUrl": "/views/view-measurement.html"
    },
    "/country/:id": {
      "controller": "CountryDetailViewCtrl",
      "templateUrl": "/views/country-view.html"
    },
    "/website/:id*": {
      "controller": "WebsiteDetailViewCtrl",
      "templateUrl": "/views/website-view.html"
    }
  }
};
