import React from 'react'
import { usePopoverContext } from './Popover';

export interface ICloseProps {
    children: React.ReactElement
}

const Close: React.FunctionComponent<ICloseProps> = ({ children }) => {
    const { setIsShow } = usePopoverContext()
    const onClick = (e: MouseEvent) => {
      setIsShow(false);
  
      // prevent this event triggering unexpected click
      e.stopPropagation();
    };
    const childrenToClosePopover = React.cloneElement(children, {
      onClick,
    });
  
    return childrenToClosePopover;
}

export default Close