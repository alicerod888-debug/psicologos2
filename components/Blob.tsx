export default function Blob({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute rounded-[60%_40%_30%_70%/60%_30%_70%_40%] ${className}`} />;
}
