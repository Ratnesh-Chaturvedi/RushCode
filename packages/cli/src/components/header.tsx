export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
        <ascii-font font="block" text="Rush" color="#DC143C" />
        <ascii-font font="block" text="Code" color="#4169E1" />
      </box>
    </box>
  );
};