// components/SocialIcons.tsx
import React from 'react';
import DynamicIcon from './DynamicIcon';

interface SocialIconsProps {
  icons: { name: string; url: string }[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className="social-icons">
      {icons.map((icon, index) => (
        <DynamicIcon key={index} name={icon.name} url={icon.url} />
      ))}
    </div>
  );
};

export default SocialIcons;
