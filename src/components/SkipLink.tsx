import React from 'react';

interface ISkipLinkProps {
  children: React.ReactElement;
  skipTo: string;
}

export const SkipLink: React.FC<ISkipLinkProps> = (props) => {
  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const container: HTMLElement | null = document.querySelector(props.skipTo);

    if (container) {
      container.tabIndex = -1;
      container.focus();
      setTimeout(() => container.removeAttribute('tabindex'), 1000);
    }
  };

  return React.cloneElement(props.children, { onClick });
};
