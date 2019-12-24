
import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';
import './Separator.css';

interface Props extends BaseProps {
  /**
   * Border colour to be applied, shades are taken from the current
   * theme. A value of true will reapply the current colour value.
   */
  borderColor?: true | 'shade-1' | 'shade-2' | 'shade-3';
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2';
}

const Separator: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base { ...props }
        Component="div"
        className="Separator" />
  );
};

Separator.defaultProps = {
  borderColor: true,
  borderSize: 'x1',
};

export default Separator;