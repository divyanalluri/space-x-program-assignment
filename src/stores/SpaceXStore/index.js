import { observable, action } from "mobx";

class SpaceXStore {
  @observable isSelectedYear;
  @observable launchValue;
  @observable landingValue;
  constructor() {
    this.init();
  }

  init() {
    this.isSelectedYear = "";
    this.launchValue = "";
    this.landingValue = "";
  }

  @action.bound
  setSelectedYear(value) {
    console.log(value);
    this.isSelectedYear = value;
  }

  @action.bound
  setLaunchValue(value) {
    this.launchValue = value;
  }

  @action.bound
  setLandingValue(value) {
    this.landingValue = value;
  }

  getLaunchValues = () => {
    return ["True", "False"];
  };

  getYears = () => {
    return [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ];
  };
}

export default SpaceXStore;
