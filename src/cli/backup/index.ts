import * as list from "./list.js";
import * as create from "./create.js";

export default function (_: any) {
  _.command([
    list,
    create,
  ]).demandCommand(1, "You need at least one command before moving on");
}