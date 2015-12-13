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

        public ActionResult MenuIndex()
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
            menu.Menu_type = repo.GetMenuTypeByID(Convert.ToInt32(menu.menu_type_id));

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

                try
                {
                    file = Request.Files[0];
                    //System.Collections.Specialized.NameValueCollection postedValues = Request.Form;
                    //menu.Menu_type.type_name = postedValues["Menutype"];

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

                        menu.Image_info1.Name = fileName;
                        menu.Image_info1.Path = target;
                        
                    }

                    file = Request.Files[1];

                    if (file != null && file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);

                        string target = @"~/Images/profile/" + menu.Menu_name + GetHashCode().ToString();

                        if (!Directory.Exists(Server.MapPath(target)))
                        {
                            Directory.CreateDirectory(Server.MapPath(target));
                        }
                        var newPath = Path.Combine(Server.MapPath(target), fileName);
                        file.SaveAs(newPath);

                        menu.Image_info.Name = fileName;
                        menu.Image_info.Path = target;
                    }

                    menu.Create_date = System.DateTime.Now;
                    menu.Modified_date = System.DateTime.Now;
                    repo.InsertMenu(menu);
                    repo.Save();
                    return RedirectToAction("MenuIndex");
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
            menu.Image_info = repo.GetImageInfoByID(Convert.ToInt32(menu.Big_Image_id));
            menu.Image_info1 = repo.GetImageInfoByID(Convert.ToInt32(menu.Small_Image_id));
            menu.Menu_type = repo.GetMenuTypeByID(Convert.ToInt32(menu.menu_type_id));
            Session["menu"] = menu;
            return View(menu);
        }

        //
        // POST: /Restaurant/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Menu menu, HttpPostedFileBase file)
        {
            if (ModelState.IsValid)
            {

                try
                {
                    Image_info bigImage = new Image_info();
                    Image_info smallImage = new Image_info();
                    Menu oldMenu = (Menu)Session["menu"];
                    menu.Create_date = oldMenu.Create_date;
                    menu.Modified_date = System.DateTime.Now;
                    menu.Big_Image_id = oldMenu.Big_Image_id;
                    menu.Menu_id = oldMenu.Menu_id;
                    menu.Small_Image_id = oldMenu.Small_Image_id;
                    menu.menu_type_id = oldMenu.menu_type_id;
                    oldMenu.Image_info.Description = menu.Image_info.Description;
                    oldMenu.Image_info1.Description = menu.Image_info1.Description;
                    oldMenu.Menu_type.type_name = menu.Menu_type.type_name;

                    menu.Image_info = oldMenu.Image_info;
                    menu.Image_info1 = oldMenu.Image_info1;
                    menu.Menu_type = oldMenu.Menu_type;
                    file = Request.Files[0];
                    if (file != null && file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        //smallPicture.Name = fileName;
                        if (fileName == null)
                        {
                            //menu.Image_info.Image_id
                        }

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

                        menu.Image_info1.Name = fileName;
                        menu.Image_info1.Path = target;

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
                        menu.Image_info.Name = fileName;
                        menu.Image_info.Path = target;
                        //menu.Big_Image_id = repo.GetImageIDByName(bigPicture.Name);
                    }
  
                    repo.UpdateMenu(menu);
                    //repo.InsertMenu(menu);
                    repo.Save();
                    return RedirectToAction("MenuIndex");
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
        // GET: /Restaurant/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Menu menu = repo.GetMenuByID(id);
            menu.Image_info1 = repo.GetImageInfoByID(Convert.ToInt32(menu.Big_Image_id));
            menu.Image_info = repo.GetImageInfoByID(Convert.ToInt32(menu.Small_Image_id));
            menu.Menu_type = repo.GetMenuTypeByID(Convert.ToInt32(menu.menu_type_id));

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
            Menu menu = repo.GetMenuByID(id);
            repo.DeleteImageInfo(Convert.ToInt32(menu.Big_Image_id));
            repo.DeleteImageInfo(Convert.ToInt32(menu.Small_Image_id));
            repo.DeleteMenuType(Convert.ToInt32(menu.menu_type_id));
            repo.DeleteMenu(id);
            repo.Save();
            return RedirectToAction("MenuIndex");
        }

        protected override void Dispose(bool disposing)
        {
            repo.Dispose();
            base.Dispose(disposing);
        }
    }
}