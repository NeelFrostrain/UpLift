import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  primaryText: string;
  secondaryText: string;
  imageUrl: string;
  bgColor?: string;
  textBgColor?: string;
};

export default function ServiceCard({
  primaryText,
  secondaryText,
  imageUrl,
  bgColor,
  textBgColor,
}: Props) {
  return (
    <div
      className={cn(
        'bg-background flex h-60 w-full items-center justify-center gap-2 rounded-4xl border-2 p-8 shadow-[0_5px_0_0_rgba(0,0,0,1)] transition-all duration-150 ease-in-out hover:scale-105',
        bgColor ? bgColor : 'bg-background',
      )}
    >
      <div className="flex h-full flex-1 flex-col items-start justify-between">
        <div className="flex w-full flex-col gap-0.5">
          <h1
            className={cn(
              'bg-primary w-fit rounded-md px-1.5 py-0.5 text-xl font-medium',
              textBgColor ? textBgColor : 'bg-primary',
            )}
          >
            {primaryText}
          </h1>
          <h1
            className={cn(
              'bg-primary w-fit rounded-md px-1.5 py-0.5 text-xl font-medium',
              textBgColor ? textBgColor : 'bg-primary',
            )}
          >
            {secondaryText}
          </h1>
        </div>

        <div className="flex items-center justify-start gap-2">
          <div
            className={cn(
              'text-primary w-fit rounded-full bg-black p-1',
              bgColor === 'bg-card-foreground' ? 'bg-white' : 'bg-black',
            )}
          >
            <ArrowUpLeft
              className={cn(
                'rotate-90 rounded-full',
                bgColor === 'bg-card-foreground'
                  ? 'text-black'
                  : 'text-primary',
              )}
              size={30}
            />
          </div>
          <p
            className={cn(
              bgColor === 'bg-card-foreground' ? 'text-white' : 'text-black',
            )}
          >
            Learn more
          </p>
        </div>
      </div>
      <div className="flex h-full flex-1 items-center justify-center">
        <Image
          alt="ServicesIllustration_01"
          src={imageUrl}
          width={2000}
          height={2000}
          className="w-full"
        />
      </div>
    </div>
  );
}
