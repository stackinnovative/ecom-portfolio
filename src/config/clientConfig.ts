// // src/config/clientConfig.ts
import { DEFAULT_CONFIG } from "./clients/default";
import { SANORA_CLOTHING } from "./clients/sanora";
import { JEWELS_BY_REEM } from "./clients/jwelsByReem";
import { LUMEA_COUTURE } from "./clients/lumea";
import { MAROON_VASTRA } from "./clients/maroonVasthar";

export const clientConfigs = {
  default: DEFAULT_CONFIG,
  sanora: SANORA_CLOTHING,
  "jewels-by-reem": JEWELS_BY_REEM,
  lumea: LUMEA_COUTURE,
  maroonvastra: MAROON_VASTRA,
};
