"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var acme_logo_1 = require("@/app/ui/acme-logo");
var login_form_1 = require("@/app/ui/login-form");
exports.metadata = {
    title: 'Login'
};
function LoginPage() {
    return (React.createElement("main", { className: "flex items-center justify-center md:h-screen" },
        React.createElement("div", { className: "relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32" },
            React.createElement("div", { className: "flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36" },
                React.createElement("div", { className: "w-32 text-white md:w-36" },
                    React.createElement(acme_logo_1["default"], null))),
            React.createElement(login_form_1["default"], null))));
}
exports["default"] = LoginPage;
