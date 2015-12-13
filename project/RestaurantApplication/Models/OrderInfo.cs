using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Restaurant.Models;

namespace RestaurantApplication.Models
{
    public class OrderInfo
    {
        public bool IsDeliver { get; set; }
        public string PayMethod { get; set; }
        public DateTime TakeTime { get; set; }
        public int Amount { get; set; }


        public Address Address { get; set; }
        public Customer_Info CustomerInfo { get; set; }
    }
}