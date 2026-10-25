import { cloudflare } from "#lib/model/cloudflare.js";
import { defineAgent } from "eve";

export default defineAgent({
  model: cloudflare('@cf/zai-org/glm-4.7-flash'),
  reasoning: "high",
  modelContextWindowTokens: 131_072
});
