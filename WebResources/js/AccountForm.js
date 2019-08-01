/// <reference path="../typings/xrm/xrm.d.ts" />
/// <reference path="../typings/xrm/form/account/main/account.d.ts" />
var VinnyB;
(function (VinnyB) {
    var AccountForm;
    (function (AccountForm) {
        function onLoad(executionContext) {
            Form = executionContext.getFormContext();
            var name = Form.getAttribute("name").getValue();
            var city = Form.getAttribute("address1_city").getValue();
        }
        AccountForm.onLoad = onLoad;
    })(AccountForm = VinnyB.AccountForm || (VinnyB.AccountForm = {}));
})(VinnyB || (VinnyB = {}));
//# sourceMappingURL=AccountForm.js.map