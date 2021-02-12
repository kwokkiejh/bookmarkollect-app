import React from "react";

const useItemMoreOptions = () => {
  const [
    itemMenuAnchorEl,
    setItemMenuAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const [itemDrawerOpen, setItemDrawerOpen] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState<null | number>(
    null
  );
  const handleItemMoreOptionsOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    setItemMenuAnchorEl(event.currentTarget);
    setItemDrawerOpen(true);
    setSelectedItemId(id);
  };

  const handleItemMoreOptionsClose = () => {
    setItemMenuAnchorEl(null);
    setItemDrawerOpen(false);
    setSelectedItemId(null);
  };

  return {
    handleItemMoreOptionsOpen,
    handleItemMoreOptionsClose,
    itemMenuAnchorEl,
    itemDrawerOpen,
    selectedItemId,
  };
};
export default useItemMoreOptions;
