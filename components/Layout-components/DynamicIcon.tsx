// components/DynamicIcon.tsx
import dynamic from "next/dynamic";

interface IconProps {
  name: string;
  url: string;
}

// Utility function to dynamically import the icon component
const loadIcon = (iconName: string) =>
  dynamic(() =>
    import("lucide-react").then((mod) => {
      const IconComponent = mod[
        iconName as keyof typeof mod
      ] as React.ComponentType;
      if (!IconComponent) {
        throw new Error(`Icon "${iconName}" not found in lucide-react`);
      }
      return IconComponent;
    })
  );

const DynamicIcon = ({ name, url }: IconProps) => {
  const ImportedIcon = loadIcon(name);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ImportedIcon />
    </a>
  );
};

export default DynamicIcon;
