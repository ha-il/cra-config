import React, { ReactNode, createContext, useContext, useMemo } from 'react';
import CatServiceImplement from 'services/CatService';

type CatMethods = {
  getNewCat: () => Promise<string>;
};

type CatContextType = CatMethods | null;

const CatContext = createContext<CatContextType>(null);

export const useCat = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error('useCat must be used within an CatProvider');
  }
  return context;
};

type CatProviderProps = {
  children: ReactNode;
  catService: CatServiceImplement;
};

function CatProvider({ children, catService }: CatProviderProps) {
  const getNewCat = catService.getNewCat.bind(catService);

  const contextValue = useMemo(() => ({ getNewCat }), [getNewCat]);

  return (
    <CatContext.Provider value={contextValue}>{children}</CatContext.Provider>
  );
}

export default CatProvider;
