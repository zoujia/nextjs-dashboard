"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("@/app/ui/global.css");
var fonts_1 = require("@/app/ui/fonts");
exports.metadata = {
    title: {
        template: '%s | Acme Dashboard',
        "default": 'Acme Dashboard'
    },
    description: 'The official Next.js Course Dashboard, built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: fonts_1.inter.className + " antialiased" }, children)));
}
exports["default"] = RootLayout;
