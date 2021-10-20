import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "corner-up-left_svg__feather corner-up-left_svg__feather-corner-up-left" },
        React.createElement("path", { d: "M9 14L4 9l5-5" }),
        React.createElement("path", { d: "M20 20v-7a4 4 0 00-4-4H4" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=CornerUpLeft.js.map