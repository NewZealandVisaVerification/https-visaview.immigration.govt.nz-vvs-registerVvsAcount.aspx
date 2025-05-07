function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var name = (e.parameter.name || "").toLowerCase();
  var lastName = (e.parameter.lastName || "").toLowerCase();
  var visaType = (e.parameter.visaType || "").toLowerCase();

  for (var i = 1; i < data.length; i++) {
    var rowName = (data[i][0] || "").toLowerCase();
    var rowLastName = (data[i][1] || "").toLowerCase();
    var rowVisaType = (data[i][2] || "").toLowerCase();

    if (
      rowName === name &&
      rowLastName === lastName &&
      rowVisaType === visaType
    ) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: "error" }))
    .setMimeType(ContentService.MimeType.JSON);
}
