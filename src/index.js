import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import storeConfigure from "./Selector/storeConfigure";
import { AddJobs } from "./Action/addJob";
import "bootstrap/dist/css/bootstrap.css";

const store = storeConfigure();
store.dispatch(AddJobs({ jobTitle: "dev", companyName: "infosys" }));
store.dispatch(AddJobs({ jobTitle: "tester", companyName: "TCS" }));
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
