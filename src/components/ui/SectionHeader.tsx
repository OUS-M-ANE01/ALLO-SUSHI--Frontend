import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  subtitle,
  centered = false 
}) => {
  return (
    <div className={centered ? 'text-center mx-auto' : ''}>
      <span className="inline-block text-red-600 text-xs font-semibold tracking-widest uppercase mb-3.5">
        {label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-base leading-relaxed max-w-lg font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
