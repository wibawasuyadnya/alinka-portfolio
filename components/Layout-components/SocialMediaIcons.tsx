// components/SocialIcons.tsx
interface SocialIconProps {
  url: string | null;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ url, icon }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      {url && (
        <button onClick={handleClick} className="inline-flex items-center mr-2">
          {icon}
        </button>
      )}
    </div>
  );
};

export default SocialIcon;
