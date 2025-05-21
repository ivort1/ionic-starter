import "./FloatingActionButton.css";

interface FloatingActionButtonProps {
  href: string;
  icon?: React.ReactNode;
  text?: string;
}

export default function FloatingActionButton({ href, icon, text }: FloatingActionButtonProps) {
  return (
    <a href={href} className="floating-action-button" target="_blank" rel ="noopener noreferrer">
      { icon } { text }
    </a>
  );
}