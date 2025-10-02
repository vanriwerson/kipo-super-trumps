import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import './style.css';

interface SocialNetworkButtonProps {
  icon: IconProp;
  href: string;
}

export default function SocialNetworkButton({
  icon,
  href,
}: SocialNetworkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
