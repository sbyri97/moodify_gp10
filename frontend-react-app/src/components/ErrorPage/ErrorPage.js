import React, { useEffect, useState } from "react";
import './ErrorPage.css'

function ErrorPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <div className="error-main-container">
        <div className="error-sub-container">
            <h1 className="error-404">Error:</h1>
            <h2 className="error-not-found">Our server is not in the mood.</h2>
            <img className="error-gif" src="https://i.gifer.com/MhHf.gif" alt="error_gif"></img>
        </div>
    </div>
  )
}

export default ErrorPage;