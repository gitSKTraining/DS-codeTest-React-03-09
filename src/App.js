import "./App.css";
import UsersListingComponent from "./components/UsersListingComponent";

function App() {
  return (
    <div className="App">
      {/* Component in which allUser data is  dispatched to the store.  */}
      <UsersListingComponent> </UsersListingComponent>
      <br></br>
    </div>
  );
}

export default App;
