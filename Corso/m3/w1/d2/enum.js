// enum ci permettono di definire un inseime di costanti
// le usiamo per oridinare dei dati oppure creare una sserie di casi
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BAdRequest"] = 400] = "BAdRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
