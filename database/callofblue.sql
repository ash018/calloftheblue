-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2018 at 03:24 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `callofblue`
--

-- --------------------------------------------------------

--
-- Table structure for table `gymkhana_riding`
--

CREATE TABLE `gymkhana_riding` (
  `gymkhana_ID` int(20) NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `OTP` varchar(30) NOT NULL,
  `owner` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `halloffame`
--

CREATE TABLE `halloffame` (
  `HalloffameID` int(80) NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `mobile` int(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `model` varchar(30) NOT NULL,
  `modelyear` varchar(20) NOT NULL,
  `OTP` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `upload_entry`
--

CREATE TABLE `upload_entry` (
  `EntryID` int(11) NOT NULL,
  `First_name` varchar(80) NOT NULL,
  `Last_name` varchar(80) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Mobile` int(20) NOT NULL,
  `OTP` varchar(10) NOT NULL,
  `City` varchar(20) NOT NULL,
  `Image` varchar(80) DEFAULT NULL,
  `Video` varchar(100) DEFAULT NULL,
  `Description` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gymkhana_riding`
--
ALTER TABLE `gymkhana_riding`
  ADD PRIMARY KEY (`gymkhana_ID`);

--
-- Indexes for table `halloffame`
--
ALTER TABLE `halloffame`
  ADD PRIMARY KEY (`HalloffameID`);

--
-- Indexes for table `upload_entry`
--
ALTER TABLE `upload_entry`
  ADD PRIMARY KEY (`EntryID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gymkhana_riding`
--
ALTER TABLE `gymkhana_riding`
  MODIFY `gymkhana_ID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `halloffame`
--
ALTER TABLE `halloffame`
  MODIFY `HalloffameID` int(80) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `upload_entry`
--
ALTER TABLE `upload_entry`
  MODIFY `EntryID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
