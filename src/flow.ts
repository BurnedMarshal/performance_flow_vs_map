import { flow, pipe } from "fp-ts/lib/function";
import { anActivation } from "./data";
import * as TE from "fp-ts/TaskEither";
import { toApiServiceActivation } from "@pagopa/io-functions-commons/dist/src/utils/activations";
import { ResponseSuccessJson } from "@pagopa/ts-commons/lib/responses";

export function flowTest() {
  return pipe(
    TE.of(anActivation),
    TE.map(flow(toApiServiceActivation, ResponseSuccessJson)),
    TE.toUnion
  )
}