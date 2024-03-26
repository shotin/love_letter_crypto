import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routing/routes";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              // element={
              //   route.protected ? (
              //     <PrivateRoute>{route.element}</PrivateRoute>
              //   ) : (
              //     route.element
              //   )
              // }
              element={route.element}
            />
          ))}
          <Route path="*" element={<NotFound />} /> {/* Wildcard route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
