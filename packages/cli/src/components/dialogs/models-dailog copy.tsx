import { useCallback } from "react";
import { useDialog } from "../../providers/dialog";
import { DialogSearchList } from "../dialog-search-list";
import { Mode } from "@rushcode/database/enums";
import type { SupportedChatModelId } from "@rushcode/shared";

type ModelsDialogContentProps = {
  models: SupportedChatModelId[];
  onSelectMode: (model: SupportedChatModelId) => void;
};


export const ModelsDialogContent = ({
  models,
  onSelectMode,
}: ModelsDialogContentProps) => {
  const dialog = useDialog();

  const handleSelect = useCallback(
    (modelId:SupportedChatModelId) => {
      onSelectMode(modelId);
      dialog.close();
    },
    [onSelectMode, dialog],
  );

  return (
    <DialogSearchList
       items={models}
      onSelect={handleSelect}
      filterFn={(modelId, query) => modelId.toLowerCase().includes(query.toLowerCase())}
      renderItem={(modelId, isSelected) => (
        <text selectable={false} fg={isSelected ? "black" : "white"}>
          {modelId}
        </text>
      )}
      getKey={(modelId) => modelId}
      placeholder="Search models"
      emptyText="No matching models"
    />
  );
};
