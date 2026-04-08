import React, { useEffect, useState } from "react";

function UseData() {
  const [apps, setApps] = useState([]);
  const [loading, setLoadig] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/AppData.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoadig(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return { apps, loading };
}

export default UseData;
