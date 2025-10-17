import { CurrentVideoProvider } from "@/contexts/CurrentVideoContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CurrentVideoProvider>{children}</CurrentVideoProvider>;
};
