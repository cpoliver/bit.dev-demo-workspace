import React from 'react';

export type AdminCardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function AdminCard({ text }: AdminCardProps) {
  return (
    <div>
      {text}
    </div>
  );
}
