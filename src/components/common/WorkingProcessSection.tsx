'use client';

import SectionWrapper from '@/layout/SectionWrapper';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import SectionTitlebar from '../ui/SectionTitlebar';

const processSteps = [
  {
    order: '01',
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This deep-dive session allows us to fully understand your unique challenges and opportunities, ensuring we tailor our services to best fit your requirements and set a strong foundation for our partnership.',
  },
  {
    order: '02',
    title: 'Research and Strategy Development',
    content:
      'Success begins with data. Our team conducts exhaustive market research, competitor benchmarking, and keyword analysis to identify where your opportunities lie. We then translate these insights into a comprehensive digital roadmap that outlines specific channels, messaging, and conversion tactics designed to outperform your competition.',
  },
  {
    order: '03',
    title: 'Implementation',
    content:
      "Once the strategy is finalized, we transition into the execution phase. Our specialists deploy your campaigns, whether it's building high-converting landing pages, launching targeted ad sets, or optimizing your organic presence. We ensure every technical element and creative asset is perfectly aligned with your brand's voice and goals.",
  },
  {
    order: '04',
    title: 'Monitoring and Optimization',
    content:
      'We believe in proactive management. Our team monitors your campaign performance around the clock, analyzing real-time data to identify trends. We continuously optimize headlines, creative elements, and audience targeting to eliminate waste and double down on what is driving the most valuable traffic and conversions.',
  },
  {
    order: '05',
    title: 'Reporting and Communication',
    content:
      'We maintain total transparency through regular, detailed reporting. You will receive clear breakdowns of key performance indicators (KPIs), showing exactly where your budget is going and the results it is generating. We hold regular strategy sessions to review these metrics and ensure our efforts remain perfectly synced with your evolving business needs.',
  },
  {
    order: '06',
    title: 'Continual Improvement',
    content:
      'The digital landscape is in a constant state of flux, and our tactics are designed to be as fluid as the market itself. We use the cumulative data from every campaign to refine our long-term approach, testing new creative concepts and exploring emerging platforms to ensure your business achieves sustainable, scalable growth.',
  },
];

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
        defaultValue="item-0"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>
                {step.order} {step.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-lg leading-relaxed">
                <p>{step.content}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
