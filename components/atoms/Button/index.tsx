interface ButtonProps {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset",
  backgroundColor?: string,
  width?: number,
  height?: number,
  borderRadius?: number,
  onClick?: () => void
}

export default function Button( props : ButtonProps) {
  const {
    children,
    type,
    backgroundColor,
    width,
    height,
    borderRadius,
    onClick,
  } = props;
  return (
    <button
      type={type}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </button>
  );
}
