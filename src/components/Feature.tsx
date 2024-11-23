import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
}

export function Feature({ icon: Icon, title }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="w-8 h-8" />
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}