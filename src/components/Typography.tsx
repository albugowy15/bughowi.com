import clsx from "clsx";

export type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2"
  | "body3"
  | "label1"
  | "label2";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5";

const variantsMapping: Record<TypographyVariants, Heading | "p"> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body1: "p",
  body2: "p",
  body3: "p",
  label1: "p",
  label2: "p",
};

type TypographyProps<T extends React.ElementType> = {
  variant: TypographyVariants;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const Typography = <T extends React.ElementType>({
  variant,
  children,
  className,
  ...props
}: TypographyProps<T>) => {
  const Component = variantsMapping[variant];

  return (
    <Component
      className={clsx(
        [
          variant === "h1" && "text-2xl font-bold lg:text-3xl text-white",
          variant === "h2" && "text-xl font-bold lg:text-2xl text-white",
          variant === "h3" && "text-lg font-bold lg:text-xl text-white",
          variant === "h4" && "font-bold text-lg text-white",
          variant === "h5" && "text-lg font-semibold text-white",
          variant === "body1" && "text-base text-slate-200",
          variant === "body2" && "text-sm text-slate-200",
          variant === "body3" && "text-xs text-slate-200",
          variant === "label1" && "text-sm font-medium text-slate-200",
          variant === "label2" && "text-xs font-medium text-slate-200",
        ],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
