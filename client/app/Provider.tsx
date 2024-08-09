import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/features/store";

interface ProvidersProps {
  children: any;
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted === false) {
    return null;
  }
  return <Provider store={store}>{children}</Provider>;
}
