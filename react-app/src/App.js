import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const fetchData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setData(data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <table className="bordered">
          <thead>
            <tr>
              <th>Store ID</th>
              <th>Store Area</th>
              <th>Items Available</th>
              <th>Daily Customer Count</th>
              <th>Store Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((store) => (
              <tr key={store.Store_ID}>
                <td>{store.Store_ID}</td>
                <td>{store.Store_Area}</td>
                <td>{store.Items_Available}</td>
                <td>{store.Daily_Customer_Count}</td>
                <td>{store.Store_Sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};
export default App;
