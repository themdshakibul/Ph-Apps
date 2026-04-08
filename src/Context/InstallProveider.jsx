import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const InstallAppContext = createContext();

const InstallProveider = ({ children }) => {
  const [installApp, setInstallApp] = useState([]);

  const data = {
    installApp,
    setInstallApp,
  };

  return (
    <InstallAppContext.Provider value={data}>
      {children}
    </InstallAppContext.Provider>
  );
};

export default InstallProveider;
