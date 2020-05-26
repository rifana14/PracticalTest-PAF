$(document).ready(function() 
{  
		$("#alertSuccess").hide();
	    $("#alertError").hide(); 
});

// SAVE ----------------------------------------------------
$(document).on("click", "#btnSave", function(event)
{ 
	 
	// Clear status msges--------------------- 
	$("#alertSuccess").text(""); 
	$("#alertSuccess").hide(); 
	$("#alertError").text(""); 
	$("#alertError").hide();
	
	// Form validation------------------- 
	var status = validateHosForm(); 
	if (status != true) 
	{  
		$("#alertError").text(status);  
		$("#alertError").show();  
		return; 
	} 
	
	// If Valid ------------------
	var type = ($("#hidHospIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax({
		
		url : "HospitalAPI",
		type : type,
		data: $("#formHos").serialize(),
		dataType: "text",
		complete : function(response, status)
		{
			onHosSaveComplete(response.responseText, status);
		}
	});
}); 

function onHossaveComplete(response, status)
{
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
				{
					$("#alertSuccess").text("Successfully saved.");
					$("#alertSuccess").show();
					
					$("#divHosGrid").html(resultSet.data);
				}else if (resultSet.status.trim() == "error")
					{
						$("#alertError").text(resultSet.data);
						$("#alertError").show();
					}
		}else if (status == "error")
			{
				$("#alertError").text("Error while saving");
				$("#alertError").show();
			}else
				{
					$("#alertError").text("Unknown error while saving..");
					$("#alertError").show();
				}
			
			    $("#hidHospIDSave").val("");
			    $("#formHos")[0].reset();
	
}

//UPDATE========================================== 
$(document).on("click", ".btnUpdate", function(event) 
		{     
			$("#hidHospIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());     
			$("#hospitalName").val($(this).closest("tr").find('td:eq(0)').text());     
			$("#hospitalRegistereDate").val($(this).closest("tr").find('td:eq(1)').text());    
			$("#hospitalType").val($(this).closest("tr").find('td:eq(2)').text());     
			$("#hospitalAddress").val($(this).closest("tr").find('td:eq(3)').text()); 
		});

// Remove=========================================
$(document).on("click","btnRemove", function(event)
	{	
	$.ajax(
			{
		
		url : "HospitalAPI",
		type : "DELETE",
		data: "hospitalID" + $(this).data("hospitalid"),
		dataType: "text",
		complete : function(response, status)
		{
			onHosDeleteComplete(response.responseText, status);
		}
	});
});		

function onHosDeleteComplete(response, status)
{
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
				{
					$("#alertSuccess").text("Successfully delete");
					$("#alertSuccess").show();
					
					$("#divHosGrid").html(resultSet.data);
				}else if (resultSet.status.trim() == "error")
					{
						$("#alertError").text(resultSet.data);
						$("#alertError").show();
					}
		}else if (status == "error")
		{
			$("#alertError").text("Error while deleting");
			$("#alertError").show();
		}else
			{
				$("#alertError").text("Unknown error while deleting..");
				$("#alertError").show();
			}
		
}


