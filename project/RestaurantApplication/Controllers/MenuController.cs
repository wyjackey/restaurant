using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Restaurant.Models;
using RestaurantApplication.Models;
using System.Net;

namespace RestaurantApplication.Controllers
{
    public class MenuController : ApiController
    {
        //
        // GET: /Menu/

        private IRestaurantRepository repo;

        public MenuController()
        {
            this.repo = new RestaurantRepository(new RestaurantContext());
        }

        public MenuController(IRestaurantRepository contactRepository)
        {
            this.repo = contactRepository;
        }

        //public ActionResult Index()
        //{
        //    return View();
        //}

        public IHttpActionResult GetMenu(int id)
        {
            var menu = repo.GetMenuByID(id);
            menu.Image_info1 = repo.GetImageInfoByID(Convert.ToInt32(menu.Big_Image_id));
            menu.Image_info = repo.GetImageInfoByID(Convert.ToInt32(menu.Small_Image_id));
            menu.Menu_type = repo.GetMenuTypeByID(Convert.ToInt32(menu.menu_type_id));
            if (menu == null)
            {
                return NotFound();
            }
            return Ok(menu);
        }

        public IEnumerable<MenuServer> GetAllMenus()
        {
           List<MenuServer> menuServerList = new List<MenuServer>();
           List<Menu> menuList = repo.GetMenus().ToList();
           foreach (Menu menu in menuList)
           {
               MenuServer menuServer = new MenuServer();
               menuServer.MenuId = menu.Menu_id;
               menuServer.MenuName = menu.Menu_name;
               menuServer.Price = menu.Price;
               menuServer.MenuType = menu.Menu_type.type_name;
               menuServer.SmallPictureName = menu.Image_info.Name;
               menuServer.SmallPicturePath = menu.Image_info.Path;
               menuServer.BigPictureName = menu.Image_info1.Name;
               menuServer.BigPicturePath = menu.Image_info1.Path;
               menuServer.Rate = menu.Rating;
               menuServerList.Add(menuServer);
           }
           return menuServerList;
        }


    }
}
