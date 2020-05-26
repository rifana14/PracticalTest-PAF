package com;
import java.sql.*;


public class HospitalModel
{
	private Connection connect() {
		Connection con = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");

			// Provide the correct details: DBServer/DBregDate, userregDate, password
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/hospitaldatabase", "root", "");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
	}
	
	public String insertHospital( String hosName, String regDate, String hosType , String hosAddress)
	{
		String output = "";
		
		try
		{
			Connection con = connect();
			
			if (con == null)
			{
				return "Error while connecting to the database for inserting.";
			}
			
			//create a prepare statement
			String query = " insert into hospital_table('hospitalID','hospitalName','hospitalRegistereDate','hospitalType','hospitalAddress')"
					 + " values (?, ?, ?, ?, ?)"; 
			
			PreparedStatement preparedStmt = con.prepareStatement(query);
			
			//binding values
				preparedStmt.setInt(1, 0);
			preparedStmt.setString(2, hosName);
			preparedStmt.setString(3, regDate);
			preparedStmt.setString(4, hosType);
            preparedStmt.setString(5, hosAddress);
			
			//execute the statement
			preparedStmt.execute();
			con.close();
			
			String newItems = hospitalRead();
			output = "{\"status\":\"success\",\"data\":\""+newItems+"\"}";
		}
		catch (Exception e)
		{
			output = "{\"status\":\"error\",\"data\":\"Error while insering the hospital.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}
	
	public String hospitalRead()
	{
		 String output = ""; 
		 
		 try
		 {
			 Connection con = connect(); 
			 
			 if (con == null)   
			 {    
				 return "Error while connecting to the database for reading.";
			 }
			 
			// Prepare the html table to be displayed   
			output = "<table border=\"1\"><tr><th>Hospital Name</th><th>Hospital Registere Date</th><th>Hospital Type</th><th>Hospital Address</th><th>Update</th><th>Remove</th></tr>";

			 String query = "select * from hospital_table";   
			 Statement stmt = con.createStatement();   
			 ResultSet rs = stmt.executeQuery(query); 
					 
			// iterate through the rows in the result set 
			 
			 while (rs.next())   
			 {    
				 
				String hospitalID = Integer.toString(rs.getInt("hospitalID"));
				String hospitalName = rs.getString("hospitalName");
				String hospitalRegistereDate = rs.getString("hospitalRegistereDate");
				String hospitalType = rs.getString("hospitalType");
                String hospitalAddress = rs.getString("hospitalAddress");
				
				
				 
				// Add into the html table 
				
				   
				output += "<td>" + hospitalName + "</td>";
				output += "<td>" + hospitalRegistereDate+ "</td>";
				output += "<td>" + hospitalType+ "</td>";
                output += "<td>" + hospitalAddress+ "</td>";
				// buttons 
				
						 
				output += "<td><input regDate='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-secondary'></td>"
						+ "<td><input regDate='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger' data-hospitalid='"
						+ hospitalID + "'>" + "</td></tr>";		 
			 }
			 
			 con.close(); 
			 
			  // Complete the html table  
			  output += "</table>"; 
		 }
		 
		 catch (Exception e)  
		 {   
			 output = "Error while reading the hospital.";   
			 System.err.println(e.getMessage());  
		 } 
		 
		 return output; 
		
	}
	
	public String updateHospital(String ID, String hosName, String regDate, String hosType , String hosAddress)
	{
		String output = "";
		
		try 
		{
			Connection con = connect(); 
			 
			 if (con == null)   
			 {    
				 return "Error while connecting to the database for updating.";
			 }
			 //create a prepared statement.
			 String query = "UPDATE hospital_table SET hospitalName=?,hospitalRegistereDate=?,hospitalType=?,hospitalAddress=? WHERE hospitalID=?";
			 
			 PreparedStatement preparedStmt = con.prepareStatement(query);
			 
			 //binding values
			preparedStmt.setString(1, hosName);
			preparedStmt.setString(2, regDate);
			preparedStmt.setString(3, hosType);
            preparedStmt.setString(4, hosAddress);
			preparedStmt.setInt(5, Integer.parseInt(ID));
			
			 
			 //execute the statement
			 preparedStmt.execute();
			 con.close();
			 
			 String newItems = hospitalRead();
				output = "{\"status\":\"success\",\"data\":\""+newItems+"\"}";
			 
		}
		catch (Exception e)
		{
			output = "{\"status\":\"error\",\"data\":\"Error while updating the hospital.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}
	
	public String deleteHospital(String hospitalID)
	{
		String output = "";
		try
		{
			Connection con = connect(); 
			 
			 if (con == null)   
			 {    
				 return "Error while connecting to the database for deleting.";
			 }
			 //create a prepared statement.
			 String query = "delete from hospital_table where hospitalID=?";
			 
			 PreparedStatement preparedStmt = con.prepareStatement(query);
			 
			 //binding values
			 preparedStmt.setInt(1, Integer.parseInt(hospitalID));
			 
			 //execute the statement
			 preparedStmt.execute();
			 con.close();
			 
			 String newItems = hospitalRead();
			 output = "{\"status\":\"success\", \"data\": \"" + newItems + "\"}";
			 
		}
		catch (Exception e)
		{
			output = "{\"status\":\"error\",\"data\":\"Error while deleting the hospital.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}
	
}
