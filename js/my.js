var columns = ["name", "age", "colour", "type"];

function parseData() {
    try {
        parseDataHelper();
    } catch (err) {
        logError(err);
    }
}

function parseDataHelper() {
	var text = $("#data-entry textarea").val();
	var data = $.parseJSON(text);
	
	var table = $("<table>");
	var header = $("<tr>");
	for (var i = 0; i < columns.length; i++) {
		var column = columns[i];
		header.append($("<td>").text(column));
	}
	table.append($("<thead>").append(header));
	
	var body = $("<tbody>");
	for (var i = 0; i < data.length; i++) {
		var animal = data[i];
		var row = $("<tr>");
		for (var j = 0; j < columns.length; j++) {
			var column = columns[j];
			row.append($("<td>").text(animal[column]));
		}
		body.append(row);
	}
	table.append(body);
	
	$("#content").html(table);
}

function logError(err) {
	var p = $("#error-log").empty()
		.append($("<p>").append($("<strong>").text(err.name)).append(" at line: "+err.lineNumber+" of "+err.fileName))
		.append($("<p>").append($("<strong>").text("message: ")).append(err.message));
	p.append($("<p>")
	    .append($("<strong>").text("Stacktrace:"))
	    .append($("<list>")
	        .append($.map(err.stack.split(/\n/), function (item) {
	            return $("<li>").text(item);
	        }))
	));
}