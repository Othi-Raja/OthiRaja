import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import '../App.css'
import 'w3-css';
const Networkerr = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      try {
        // Simulating a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Network Error:", error);
        // Handle network error (e.g., show error message)
      } finally {
        // Set loading to false when the operation is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run this effect only once on component mount

  return (
    <div className="loader">
      {loading ? (
        // Render the loader while loading is true
        <BarLoader color={"red"} style={{ width: '100%' }} loading={loading} />
      ) : (
        // Render the children when loading is false
        children
      )}
    </div>
  );
};

export default Networkerr;
