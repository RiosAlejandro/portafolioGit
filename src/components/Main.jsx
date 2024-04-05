/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GradeIcon from '@mui/icons-material/Grade';
import { Projects } from '../data/data';


const Main = ({dataFilter}) => {

  let filtro =[];
  const [data, setData] = useState();

  useEffect(() => {
    filtro = Projects.filter(p => p.type === dataFilter);
    setData(filtro);
  }, [dataFilter]);

  

  return(
    <>
      { 
        data?.map((p, index) => (
        <main className="areaMain" key={index}>
          <div className='mainGalerry'>
            <Box sx={{ width: 500, height: 450, overflowY: 'auto' }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {p.img.map((item, index) => (
                  <ImageListItem key={item.img}>
                    <img
                      key={index}
                      srcSet={`/proyect/${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`/proyect/${item}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
          <div className='mainDescription'>
            <h2>{p.title}</h2>
            <p>{p.text}</p>
              {
                p.tecnologias.map((item, index) => (
                  <div key={index} className='mainTecnologies'>
                    <GradeIcon />
                    <span>{item}</span>
                  </div>
                ))
              }
            <a href={p.codigo} target='_blank'>Código</a>
          </div>
        </main>
      ))
      }
    </>
    
  );
}

export default Main;
