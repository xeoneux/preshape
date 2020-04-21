import * as React from 'react';
import { createPortal } from 'react-dom';
import { useMatchMedia } from '../hooks';
import { Attributes, TypeColor } from '../Base/Base';
import Appear, { TypeAnimation } from '../Appear/Appear';
import Flex, { FlexProps } from '../Flex/Flex';
import './Modal.css';

export const ModalContext = React.createContext<{
  onClose?: (event: React.PointerEvent<HTMLElement>) => void;
}>({});

/**
 * The containing component for all the other Modal components.
 * This component contains the unpadded dialog box as well as
 * an overlay, animations, behaviour to disable body scroll when
 * it is visible.
 */
export interface ModalProps extends FlexProps {
  /**
   * Animation for the Modal window. See Appear component.
   *
   * @default "Fade"
   */
  animation?: TypeAnimation;
  /**
  * Extends the initial height of the modal to
  * be the full height of the viewport
  */
 fullscreen?: boolean;
  /**
   * Sets the background color of the overlay that sits
   * under the modal and on top of the main UI.
   */
  overlayBackgroundColor?: TypeColor;
  /**
   * The maximum width of the dialog box.
   */
  maxWidth?: string;
  /**
   * An optional callback that when provided will be
   * called when clicking on the visible overlay area
   * and when clicking on the cross icon inside the
   * ModalHeader.
   */
  onClose?: (event: React.PointerEvent<HTMLElement>) => void;
  /**
   * The visible state of the modal. When the visibility
   * is set to false, the content will be removed from the
   * DOM.
   */
  visible: boolean;
}

const Modal: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, ModalProps>> = (props, ref) => {
  const {
    animation = 'Fade',
    backgroundColor = 'background-shade-1',
    children,
    fullscreen,
    gap,
    maxWidth = 'auto',
    onClose,
    margin,
    overlayBackgroundColor = 'overlay',
    padding,
    paddingHorizontal,
    paddingVertical,
    visible,
    ...rest
  } = props;

  const [render, setRender] = React.useState(props.visible);
  const refModal = React.useRef<HTMLDivElement>(null);
  const match = useMatchMedia([maxWidth]);
  const isMaxWidthEnabled = maxWidth !== 'auto';

  React.useEffect(() => {
    if (visible) {
      setRender(true);
      document.body.classList.add('Modal__body-open');
    } else {
      document.body.classList.remove('Modal__body-open');
    }

    return () => {
      document.body.classList.remove('Modal__body-open');
    };
  }, [visible]);

  const handleOnAnimateComplete = () => {
    if (!visible) {
      setRender(false);
    }
  };

  if (!render) {
    return null;
  }

  return createPortal(
    <ModalContext.Provider value={ { onClose } }>
      <Flex { ...rest }
          alignChildren="middle"
          direction="vertical"
          fixed="edge-to-edge"
          padding={ (!isMaxWidthEnabled || match(maxWidth)) ? margin : 'x0' }
          ref={ ref }>
        <Appear
            absolute="edge-to-edge"
            animation="Fade"
            backgroundColor={ overlayBackgroundColor }
            onAnimationComplete={ handleOnAnimateComplete }
            onPointerUp={ onClose }
            visible={ visible } />

        <Appear
            animation={ animation }
            backgroundColor={ backgroundColor }
            container
            direction="vertical"
            gap={ gap }
            grow={ fullscreen || (isMaxWidthEnabled && !match(maxWidth)) }
            maxHeight="100vh"
            maxWidth={
              (isMaxWidthEnabled && maxWidth) ||
              (fullscreen && '100%') || undefined }
            padding={ padding }
            paddingHorizontal={ paddingHorizontal }
            paddingVertical={ paddingVertical }
            ref={ refModal }
            scrollable
            shrink
            visible={ visible }>
          { children }
        </Appear>
      </Flex>
    </ModalContext.Provider>
  , document.body);
};

export default React.forwardRef(Modal);
