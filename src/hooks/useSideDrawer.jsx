'use client';
import { useState } from 'react';

export const useSideDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return { open, handleDrawer };
};
