export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-8 h-px bg-beige" />
      <span className="label-text">{children}</span>
    </div>
  );
}
