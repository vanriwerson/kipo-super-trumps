import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialNetworkButton from '../SocialNetworkButton';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <SocialNetworkButton
        href="https://github.com/vanriwerson"
        icon={faGithub}
      />
      <SocialNetworkButton
        href="https://www.linkedin.com/in/bruno-riwerson"
        icon={faLinkedin}
      />

      <span>{'<dev> Bruno Riwerson Silva </dev>'}</span>
    </footer>
  );
}
