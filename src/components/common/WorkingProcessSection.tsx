import SectionWrapper from '@/layout/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import SectionTitlebar from '../ui/SectionTitlebar';

export default function WorkingProcessSection() {
  return (
    <SectionWrapper className="flex-col">
      <SectionTitlebar
        text="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        descriptionClassName="max-w-80"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-3.5"
        defaultValue="item-1"
      >
        {/* Item 01 */}
        <AccordionItem value="item-1">
          <AccordionTrigger>01 Consultation</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This deep-dive session allows us to fully understand your
              unique challenges and opportunities, ensuring we tailor our
              services to best fit your requirements and set a strong foundation
              for our partnership.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 02 */}
        <AccordionItem value="item-2">
          <AccordionTrigger>
            02 Research and Strategy Development
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              Success begins with data. Our team conducts exhaustive market
              research, competitor benchmarking, and keyword analysis to
              identify where your opportunities lie. We then translate these
              insights into a comprehensive digital roadmap that outlines
              specific channels, messaging, and conversion tactics designed to
              outperform your competition.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 03 */}
        <AccordionItem value="item-3">
          <AccordionTrigger>03 Implementation</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              Once the strategy is finalized, we transition into the execution
              phase. Our specialists deploy your campaigns, whether it's
              building high-converting landing pages, launching targeted ad
              sets, or optimizing your organic presence. We ensure every
              technical element and creative asset is perfectly aligned with
              your brand's voice and goals.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 04 */}
        <AccordionItem value="item-4">
          <AccordionTrigger>04 Monitoring and Optimization</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              We believe in proactive management. Our team monitors your
              campaign performance around the clock, analyzing real-time data to
              identify trends. We continuously optimize headlines, creative
              elements, and audience targeting to eliminate waste and double
              down on what is driving the most valuable traffic and conversions.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 05 */}
        <AccordionItem value="item-5">
          <AccordionTrigger>05 Reporting and Communication</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              We maintain total transparency through regular, detailed
              reporting. You will receive clear breakdowns of key performance
              indicators (KPIs), showing exactly where your budget is going and
              the results it is generating. We hold regular strategy sessions to
              review these metrics and ensure our efforts remain perfectly
              synced with your evolving business needs.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Item 06 */}
        <AccordionItem value="item-6">
          <AccordionTrigger>06 Continual Improvement</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              The digital landscape is in a constant state of flux, and our
              tactics are designed to be as fluid as the market itself. We use
              the cumulative data from every campaign to refine our long-term
              approach, testing new creative concepts and exploring emerging
              platforms to ensure your business achieves sustainable, scalable
              growth.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SectionWrapper>
  );
}
