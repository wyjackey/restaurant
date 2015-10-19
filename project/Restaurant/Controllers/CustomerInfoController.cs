using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class CustomerInfoController : Controller
    {
        //private RestaurantContext db = new RestaurantContext();

        //
        // GET: /CustomerInfo/
        private IRestaurantRepository repo;

        public CustomerInfoController()
        {
            this.repo = new RestaurantRepository(new RestaurantContext());
        }

        public CustomerInfoController(IRestaurantRepository contactRepository)
        {
            this.repo = contactRepository;
        }

        public ActionResult Index()
        {
            var customers = repo.GetCustomers();
            return View(customers.ToList());
        }

        //
        // GET: /CustomerInfo/Details/5

        public ActionResult Details(int id = 0)
        {
            Customer_Info customer_info = repo.GetCustomerInfoByID(id);
            customer_info.Address = repo.GetAddressByID(Convert.ToInt32(customer_info.Address_id));

            if (customer_info == null)
            {
                return HttpNotFound();
            }
            return View(customer_info);
        }

        //
        // GET: /CustomerInfo/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /CustomerInfo/Create

        [HttpPost]
        public ActionResult Create(Customer_Info customer_info)
        {
            if (ModelState.IsValid)
            {
                System.Collections.Specialized.NameValueCollection postedValues = Request.Form;
                customer_info.Address.City = postedValues["Address.City"];
                customer_info.Address.Country = postedValues["Address.Country"];
                customer_info.Address.House_number = postedValues["Address.House_number"];
                customer_info.Address.Postcode = postedValues["Address.Postcode"];
                customer_info.Address.Province = postedValues["Address.Province"];
                customer_info.Address.Street_name = postedValues["Address.Street_name"];
                customer_info.Address.Street_number = postedValues["Address.Street_number"];
                repo.InsertCustomerInfo(customer_info);
                repo.Save();
                return RedirectToAction("Index");
            }

            return View(customer_info);
        }

        //
        // GET: /CustomerInfo/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Customer_Info customer_info = repo.GetCustomerInfoByID(id);
            if (customer_info == null)
            {
                return HttpNotFound();
            }
            customer_info.Address = repo.GetAddressByID(Convert.ToInt32(customer_info.Address_id));
            Session["customer"] = customer_info;
            return View(customer_info);
        }

        //
        // POST: /CustomerInfo/Edit/5

        [HttpPost]
        public ActionResult Edit(Customer_Info customer_info)
        {
            if (ModelState.IsValid)
            {
                try
                {

                    System.Collections.Specialized.NameValueCollection postedValues = Request.Form;
                    Address addre = new Address();
                    Customer_Info oldCustomer = (Customer_Info)Session["customer"];
                    customer_info.Address_id = oldCustomer.Address_id;
                    customer_info.Customer_id = oldCustomer.Customer_id;
                    customer_info.Address = oldCustomer.Address;
                    customer_info.Address.City = postedValues["Address.City"];
                    customer_info.Address.Country = postedValues["Address.Country"];
                    customer_info.Address.House_number = postedValues["Address.House_number"];
                    customer_info.Address.Postcode = postedValues["Address.Postcode"];
                    customer_info.Address.Province = postedValues["Address.Province"];
                    customer_info.Address.Street_name = postedValues["Address.Street_name"];
                    customer_info.Address.Street_number = postedValues["Address.Street_number"];
                    repo.UpdateAddress(customer_info.Address);
                    repo.UpdateCustomerInfo(customer_info);
                    repo.Save();
                    return RedirectToAction("Index");
                }
                catch (Exception ex)
                {
                    //get the innermost exception
                    while (ex.InnerException != null)
                    {
                        ex = ex.InnerException;
                    }
                    ModelState.AddModelError("", "error on create: " + ex.GetBaseException().Message);
                }
            }
            return View(customer_info);
        }

        //
        // GET: /CustomerInfo/Delete/5

        public ActionResult Delete(int id = 0)
        {
            //Customer_Info customer_info = db.Customer_Info.Find(id);
            Customer_Info customer_info = repo.GetCustomerInfoByID(id);
            customer_info.Address = repo.GetAddressByID(Convert.ToInt32(customer_info.Address_id));
            if (customer_info == null)
            {
                return HttpNotFound();
            }
            return View(customer_info);
        }

        //
        // POST: /CustomerInfo/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Customer_Info customer_info = repo.GetCustomerInfoByID(id);
            repo.DeleteAddress(Convert.ToInt32(customer_info.Address_id));
            repo.DeleteCustomerInfo(id);
            repo.Save();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            repo.Dispose();
            base.Dispose(disposing);
        }
    }
}