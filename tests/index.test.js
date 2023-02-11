import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliStationeryAndOfficeSuppliesPlugin from "../index.js";

let wordSnatchersCliStationeryAndOfficeSuppliesPlugin;

test.before.each(() => {
  wordSnatchersCliStationeryAndOfficeSuppliesPlugin =
    new WordSnatchersCliStationeryAndOfficeSuppliesPlugin();
});

test("WordSnatchersCliStationeryAndOfficeSuppliesPlugin#build", () => {
  const items = wordSnatchersCliStationeryAndOfficeSuppliesPlugin.build();

  items.map((round) =>
    round.map((item) => {
      assert.ok(item.definition.length > 4 && item.word.length > 1);
    })
  );
});

test.run();
