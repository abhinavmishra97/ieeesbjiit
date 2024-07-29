import React, { useState, useEffect, Fragment } from "react";
import Home from "./routes/home.component";
import Preloader from "./ui/preloader/preloader.component";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // fpr changing the delay duration of preloader
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <Home />
      )}
    </Fragment>
  );
};

export default App;
