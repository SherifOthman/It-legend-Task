export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-button/90 hover:bg-button rounded px-4 py-2 font-semibold text-white">
      {children}
    </button>
  );
};
