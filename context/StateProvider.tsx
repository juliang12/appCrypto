import { createContext, ReactNode, useMemo, useState } from "react";

type Props = {
  children?: ReactNode;
};

export const StateContext = createContext(null);

const StateProvider = ({ children }: Props) => {
  const [getIdCoin, setGetIdCoin] = useState<any[]>([]);

  const contextValues = useMemo(
    () => ({ getIdCoin, setGetIdCoin }),
    [getIdCoin]
  );
  return (
    <StateContext.Provider value={contextValues}>
      {children}
    </StateContext.Provider>
  );
};
export { StateProvider };
