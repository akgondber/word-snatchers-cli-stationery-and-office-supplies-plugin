import { first } from "./rounds/first.js";
import { second } from "./rounds/second.js";

class WordSnatchersCliStationeryAndOfficeSuppliesPlugin {
  build() {
    return [first, second];
  }
}

export default WordSnatchersCliStationeryAndOfficeSuppliesPlugin;
