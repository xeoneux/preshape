import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "refresh-ccw_svg__feather refresh-ccw_svg__feather-refresh-ccw" },
        React.createElement("path", { d: "M1 4v6h6M23 20v-6h-6" }),
        React.createElement("path", { d: "M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=RefreshCcw.js.map