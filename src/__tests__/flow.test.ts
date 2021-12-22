import { flowTest } from "../flow";
import { performance } from "perf_hooks"
import { mapTest } from "../map";

describe("Test Flow", () => {
  it("test flow execution time", async () => {
    const n = 100000;
    const start = performance.now();
    for (let i = 0; i < n; i++) {
      await Promise.all([
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()(),
        flowTest()()
      ]
      );
    }
    const end = performance.now();
    console.log("FLOW: ", (end - start) / (n * 10));

  });
});

describe("Test Map", () => {
  it("test map execution time", async () => {
    const n = 100000;
    const start = performance.now();
    for (let i = 0; i < n; i++) {
      await Promise.all([
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()(),
        mapTest()()
      ]);
    }
    const end = performance.now();
    console.log("MAP: ", (end - start) / (n* 10));

  });
});