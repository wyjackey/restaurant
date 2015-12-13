using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestaurantApplication.Models
{
    public class MenuServer
    {
        public int MenuId{get; set;}
        public string MenuName { get; set; }
        public decimal? Price { get; set; }
        public string MenuType { get; set; }
        public string SmallPictureName { get; set; }
        public string SmallPicturePath { get; set; }
        public string BigPictureName { get; set; }
        public string BigPicturePath { get; set; }
        public string Rate { get; set; }
    }
}