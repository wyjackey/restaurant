using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Restaurant.Models
{
    public interface IRestaurantRepository : IDisposable
    {
        IEnumerable<Menu> GetMenus();
        IEnumerable<Staff_info> GetStaffs();
        IEnumerable<Customer_Info> GetCustomers();
        //table Menu
        Menu GetMenuByID(int menuID);
        void InsertMenu(Menu menu);
        void DeleteMenu(int menuID);
        void UpdateMenu(Menu menu);
        IEnumerable<Menu> SearchMenus(string searchString);
        //table Address
        Address GetAddressByID(int addressID);
        void InsertAddress(Address address);
        void DeleteAddress(int addressID);
        void UpdateAddress(Address address);
        //table customer_invoice
        Customer_Invoice GetCustomerInvoiceByID(int customerInvoiceID);
        void InsertCustomerInvoice(Customer_Invoice customerInvoice);
        void DeleteCustomerInvoice(int customerInvoiceID);
        void UpdateCustomerInvoice(Customer_Invoice customerInvoice);
        //table Staff_info
        Staff_info GetStaffInfoByID(int staffInfoID);
        void InsertStaffInfo(Staff_info staffInfo);
        void DeleteStaffInfo(int staffInfoID);
        void UpdateStaffInfo(Staff_info staffInfo);
        //table Customer_Info
        Customer_Info GetCustomerInfoByID(int customerInfoID);
        void InsertCustomerInfo(Customer_Info customerInfo);
        void DeleteCustomerInfo(int customerInfoID);
        void UpdateCustomerInfo(Customer_Info customerInfo);
        //table Image_info
        Image_info GetImageInfoByID(int imageInfoID);
        void InsertImageInfo(Image_info imageInfo);
        void DeleteImageInfo(int imageInfoID);
        void UpdateImageInfo(Image_info imageInfo);
        int GetImageIDByName(string imageName);

        //table Menu_type
        Menu_type GetMenuTypeByID(int menuTypeId);
        void InsertMenuType(Menu_type menuType);
        void DeleteMenuType(int menuTypeID);
        void UpdateMenuType(Menu_type menuType);
        int GetMenuTypeIDByName(string menuTypeName);

        //table Invoice_Menu
        Invoice_Menu GetInvoiceMenuByID(int invoiceMenuID);
        void InsertInvoiceMenu(Invoice_Menu invoiceMenu);
        void DeleteInvoiceMenu(int invoiceMenuID);
        void UpdateInvoiceMenu(Invoice_Menu invoiceMenu);
        //table Pay_Info
        Pay_Info GetPayInfoByID(int payInfoID);
        void InsertPayInfo(Pay_Info payInfo);
        void DeletePayInfo(int payInfoID);
        void UpdatePayInfo(Pay_Info payInfo);
        //table Status_info
        Status_info GetStatusInfoByID(int statusInfoID);
        void InsertStatusInfo(Status_info statusInfo);
        void DeleteStatusInfo(int statusInfoID);
        void UpdateStatusInfo(Status_info statusInfo);
        void Save();
    }
}