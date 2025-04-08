'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Paper, Typography } from "@mui/material";
import CardAnuncio from "./ui/CardAnuncio";
import Navbar from "./ui/navbar";
import { Parallax } from "react-parallax";
import image1 from "@/app/images/Carnes.jpg"
import { Height } from "@mui/icons-material";
import ParallaxCustom from "./ui/ParallaxCustom";
export default function Home() {
  return (
      <main>
       <Navbar />
       <ParallaxCustom image="/logof.png" vh="50vh"/>
       <CardAnuncio imagen="/viewback.jpg">
          View es un restaurante que nace buscando satisfacer a los paladares más exigentes. El nombre es alusivo a la vista inigualable que tiene el restaurante del departamento de Cochabamba. El restaurante fue diseñado para brindar la mejor comodidad a nuestros clientes.
       </CardAnuncio>
       <ParallaxCustom image="/Carnes.jpg"/>
       <CardAnuncio imagen="/Carnes.jpg" number={1}>
       Inicia tu semana con la excelencia de View. Disfruta de las mejores carnes premium🍴
       Te esperamos con la mejor vista de la ciudad✨
       </CardAnuncio>
       <ParallaxCustom image="/coctel.jpg"/>
       <CardAnuncio imagen="/coctel.jpg">
       ¿Ya probaste la mejor coctelería de #Cochabamba? Pues acabas de encontrar el lugar ideal 🤩
       Inicia tu semana de la mejor manera
       </CardAnuncio>
       <ParallaxCustom image="/cumple.jpg"/>
       <CardAnuncio imagen="/cumple.jpg" number={3}>
       Tu día especial se celebra en un lugar de lujo 
        Este mes tu cumpleaños se pasa en View🎂🎈.
        Contamos con un paquete cumpleañero para que puedas compartir tu felicidad con tus seres queridos.
       </CardAnuncio>
       <ParallaxCustom image="/roman.jpg"/>
       <CardAnuncio imagen="/roman.jpg">
       ¡Somos el lugar ideal para que tengas la mejor cena romántica con tu pareja! 
       😍Tenemos dos paquetes especiales para que tu cena sea inolvidable ✨Ven y degusta de sabores inigualables.
       </CardAnuncio>
       <ParallaxCustom image="/rib.jpg" />
       <CardAnuncio imagen="/rib.jpg" number={5}>
       La excelencia la encuentras en view 🤩
       ✨disfruta de las mejores carnes premium de la ciudad 🍴
       </CardAnuncio>


      </main>
  );
}
