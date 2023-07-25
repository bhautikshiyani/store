import React from "react";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import raf from "rc-util/lib/raf";
import Tooltip from "rc-tooltip";
import Trigger from "rc-trigger";

const HandleTooltip = (props) => {
  const {
    value,
    children,
    visible,
    tipFormatter = (val) => `${val} %`,
    ...restProps
  } = props;

  const tooltipRef = React.useRef(null);
  const rafRef = React.useRef(null);

  function cancelKeepAlign() {
    raf.cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      if (tooltipRef.current && tooltipRef.current.trigger) {
        tooltipRef.current.trigger.alignPopup("top"); // Use alignPopup() to align the tooltip
      }
    });
  }

  React.useEffect(() => {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Trigger
      action={["hover"]}
      popupPlacement="top"
      popupAlign={{ points: ["tc", "bc"] }}
      popupVisible={visible}
      ref={tooltipRef} // Store the ref of the Trigger component
      popup={
        <div>
          <div>{tipFormatter(value)}</div>
        </div>
      }
    >
      {children}
    </Trigger>
  );
};

export const handleRender = (node, props) => {
  return (
    <HandleTooltip value={props.value} visible={props.dragging}>
      {node}
    </HandleTooltip>
  );
};

const TooltipSlider = ({ tipFormatter, tipProps, ...props }) => {
  const tipHandleRender = (node, handleProps) => {
    return (
      <HandleTooltip
        value={handleProps.value}
        visible={handleProps.dragging}
        tipFormatter={tipFormatter}
        {...tipProps}
      >
        {node}
      </HandleTooltip>
    );
  };

  return <Slider {...props} handleRender={tipHandleRender} />;
};

export default TooltipSlider;
