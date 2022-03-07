import { useCallback, useState } from "react";

/**
 * hook for modal control
 */

export default function useModal(initialOpen?: boolean) {
  const [isOpen, setIsOpen] = useState(initialOpen || false);
  const [meta, setMeta] = useState<unknown>();

  const close = useCallback(() => {
    setIsOpen(false);
    setMeta("");
  }, []);

  const open = useCallback((_meta?: unknown) => {
    setIsOpen(true);
    if (_meta) setMeta(_meta);
  }, []);

  return { isOpen, close, open, meta };
}
