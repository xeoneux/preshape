import * as React from 'react';
import classnames from 'classnames';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import './Button.css';

export interface Props extends FlexProps {
  /** Retains the Button in its active state */
  active?: boolean;
  /** Colour that is applied to the button to indicate the type of action */
  color?: 'accent' | 'negative' | 'positive';
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** Appies a filled in style to the button. */
  fill?: boolean;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { active, color, fill, ...rest } = props;
  const classes = classnames('Button', {
    'Button--active': active,
    'Button--fill': fill,
    [`Button--${color}`]: color,
  });

  return (
    <Flex { ...rest }
        alignChildren="middle"
        className={ classes }
        Component="button"
        direction="horizontal"
        grow
        textColor />
  );
};

Button.defaultProps = {
  color: 'accent',
};

export default Button;