//CLIENT-MODEL================================================================ 
function validateHosForm() 
{  
	// NAME  
	if ($("#hospitalName").val().trim() == "") 
	{  
		return "Insert HospitalModel Name.";  
	} 

	// RegDate  
	if ($("#hospitalRegistereDate").val().trim() == "")  
	{  
		return "Insert HospitalModel hospitalRegistereDate.";
	} 

	// hospitalType-------------------------------  
	if ($("#hospitalType").val().trim() == "") 
	{   
		return "Insert HospitalModel hospitalType."; 
	} 

	// hospitalAddress------------------------  
	if ($("#hospitalAddress").val().trim() == "")  
	{   
		return "Insert HospitalModel hospitalAddress."; 
	} 

return true; } 
$(document).ready(function() 
		{  
				$("#alertSuccess").hide();
			    $("#alertError").hide(); 
		});

		// SAVE ----------------------------------------------------
		$(document).on("click", "#btnSave", function(event)
		{ 
			 
			// Clear status msges--------------------- 
			$("#alertSuccess").text(""); 
			$("#alertSuccess").hide(); 
			$("#alertError").text(""); 
			$("#alertError").hide();
			
			// Form validation------------------- 
			var status = validateHosForm(); 
			if (status != true) 
			{  
				$("#alertError").text(status);  
				$("#alertError").show();  
				return; 
			} 
			
			// If Valid ------------------
			var type = ($("#hidHospIDSave").val() == "") ? "POST" : "PUT";
			
			$.ajax({
				
				url : "HospitalAPI",
				type : type,
				data: $("#formHos").serialize(),
				dataType: "text",
				complete : function(response, status)
				{
					onHosSaveComplete(response.responseText, status);
				}
			});
		}); 

		function onHossaveComplete(response, status)
		{
			if (status == "success")
				{
					var resultSet = JSON.parse(response);
					
					if (resultSet.status.trim() == "success")
						{
							$("#alertSuccess").text("Successfully saved.");
							$("#alertSuccess").show();
							
							$("#divHosGrid").html(resultSet.data);
						}else if (resultSet.status.trim() == "error")
							{
								$("#alertError").text(resultSet.data);
								$("#alertError").show();
							}
				}else if (status == "error")
					{
						$("#alertError").text("Error while saving");
						$("#alertError").show();
					}else
						{
							$("#alertError").text("Unknown error while saving..");
							$("#alertError").show();
						}
					
					    $("#hidHospIDSave").val("");
					    $("#formHos")[0].reset();
			
		}

		//UPDATE========================================== 
		$(document).on("click", ".btnUpdate", function(event) 
				{     
					$("#hidHospIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());     
					$("#hospitalName").val($(this).closest("tr").find('td:eq(0)').text());     
					$("#hospitalRegistereDate").val($(this).closest("tr").find('td:eq(1)').text());    
					$("#hospitalType").val($(this).closest("tr").find('td:eq(2)').text());     
					$("#hospitalAddress").val($(this).closest("tr").find('td:eq(3)').text()); 
				});

		// Remove=========================================
		$(document).on("click","btnRemove", function(event)
			{	
			$.ajax(
					{
				
				url : "HospitalAPI",
				type : "DELETE",
				data: "hospitalID" + $(this).data("hospitalid"),
				dataType: "text",
				complete : function(response, status)
				{
					onHosDeleteComplete(response.responseText, status);
				}
			});
		});		

		function onHosDeleteComplete(response, status)
		{
			if (status == "success")
				{
					var resultSet = JSON.parse(response);
					
					if (resultSet.status.trim() == "success")
						{
							$("#alertSuccess").text("Successfully delete");
							$("#alertSuccess").show();
							
							$("#divHosGrid").html(resultSet.data);
						}else if (resultSet.status.trim() == "error")
							{
								$("#alertError").text(resultSet.data);
								$("#alertError").show();
							}
				}else if (status == "error")
				{
					$("#alertError").text("Error while deleting");
					$("#alertError").show();
				}else
					{
						$("#alertError").text("Unknown error while deleting..");
						$("#alertError").show();
					}
				
		}


		//CLIENT-MODEL================================================================ 
		function validateHosForm() 
		{  
			// NAME  
			if ($("#hospitalName").val().trim() == "") 
			{  
				return "Insert HospitalModel Name.";  
			} 

			// RegDate  
			if ($("#hospitalRegistereDate").val().trim() == "")  
			{  
				return "Insert HospitalModel hospitalRegistereDate.";
			} 

			// hospitalType-------------------------------  
			if ($("#hospitalType").val().trim() == "") 
			{   
				return "Insert HospitalModel hospitalType."; 
			} 

			// hospitalAddress------------------------  
			if ($("#hospitalAddress").val().trim() == "")  
			{   
				return "Insert HospitalModel hospitalAddress."; 
			} 

		return true; } 
