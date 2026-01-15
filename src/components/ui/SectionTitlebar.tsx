type Props = {
  text: string;
  description?: string;
  className?: string;
};

export default function SectionTitlebar({
  description,
  text,
  className,
}: Props) {
  return (
    <div className="my-10 mb-10 flex h-fit w-full flex-col items-center justify-center md:flex-row md:justify-start">
      <h3 className="bg-primary rounded-sm px-1.5 text-[24px] font-semibold xl:text-2xl 2xl:text-3xl">
        {text}
        <span className="hidden md:inline">{':'}</span>
      </h3>
      {description && (
        <p className="mx-5 mt-5 max-w-150 text-sm md:mx-2 md:mt-0">
          {description}
        </p>
      )}
    </div>
  );
}
