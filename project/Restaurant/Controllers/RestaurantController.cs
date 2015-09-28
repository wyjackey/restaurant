using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Restaurant.Models;
using System.IO;

namespace Restaurant.Controllers
{
    public class RestaurantController : Controller
    {

        private IRestaurantRepository repo;

        public RestaurantController()
        {
            this.repo = new RestaurantRepository(new RestaurantContext());
        }

        public RestaurantController(IRestaurantRepository contactRepository)
        {
            this.repo = contactRepository;
        }

        //
        // GET: /Restaurant/

        public ActionResult Index()
        {
            //var menus = db.Menus.Include(m => m.Image_info).Include(m => m.Image_info1);
            var menus = repo.GetMenus();
            return View(menus.ToList());
        }

        //
        // GET: /Restaurant/Details/5

        public ActionResult Details(int id = 0)
        {
            //Menu menu = db.Menus.Find(id);
            Menu menu = repo.GetMenuByID(id);
            menu.Image_info1 = repo.GetImageInfoByID(Convert.ToInt32(menu.Big_Image_id));
            menu.Image_info = repo.GetImageInfoByID(Convert.ToInt32(menu.Small_Image_id));

            if (menu == null)
            {
                return HttpNotFound();
            }
            return View(menu);
        }

        //
        // GET: /Restaurant/Create

        public ActionResult Create()
        {
            //ViewBag.Big_Image_id = new SelectList(repo.GetImageInfoByID(), "Image_id", "Path");
            //ViewBag.Small_Image_id = new SelectList(db.Image_info, "Image_id", "Path");
            return View();
        }

        //
        // POST: /Restaurant/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Menu menu, HttpPostedFileBase file)
        {
            if (ModelState.IsValid)
            {
                //db.Menus.Add(menu);
                //db.SaveChanges();

                // Get the current directory. 

                //Image_info smallPicture = new Image_info();
                //Image_info bigPicture = new Image_info();

                try
                {
                    file = Request.Files[0];

                    if (file != null && file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        //smallPicture.Name = fileName;

                        string target = @"~/Images/profile/" + menu.Menu_name + GetHashCode().ToString();

                        if (!Directory.Exists(Server.MapPath(target)))
                        {
                            Directory.CreateDirectory(Server.MapPath(target));
                        }
                        var newPath = Path.Combine(Server.MapPath(target), fileName);
                        file.SaveAs(newPath);

                        //smallPicture.Path = newPath;
                        //smallPicture.Description = menu.Image_info1.Description;

                        //repo.InsertImageInfo(smallPicture);
                        //repo.Save();

                        menu.Image_info.Name = fileName;
                        menu.Image_info.Path = target;

                        //menu.Small_Image_id = repo.GetImageIDByName(smallPicture.Name);
                    }


                    file = Request.Files[1];

                    if (file != null && file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        //bigPicture.Name = fileName;

                        string target = @"~/Images/profile/" + menu.Menu_name + GetHashCode().ToString();

                        if (!Directory.Exists(Server.MapPath(target)))
                        {
                            Directory.CreateDirectory(Server.MapPath(target));
                        }
                        var newPath = Path.Combine(Server.MapPath(target), fileName);
                        file.SaveAs(newPath);

                        //bigPicture.Path = newPath;
                        //bigPicture.Description = menu.Image_info.Description;

                        //repo.InsertImageInfo(bigPicture);
                        //repo.Save();
                        menu.Image_info1.Name = fileName;
                        menu.Image_info1.Path = target;
                        //menu.Big_Image_id = repo.GetImageIDByName(bigPicture.Name);
                    }

                    menu.Create_date = System.DateTime.Now;
                    menu.Modified_date = System.DateTime.Now;
                    repo.InsertMenu(menu);
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
            return View(menu);
        }

        //
        // GET: /Restaurant/Edit/5

        public ActionResult Edit(int id = 0)
        {
            //Menu menu = db.Menus.Find(id);
            Menu menu = repo.GetMenuByID(id);
            if (menu == null)
            {
                return HttpNotFound();
            }
            //ViewBag.Big_Image_id = new SelectList(db.Image_info, "Image_id", "Path", menu.Big_Image_id);
            //ViewBag.Small_Image_id = new SelectList(db.Image_info, "Image_id", "Path", menu.Small_Image_id);
            return View(menu);
        }

        //
        // POST: /Restaurant/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Menu menu)
        {
            if (ModelState.IsValid)
            {
                repo.UpdateMenu(menu);
                repo.Save();
                //db.Entry(menu).State = EntityState.Modified;
                //db.SaveChanges();
                return RedirectToAction("Index");
            }
            //ViewBag.Big_Image_id = new SelectList(db.Image_info, "Image_id", "Path", menu.Big_Image_id);
            //ViewBag.Small_Image_id = new SelectList(db.Image_info, "Image_id", "Path", menu.Small_Image_id);
            return View(menu);
        }

        //
        // GET: /Restaurant/Delete/5

        public ActionResult Delete(int id = 0)
        {
            //Menu menu = db.Menus.Find(id);
            Menu menu = repo.GetMenuByID(id);
            if (menu == null)
            {
                return HttpNotFound();
            }
            return View(menu);
        }

        //
        // POST: /Restaurant/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            repo.DeleteMenu(id);
            repo.Save();
            //Menu menu = db.Menus.Find(id);
            //db.Menus.Remove(menu);
            //db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            repo.Dispose();
            base.Dispose(disposing);
        }
    }
}