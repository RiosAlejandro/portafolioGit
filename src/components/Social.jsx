import { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { dataSocial } from '../data/dataSocial';

const Social = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataSocial);
  }, []);

  return(
    <article className="social">
      {
        data.map((d, index) => (
          <div className="ArticleSocial" key={index}>
            <div className="socialImg">
              {
                d.name === "linkedin"
                ? <LinkedInIcon />
                : <GitHubIcon />
              }
            </div>
            <div className="socialLink">
              <a href={d.link} target='_blank'>{d.link}</a>
            </div>
          </div>
        ))
      }
    </article>
  );
};

export default Social;
