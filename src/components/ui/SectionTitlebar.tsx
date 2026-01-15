import { cn } from '@/lib/utils';

type Props = {
  text: string;
  description?: string;
  textClassName?: string;
  descriptionClassName?: string;
};

export default function SectionTitlebar({
  description,
  text,
  textClassName,
  descriptionClassName,
}: Props) {
  return (
    <div className="my-10 mb-10 flex h-fit w-full flex-col items-center justify-center md:flex-row md:justify-start">
      <h3
        className={cn(
          'bg-primary rounded-sm px-1.5 text-[24px] font-semibold xl:text-2xl 2xl:text-3xl',
          textClassName,
        )}
      >
        {text}
        <span className="hidden md:inline">{':'}</span>
      </h3>
      {description && (
        <p
          className={cn(
            'mx-5 mt-5 max-w-150 text-center text-sm md:mx-2 md:mt-0 sm:text-left',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
