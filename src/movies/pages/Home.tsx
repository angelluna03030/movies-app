import { MainLayout } from "../layout/index";
import { Carrucel } from "../components/index";
const Home = () => {
  return (
    // biome-ignore lint/correctness/noChildrenProp: <explanation>
    <MainLayout>
      <Carrucel slug="/trending/all/week?" titulo="Lo más Top" />
      <Carrucel slug="/discover/movie?with_genres=12&" titulo="Aventura" />
      <Carrucel slug="/discover/movie?with_genres28&" titulo='Acción'/>

      <Carrucel slug="/discover/movie?with_genres18&" titulo="Drama" />
      <Carrucel slug="/discover/movie?with_genres14&" titulo="Fantasia" />
      <Carrucel slug="/discover/movie?with_genres1&" titulo="Historia" />


    </MainLayout>
  );
};

export default Home;
