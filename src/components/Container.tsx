interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`max-w-screen-lg mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
