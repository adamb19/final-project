function addition(){
    var txt = document.form.txt.value;
    var number=number1;
	var number2=numberb;
	var number =new String(number);
	var number2 =new String(number);
	numbera.length;
	numberc.length;
	
    
    // For a given MxN table output
    var M = Object.keys(inputs).length;
    var N = 0; // Unknown for now
    
    var tableElement = document.createElement("table");
    tableElement.id = "out";
    
    // Generate header
    var headerElement = document.createElement("tr");
    for (var label in inputs) {
        var tdElement = document.createElement("td");
        tdElement.appendChild(document.createTextNode(label));
        headerElement.appendChild(tdElement);
        
        // calculate N dimension
        var contents = inputs[label].length;
        if (N < contents) {
            N = contents;
        }
    }
    tableElement.appendChild(headerElement);
    
    // Generate rows
    for (var i=0; i<N; i++) {
        var trElement = document.createElement("tr");
        for (var j=0; j<M; j++) {
            var tdElement = document.createElement("td");
            var label = Object.keys(inputs)[j];
            if (inputs[label].length > i) {
    	        var content = inputs[label][i];
    	        tdElement.appendChild(document.createTextNode(content));
            }
            trElement.appendChild(tdElement);
        }
        tableElement.appendChild(trElement);
    }
    
    var out = document.getElementById('out');
    out.parentNode.removeChild(out);
    document.body.appendChild(tableElement); // display the result
}