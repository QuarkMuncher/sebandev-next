export default function Author({name, className}) {
  return (
    <address className={`text-sm ${className}`}>{name}</address>
  );
}
