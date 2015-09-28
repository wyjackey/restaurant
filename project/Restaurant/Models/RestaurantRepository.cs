using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Restaurant.Models
{
    public class RestaurantRepository : IRestaurantRepository, IDisposable
    {
         private RestaurantContext context;

        public RestaurantRepository(RestaurantContext context)
        {
            this.context = context;
        }

        public IEnumerable<Menu> GetMenus()
        {
            return context.Database.SqlQuery<Models.Menu>("GetAllMenus").ToList();
        }

        public Menu GetMenuByID(int id)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = id
            };
            Menu result = context.Database.SqlQuery<Models.Menu>("GetMenuByID @id", idParam).FirstOrDefault() as Menu;

            return result;
        }

        public IEnumerable<Menu> SearchMenus(string searchString)
        {
            if (!String.IsNullOrEmpty(searchString))
            {
                var searchParam = new System.Data.SqlClient.SqlParameter
                {
                    ParameterName = "@searchString",
                    Value = searchString
                };

                var results = context.Database.SqlQuery<Models.Menu>("searchMenus  @searchString", searchParam).ToList();
                return results;
            }
            else
            {
                return GetMenus();
            }
            
        }



        public void InsertMenu(Menu menu)
        {
            int id = context.Database.SqlQuery<int>("GetMaxID").Single() + 1;
            context.Menus.Add(menu);
        }

        public void DeleteMenu(int menuID)
        {
            Menu menu = context.Menus.Find(menuID);
            context.Menus.Remove(menu);
        }

        public void UpdateMenu(Menu menu)
        {
            context.Entry(menu).State = EntityState.Modified;
        }

        public Address GetAddressByID(int id)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = id
            };
            Address result = context.Database.SqlQuery<Models.Address>("GetAddressByID @id", idParam).FirstOrDefault() as Address;

            return result;
        }

        public void InsertAddress(Address address)
        {
            int id = context.Database.SqlQuery<int>("GetAddressMaxID").Single() + 1;
            context.Addresses.Add(address);
        }

        public void DeleteAddress(int addressID)
        {
            Address address = context.Addresses.Find(addressID);
            context.Addresses.Remove(address);
        }

        public void UpdateAddress(Address address)
        {
            context.Entry(address).State = EntityState.Modified;
        }

        //table Customer_invoice
        public Customer_Invoice GetCustomerInvoiceByID(int customerInvoiceID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = customerInvoiceID
            };
            Customer_Invoice result = context.Database.SqlQuery<Models.Customer_Invoice>("GetCustomerInvoiceByID @id", idParam).FirstOrDefault() as Customer_Invoice;

            return result;
        }

        public void InsertCustomerInvoice(Customer_Invoice customerInvoice)
        {
            int id = context.Database.SqlQuery<int>("GetCustomerInvoiceMaxID").Single() + 1;
            context.Customer_Invoice.Add(customerInvoice);
        }

        public void DeleteCustomerInvoice(int customerInvoiceID)
        {
            Customer_Invoice customerInvoice = context.Customer_Invoice.Find(customerInvoiceID);
            context.Customer_Invoice.Remove(customerInvoice);
        }

        public void UpdateCustomerInvoice(Customer_Invoice customerInvoice)
        {
            context.Entry(customerInvoice).State = EntityState.Modified;
        }

        //table Staff_info
        public Staff_info GetStaffInfoByID(int staffInfoID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = staffInfoID
            };
            Staff_info result = context.Database.SqlQuery<Models.Staff_info>("GetStaffInfoByID @id", idParam).FirstOrDefault() as Staff_info;

            return result;
        }

        public void InsertStaffInfo(Staff_info staffInfo)
        {
            int id = context.Database.SqlQuery<int>("GetStaffInfoMaxID").Single() + 1;
            context.Staff_info.Add(staffInfo);
        }

        public void DeleteStaffInfo(int staffInfoID)
        {
            Staff_info staffInfo = context.Staff_info.Find(staffInfoID);
            context.Staff_info.Remove(staffInfo);
        }

        public void UpdateStaffInfo(Staff_info staffInfo)
        {
            context.Entry(staffInfo).State = EntityState.Modified;
        }


        //table Customer_Info
        public Customer_Info GetCustomerInfoByID(int customerInfoID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = customerInfoID
            };
            Customer_Info result = context.Database.SqlQuery<Models.Customer_Info>("GetCustomerInfoByID @id", idParam).FirstOrDefault() as Customer_Info;

            return result;
        }

        public void InsertCustomerInfo(Customer_Info customerInfo)
        {
            int id = context.Database.SqlQuery<int>("GetCustomerInfoMaxID").Single() + 1;
            context.Customer_Info.Add(customerInfo);
        }

        public void DeleteCustomerInfo(int customerInfoID)
        {
            Customer_Info customerInfo = context.Customer_Info.Find(customerInfoID);
            context.Customer_Info.Remove(customerInfo);
        }

        public void UpdateCustomerInfo(Customer_Info customerInfo)
        {
            context.Entry(customerInfo).State = EntityState.Modified;
        }


        //table Image_info
        public Image_info GetImageInfoByID(int imageInfoID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = imageInfoID
            };
            Image_info result = context.Database.SqlQuery<Models.Image_info>("GetImageInfoByID @id", idParam).FirstOrDefault() as Image_info;

            return result;
        }

        public int GetImageIDByName(string imageName)
        {
            if (!String.IsNullOrEmpty(imageName))
            {
                var idParam = new System.Data.SqlClient.SqlParameter
                {
                    ParameterName = "@imageName",
                    Value = imageName
                };

                int results = Convert.ToInt32(context.Database.SqlQuery<int>("GetImageIDByName  @imageName", idParam).FirstOrDefault());
                return results;
            }
            else
            {
                return -1;
            }
        }

        public void InsertImageInfo(Image_info imageInfo)
        {
            int id = Convert.ToInt32(context.Database.SqlQuery<int>("GetImageInfoMaxID").FirstOrDefault()) + 1;
            context.Image_info.Add(imageInfo);
        }

        public void DeleteImageInfo(int imageInfoID)
        {
            Image_info imageInfo = context.Image_info.Find(imageInfoID);
            context.Image_info.Remove(imageInfo);
        }

        public void UpdateImageInfo(Image_info imageInfo)
        {
            context.Entry(imageInfo).State = EntityState.Modified;
        }

        //table Invoice_Menu
        public Invoice_Menu GetInvoiceMenuByID(int invoiceMenuID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = invoiceMenuID
            };
            Invoice_Menu result = context.Database.SqlQuery<Models.Invoice_Menu>("GetInvoiceMenuByID @id", idParam).FirstOrDefault() as Invoice_Menu;

            return result;
        }

        public void InsertInvoiceMenu(Invoice_Menu invoiceMenu)
        {
            int id = context.Database.SqlQuery<int>("GetInvoiceMenuMaxID").Single() + 1;
            context.Invoice_Menu.Add(invoiceMenu);
        }

        public void DeleteInvoiceMenu(int invoiceMenuID)
        {
            Invoice_Menu invoiceMenu = context.Invoice_Menu.Find(invoiceMenuID);
            context.Invoice_Menu.Remove(invoiceMenu);
        }

        public void UpdateInvoiceMenu(Invoice_Menu invoiceMenu)
        {
            context.Entry(invoiceMenu).State = EntityState.Modified;
        }

        //table Pay_Info
        public Pay_Info GetPayInfoByID(int payInfoID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = payInfoID
            };
            Pay_Info result = context.Database.SqlQuery<Models.Pay_Info>("GetPayInfoByID @id", idParam).FirstOrDefault() as Pay_Info;

            return result;
        }

        public void InsertPayInfo(Pay_Info payInfo)
        {
            int id = context.Database.SqlQuery<int>("GetPayInfoMaxID").Single() + 1;
            context.Pay_Info.Add(payInfo);
        }

        public void DeletePayInfo(int payInfoID)
        {
            Pay_Info payInfo = context.Pay_Info.Find(payInfoID);
            context.Pay_Info.Remove(payInfo);
        }

        public void UpdatePayInfo(Pay_Info payInfo)
        {
            context.Entry(payInfo).State = EntityState.Modified;
        }


        //table Status_info
        public Status_info GetStatusInfoByID(int statusInfoID)
        {
            var idParam = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = "@id",
                Value = statusInfoID
            };
            Status_info result = context.Database.SqlQuery<Models.Status_info>("GetStatusInfoByID @id", idParam).FirstOrDefault() as Status_info;

            return result;
        }

        public void InsertStatusInfo(Status_info statusInfo)
        {
            int id = context.Database.SqlQuery<int>("GetStatusInfoMaxID").Single() + 1;
            context.Status_info.Add(statusInfo);
        }

        public void DeleteStatusInfo(int statusInfoID)
        {
            Status_info statusInfo = context.Status_info.Find(statusInfoID);
            context.Status_info.Remove(statusInfo);
        }

        public void UpdateStatusInfo(Status_info payInfo)
        {
            context.Entry(payInfo).State = EntityState.Modified;
        }


        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    
        public  Menu menu 
        { 
            get; set; 
        }
    }
}