using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class StaffInfoController : Controller
    {
        //
        // GET: /StaffInfo/
        private IRestaurantRepository repo;

        public StaffInfoController()
        {
            this.repo = new RestaurantRepository(new RestaurantContext());
        }

        public StaffInfoController(IRestaurantRepository contactRepository)
        {
            this.repo = contactRepository;
        }

        public ActionResult Index()
        {
            var staffs = repo.GetStaffs();
            return View(staffs.ToList());
        }

        public ActionResult Details(int id = 0)
        {
            Staff_info staff = repo.GetStaffInfoByID(id);
            staff.Address = repo.GetAddressByID(Convert.ToInt32(staff.Address_id));

            if (staff == null)
            {
                return HttpNotFound();
            }
            return View(staff);
        }

        //
        // GET: /Restaurant/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Restaurant/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Staff_info staff)
        {
            if (ModelState.IsValid)
            {

                try
                {
                    System.Collections.Specialized.NameValueCollection postedValues = Request.Form;
                    staff.Create_date = System.DateTime.Now;
                    staff.Join_date = System.DateTime.Now;
                    staff.Address.City = postedValues["Address.City"];
                    staff.Address.Country = postedValues["Address.Country"];
                    staff.Address.House_number = postedValues["Address.House_number"];
                    staff.Address.Postcode = postedValues["Address.Postcode"];
                    staff.Address.Province = postedValues["Address.Province"];
                    staff.Address.Street_name = postedValues["Address.Street_name"];
                    staff.Address.Street_number = postedValues["Address.Street_number"];
                    repo.InsertStaffInfo(staff);
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

            return View(staff);
        }

        //
        // GET: /Restaurant/Edit/5

        public ActionResult Edit(int id = 0)
        {
            //Menu menu = db.Menus.Find(id);
            Staff_info staff = repo.GetStaffInfoByID(id);
            if (staff == null)
            {
                return HttpNotFound();
            }
            staff.Address = repo.GetAddressByID(Convert.ToInt32(staff.Address_id));
            Session["staff"] = staff;
            return View(staff);
        }

        //
        // POST: /Restaurant/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Staff_info staff)
        {
            if (ModelState.IsValid)
            {

                try
                {

                    System.Collections.Specialized.NameValueCollection postedValues = Request.Form;
                    Address addre = new Address();
                    Staff_info oldStaff = (Staff_info)Session["staff"];
                    staff.Create_date = oldStaff.Create_date;
                    staff.Address_id = oldStaff.Address_id;
                    staff.Staff_id = oldStaff.Staff_id;
                    staff.Address = oldStaff.Address;
                    staff.Address.City = postedValues["Address.City"];
                    staff.Address.Country = postedValues["Address.Country"];
                    staff.Address.House_number = postedValues["Address.House_number"];
                    staff.Address.Postcode = postedValues["Address.Postcode"];
                    staff.Address.Province = postedValues["Address.Province"];
                    staff.Address.Street_name = postedValues["Address.Street_name"];
                    staff.Address.Street_number = postedValues["Address.Street_number"];
                    repo.UpdateAddress(staff.Address);
                    repo.UpdateStaffInfo(staff);
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
            //ViewBag.Big_Image_id = new SelectList(db.Image_info, "Image_id", "Path", menu.Big_Image_id);
            //ViewBag.Small_Image_id = new SelectList(db.Image_info, "Image_id", "Path", menu.Small_Image_id);
            return View(staff);
        }

        //
        // GET: /Restaurant/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Staff_info staff = repo.GetStaffInfoByID(id);
            staff.Address = repo.GetAddressByID(Convert.ToInt32(staff.Address_id));

            if (staff == null)
            {
                return HttpNotFound();
            }
            return View(staff);
        }

        //
        // POST: /Restaurant/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Staff_info staff = repo.GetStaffInfoByID(id);
            repo.DeleteAddress(Convert.ToInt32(staff.Address_id));
            repo.DeleteStaffInfo(id);
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
