<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset= "utf-8">
	<title>Inbond Story</title>
</head>
<body>
	<?php
		$servername = "localhost";
		$username = "root";
		$password = "ideacloud";
		$dbname = "inboundStory";


		// Create connection
		$conn = mysqli_connect($servername, $username, $password, $dbname);

		// Check connection
		if (!$conn) {
		    die("Connection failed: " . mysqli_connect_error());
		}
		echo "Connected successfully<br/>";

		$name = mysqli_real_escape_string($conn , $_POST["inputName"]);
		$twitter = mysqli_real_escape_string($conn , $_POST["inputTwitter"]);
		$mail = mysqli_real_escape_string($conn , $_POST["inputEmail"]);
		$company = mysqli_real_escape_string($conn , $_POST["inputCompany"]);
		$sql = "INSERT INTO clients (name, twitter, email, company)
		VALUES ('$name', '$twitter', '$mail', '$company')";

	
		if (mysqli_query($conn, $sql)) {
		    echo "New record created successfully<br/>";
		} else {
		    echo "Error: <br/>" . $sql . "<br>" . mysqli_error($conn);
		}
		//Close connection
		mysqli_close($conn);
		print_r($_POST);
		?>
</body>
</html>