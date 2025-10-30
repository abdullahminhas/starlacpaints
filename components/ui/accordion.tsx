'use client'

import React, { useState, ReactNode, ReactElement, createContext, useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

// Define TypeScript interfaces
interface AccordionContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

interface AccordionItemProps {
  children: ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="border-b border-gray-300">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionTriggerProps {
  children: ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => {
  const context = useContext(AccordionContext);
  
  if (!context) {
    throw new Error('AccordionTrigger must be used within an AccordionItem');
  }

  const { isOpen, setIsOpen } = context;

  return (
    <button
      className="flex w-full items-center justify-between py-6 text-left font-medium hover:underline"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <ChevronDown
        className={cn('h-5 w-5 transition-transform', isOpen && 'rotate-180')}
      />
    </button>
  );
};

interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  const context = useContext(AccordionContext);
  
  if (!context) {
    throw new Error('AccordionContent must be used within an AccordionItem');
  }

  const { isOpen } = context;

  if (!isOpen) return null;
  
  return <div className="pb-6 text-gray-600">{children}</div>;
};