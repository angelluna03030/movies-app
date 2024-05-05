import AppRouter from "./movies/router/AppRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css"
const App = () => {
  //asi se instacia el route para poder ser utilizado
  return <AppRouter />;
};

export default App;
