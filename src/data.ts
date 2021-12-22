import { ActivationStatusEnum } from "@pagopa/io-functions-commons/dist/generated/definitions/ActivationStatus";
import { Activation, ACTIVATION_MODEL_PK_FIELD, ACTIVATION_REFERENCE_ID_FIELD, RetrievedActivation } from "@pagopa/io-functions-commons/dist/src/models/activation";
import { CosmosResource } from "@pagopa/io-functions-commons/dist/src/utils/cosmosdb_model";
import { generateComposedVersionedModelId } from "@pagopa/io-functions-commons/dist/src/utils/cosmosdb_model_composed_versioned";
import { ServiceId } from "@pagopa/io-functions-commons/dist/generated/definitions/ServiceId";
import { NonNegativeInteger } from "@pagopa/ts-commons/lib/numbers";
import { FiscalCode, NonEmptyString } from "@pagopa/ts-commons/lib/strings";

// CosmosResourceMetadata
export const aCosmosResourceMetadata: Omit<CosmosResource, "id"> = {
  _etag: "_etag",
  _rid: "_rid",
  _self: "_self",
  _ts: 1
};
export const aServiceId: ServiceId = "01234567890" as NonEmptyString;
export const aFiscalCode = "AAABBB01C02D345D" as FiscalCode;

export const anActivation: RetrievedActivation = {
  ...aCosmosResourceMetadata,
  id: generateComposedVersionedModelId<
    Activation,
    typeof ACTIVATION_REFERENCE_ID_FIELD,
    typeof ACTIVATION_MODEL_PK_FIELD
  >(aServiceId, aFiscalCode, 1 as NonNegativeInteger),
  fiscalCode: aFiscalCode,
  serviceId: aServiceId,
  status: ActivationStatusEnum.ACTIVE,
  version: 1 as NonNegativeInteger,
  kind: "IRetrievedActivation"
};



