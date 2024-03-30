import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const BASE_URL = "https://strapieportfolio.onrender.com/";
  const PROFILE = "api/profiles";

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}${PROFILE}?populate=*`, {
        headers: {
          Authorization:
            "Bearer 2657a604f76faa0338b46dc6bd68a6d0c1271c9c8b0f0effa7c1f63d67c0f2b99696dd62761bf99f431927839ad5a98445124b329933867538590bf81f29331ebfa31e7bd43cdc54b9b69c602215d9889cfc48ce53440be17dadc5e40e2a632f439bcd554dcdfb8bceed6ce7cd85b131272906cf1df4f589d109aa5fbc9cd8db",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      setProfile(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ profile}}>{children}</DataContext.Provider>
  );
};

const useDataProvider = () => {
  return useContext(DataContext);
};

export { DataContext, DataProvider, useDataProvider };
