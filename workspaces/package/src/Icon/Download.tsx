import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & {
  size?: string | number;
}>> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="download_svg__feather download_svg__feather-download"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>}
    </Box>;
};

export default forwardRef(Icon);