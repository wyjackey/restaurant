USE master ;
GO

IF EXISTS(SELECT * from sys.databases WHERE name='Restaurant')
BEGIN
    DROP DATABASE Restaurant;
END

CREATE DATABASE Restaurant
ON 
( NAME = Restaurant_dat,
    FILENAME = 'C:\Program Files (x86)\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\Restaurantdat.mdf',
    SIZE = 10,
    MAXSIZE = 50,
    FILEGROWTH = 5 )
LOG ON
( NAME = Restaurant_log,
    FILENAME = 'C:\Program Files (x86)\Microsoft SQL Server\MSSQL10.SQLEXPRESS\MSSQL\DATA\Restaurantlog.ldf',
    SIZE = 5MB,
    MAXSIZE = 25MB,
    FILEGROWTH = 5MB ) ;
GO

use Restaurant

IF EXISTS(SELECT * from sys.tables WHERE name='Address')
BEGIN
    DROP TABLE Address;
END

--Create a new tables called Address.
CREATE TABLE dbo.Address
(
    Address_id int NOT NULL Identity primary key
	,Street_name NVARCHAR(256) 
	,Street_number NVARCHAR(64) 
	,City NVARCHAR(128) 
	,Province NVARCHAR(128)
	,Country NVARCHAR(128)
	,Postcode NVARCHAR(128)
	,House_number NVARCHAR(128)
);


IF EXISTS(SELECT * from sys.tables WHERE name='Customer_Info')
BEGIN
    DROP TABLE Customer_Info;
END

--Create a new database called TestData.
CREATE TABLE dbo.Customer_Info
(
    Customer_id int NOT NULL Identity primary key
    ,Name smallint NOT NULL
    ,Phone1 NVARCHAR(64) NULL
    ,Phone2 NVARCHAR(64) NULL
    ,Phone3 NVARCHAR(64) NULL
    ,Birthday_date datetime NULL
    ,Address_id int NULL
    ,Email NVARCHAR(128) NULL
    ,Gender NVARCHAR(32) NULL
    ,Age int NULL
);

IF EXISTS(SELECT * from sys.tables WHERE name='Staff_info')
BEGIN
    DROP TABLE Staff_info;
END

--Create a new database called TestData.
CREATE TABLE dbo.Staff_info
(
    Staff_id int NOT NULL Identity primary key
    ,Name smallint NOT NULL
    ,Phone1 NVARCHAR(64) NULL
    ,Phone2 NVARCHAR(64) NULL
    ,Phone3 NVARCHAR(64) NULL
    ,Birthday_date datetime NULL
    ,Address_id int FOREIGN KEY REFERENCES Address(Address_id)
    ,Email NVARCHAR(128) NULL
    ,Gender NVARCHAR(32) NULL
    ,Age int NULL
	,Create_date datetime NOT NULL
	,Join_date datetime NULL
	,End_date datetime NULL
	,Status NVARCHAR(32) NULL
);

IF EXISTS(SELECT * from sys.tables WHERE name='Pay_Info')
BEGIN
    DROP TABLE Pay_Info;
END

--Create a new tables called Pay_Info.
CREATE TABLE dbo.Pay_Info
(
    Pay_id int NOT NULL Identity primary key
	,Pay_method NVARCHAR(32) NULL
	,Delivery_fee decimal
	,Menu_fee decimal
	,Total_fee decimal
	,Discount DECIMAL(5,2)
	,Create_date datetime NULL
	,Pay_date datetime NULL
	,Pay_complete NVARCHAR(32) NULL
);



IF EXISTS(SELECT * from sys.tables WHERE name='Customer_Invoice')
BEGIN
    DROP TABLE Customer_Invoice;
END

--Create a new tables called Customer_Invoice.
CREATE TABLE dbo.Customer_Invoice
(
    Invoice_id int NOT NULL Identity primary key
	,Staff_id int FOREIGN KEY REFERENCES Staff_info(Staff_id)
	,Pay_id int FOREIGN KEY REFERENCES Pay_Info(Pay_id)
	,Customer_id int FOREIGN KEY REFERENCES Customer_Info(Customer_id)
	,Address_id int FOREIGN KEY REFERENCES Address(Address_id)
	,Create_date datetime NULL
	,Deliver_time datetime NULL
	,Need_invoice bit
	,Invoice_head NVARCHAR(512) NULL
	,Is_delivery NVARCHAR(32) NULL
	,Status_id int FOREIGN KEY REFERENCES Status_info(Status_id)  
);


IF EXISTS(SELECT * from sys.tables WHERE name='Status_info')
BEGIN
    DROP TABLE Status_info;
END

--Create a new tables called Status_info.
CREATE TABLE dbo.Status_info
(
    Status_id int NOT NULL Identity primary key
	,Description NVARCHAR(512) NULL
	,Cause_description NVARCHAR(512) NULL
);

IF EXISTS(SELECT * from sys.tables WHERE name='Image_info')
BEGIN
    DROP TABLE Image_info;
END

--Create a new tables called Image_info.
CREATE TABLE dbo.Image_info
(
    Image_id int NOT NULL Identity primary key
	,Path NVARCHAR(512) 
	,Description NVARCHAR(1024) 
);


IF EXISTS(SELECT * from sys.tables WHERE name='Menu')
BEGIN
    DROP TABLE Menu;
END

--Create a new tables called Menu.
CREATE TABLE dbo.Menu
(
    Menu_id int NOT NULL Identity primary key
	,Menu_name NVARCHAR(512) 
	,Price decimal
	,Description  NVARCHAR(1024) 
	,Flavor NVARCHAR(64) 
	,Rating  NVARCHAR(64)   
	,Is_available   NVARCHAR(32) 
	,Is_new  NVARCHAR(32) 
	,Quantity int
	,Is_Activation  NVARCHAR(32) 
	,Create_date datetime NULL
	,Modified_date datetime NULL
	,Small_Image_id int FOREIGN KEY REFERENCES Image_info(Image_id)
	,Big_Image_id int FOREIGN KEY REFERENCES Image_info(Image_id)
);


IF EXISTS(SELECT * from sys.tables WHERE name='Invoice_Menu')
BEGIN
    DROP TABLE Invoice_Menu;
END

--Create a new tables called Invoice_Menu.
CREATE TABLE dbo.Invoice_Menu
(
    Invoice_menu_id int NOT NULL Identity primary key
	,Invoice_id int FOREIGN KEY REFERENCES Customer_Invoice(Invoice_id)
	,Menu_id int FOREIGN KEY REFERENCES Menu(Menu_id)
	,Quantity int
);





