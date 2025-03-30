"use client";
import { modelID } from "@/ai/providers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ModelPickerProps {
  selectedModel: modelID;
  setSelectedModel: (model: modelID) => void;
}

const MODELS: Record<modelID, string> = {
  "deepseek-ai/DeepSeek-R1": "A reasoning model",
  "meta-llama/Llama-3.3-70B-Instruct-Turbo": "A reasoning model",
  "Qwen/Qwen2.5-72B-Instruct": "A large model",
};

export const ModelPicker = ({
  selectedModel,
  setSelectedModel,
}: ModelPickerProps) => {
  return (
    <div className="absolute bottom-2 left-2 flex flex-col gap-2">
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(MODELS).map(([modelId]) => (
              <SelectItem key={modelId} value={modelId}>
                {modelId}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
