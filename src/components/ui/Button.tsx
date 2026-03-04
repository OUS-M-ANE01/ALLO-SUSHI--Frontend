import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  href, 
  onClick,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 hover:-translate-y-0.5 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/35',
    ghost: 'border-1.5 border-gray-300 text-gray-700 hover:border-red-600 hover:bg-red-50 hover:text-red-600'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
};
