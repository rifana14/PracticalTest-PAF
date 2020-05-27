-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2020 at 01:50 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospitaldatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospital_table`
--

CREATE TABLE `hospital_table` (
  `hospitalID` int(11) NOT NULL,
  `hospitalName` varchar(45) NOT NULL,
  `hospitalRegistereDate` varchar(45) DEFAULT NULL,
  `hospitalType` varchar(45) DEFAULT NULL,
  `hospitalAddress` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hospital_table`
--

INSERT INTO `hospital_table` (`hospitalID`, `hospitalName`, `hospitalRegistereDate`, `hospitalType`, `hospitalAddress`) VALUES
(1, 'Amaya Hospital', '2005-02-25', 'General	', 'Kandy'),
(2, 'Lakeside  Hospital		', '2002-05-10	', 'Private', 'Colombo'),
(3, 'Johns Hopkins Hospital', '1999-04-12', 'General', 'Malabe'),
(4, 'Jewish General Hospital', '2001-05-11', 'General', 'Peradeniya'),
(5, 'Ninewells Hospital	', '2000-04-15', 'Private	', 'Kurunegala'),
(6, 'Hemas Southern Hospital', '1999-04-20', 'Private', 'Galle');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospital_table`
--
ALTER TABLE `hospital_table`
  ADD PRIMARY KEY (`hospitalID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospital_table`
--
ALTER TABLE `hospital_table`
  MODIFY `hospitalID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
