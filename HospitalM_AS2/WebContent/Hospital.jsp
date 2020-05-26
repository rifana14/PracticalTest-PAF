<%@page import="com.HospitalModel"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Management</title>
<link rel="stylesheet" href="Views/css/bootstrap.min.css" >
<script src="Components/jquery-3.5.1.js"></script>
<script src="Components/Hospital.js"></script>
</head>
<body>
	<div class="container">
	   <div class="row">
	       <div class="col-6">    
	       		
	       		<h1>Hospital Management</h1>
	          	
	          	<form id="formHos" name="formHos" method="post" action="Hospital.jsp">
	          	    Hospital Name:
	          	    <input id="HospitalName" name="HospitalName" type="text" class="form-control form-control-sm"> <br>
					Hospital Registere Date: 
					<input id="HospitalRegistereDate" name="HospitalRegistereDate" type="text" class="form-control form-control-sm"> <br>
					Hospital Type: 
					<input id="HospitalType" name="HospitalType" type="text"  class="form-control form-control-sm"> <br>
					Hospital Address: 
					<input id="HospitalAddress" name="HospitalAddress" type="text"  class="form-control form-control-sm"> <br> 
	          	    <input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">  <br>
	          	    <input type="hidden" id="hidHospIDSave" name="hidHospIDSave" value=""> 
	          	 </form> 
	        	 <div id="alertSuccess" class="alert alert-success"></div>
	          	 <div id="alertError" class="alert alert.danger"></div>
	          	 <br>
	          	 <div id="divHosGrid">
	          	 <%
	          		HospitalModel hospitalObj = new HospitalModel();
	          	 	out.print(hospitalObj.hospitalRead());
	          	 %>
	          	 </div>
	       </div>   
	   </div>  
	</div> 
</body>
</html>