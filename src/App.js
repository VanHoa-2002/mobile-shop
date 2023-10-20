import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./pages/routes/routes";
import { DefaultComponent } from "./components/DefaultComponent/DefaultComponent";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((routes) => {
            const Page = routes.page;
            const Layout = routes.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={routes.path}
                path={routes.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
