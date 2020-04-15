import "./services/index";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PontCore } from "./services/pontCore";
import { SWRProvider } from "./services/hooks";

PontCore.useFetch((url, options) => {
  return fetch("http://localhost:8080" + url).then(res => res.json());
});

const App: React.FC = () => {
  const [username, changeUsername] = React.useState("pont");
  const { data: userData, isLoading } = API.user.getUserByName.useRequest({
    username
  });
  const {
    data: pets,
    isLoading: isPetsLoading
  } = API.pet.findPetsByTags.useRequest(() => ({
    tags: [userData.phone] as string[]
  }));

  return (
    <SWRProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <input
            type="text"
            value={username}
            onChange={e => changeUsername(e.target.value)}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {isPetsLoading ? (
          <span>loading ...</span>
        ) : (
            pets.map((pet, petIndex) => {
              return <li key={petIndex}>{pet.name}</li>;
            })
          )}
      </div>
    </SWRProvider>
  );
};

export default App;
