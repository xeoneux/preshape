import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "framer_svg__feather framer_svg__feather-framer" },
        React.createElement("path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Framer.js.map