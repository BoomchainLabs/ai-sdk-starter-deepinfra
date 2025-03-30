import { deepinfra } from "@ai-sdk/deepinfra";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

// custom provider with different model settings:
export const model = customProvider({
  languageModels: {
    "meta-llama/Llama-3.3-70B-Instruct-Turbo": wrapLanguageModel({
      middleware: extractReasoningMiddleware({
        tagName: "think",
      }),
      model: deepinfra("meta-llama/Llama-3.3-70B-Instruct-Turbo"),
    }),
    "deepseek-ai/DeepSeek-R1": wrapLanguageModel({
      middleware: extractReasoningMiddleware({
        tagName: "think",
      }),
      model: deepinfra("deepseek-ai/DeepSeek-R1"),
    }),
    "Qwen/Qwen2.5-72B-Instruct": deepinfra("Qwen/Qwen2.5-72B-Instruct"),
  },
});

export type modelID = Parameters<(typeof model)["languageModel"]>["0"];
