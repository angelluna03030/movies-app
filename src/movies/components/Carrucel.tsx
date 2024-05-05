
import { useState, useEffect, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Box, Typography } from "@mui/material";
import type { MoviesRespon, MoviesShort } from "../interfaces";
interface Props {
    titulo : string;
    slug : string;
}
export const Carrucel: FC<Props> = ({titulo, slug}) => {

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [peliculas, setPeliculas] = useState<MoviesShort[]>([]);

  const obtenerDatos = async () => {
    try {
        const api_key = import.meta.env.VITE_API_KEY; 
        const URL_key = import.meta.env.VITE_URL
      const url =
        `${URL_key}${slug}api_key=${api_key}`;
      const res = await fetch(url);
      const data: MoviesRespon = await res.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("Error al obtener datos:", error);
      // Manejo de errores: podrías mostrar un mensaje al usuario o realizar otras acciones necesarias.
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <Box>
        <Typography fontWeight={"600"} sx={{
            color : "white",
            fontSize : "20px",
            marginBottom : "10px",
        }}>{titulo}</Typography>
    <Swiper
    modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
    >
      {peliculas.map((pelicula) => (
        <SwiperSlide
          key={pelicula.id}

        >
          <img
          style={{
            width : "100%",
            aspectRatio : "16/9",
            objectFit : "cover",
            borderRadius : 10

          }}
        
            alt={pelicula.title}
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </Box>
  );
};
