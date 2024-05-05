/**para hacer el en rutamiendo de utiliza dos cosas que react route, el Routes, Route */
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <div>
      <Routes>
        {/**para utlizar Route : se le especifica url con el path, y ya el que se va a mostrar con element  */}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <Route path="/login" element={<h1>login</h1>}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Navigate  to="/home"/>} />

      </Routes>
    </div>
  );
}

export default AppRouter;
