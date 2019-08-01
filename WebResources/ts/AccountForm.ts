/// <reference path="../typings/xrm/xrm.d.ts" />
/// <reference path="../typings/xrm/form/account/main/account.d.ts" />
namespace VinnyB.AccountForm {

    declare var Form: Form.account.Main.Account;
    export function onLoad(executionContext: Xrm.ExecutionContext<any>) {

        Form = <Form.account.Main.Account>executionContext.getFormContext();

        let name = Form.getAttribute("name").getValue();

        let city = Form.getAttribute("address1_city").getValue();
    }
}