import { cn } from "@/utils/cn";

export const SectionTitle = ({
  children,
  className,
  ...res
}: React.ComponentProps<"h1">) => {
  return (
    <h2
      className={cn("my-8 text-3xl font-semibold text-gray-800", className)}
      {...res}
    >
      {children}
    </h2>
  );
};
