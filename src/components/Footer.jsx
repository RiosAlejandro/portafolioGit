import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles.css";


const Footer = () => {

  return (
    <div className='footer'>
      <div>
        <p>© 2024 Alejandro Rios</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/oscaralejandrorios-93a" target='_blank'>
          <LinkedInIcon />
        </a>
        <a href="https://github.com/RiosAlejandro" target='_blank'>
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
