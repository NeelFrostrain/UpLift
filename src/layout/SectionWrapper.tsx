import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className }: Props) {
  return (
    <div
      className={cn(
        'mt-10 flex h-full w-full items-center justify-center px-2 py-10 md:px-10 md:py-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
