using Restaurant.App_GlobalResources;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
//using Restaurant.Models.AnnotatedModels;




namespace Restaurant.Models
{

    [MetadataType(typeof(MenuMetadata))]
    /// <summary>
    /// partial class for order, with the metatdata for
    /// annotations and edits applied
    /// </summary>
    public partial class Menu
    {


    }

    /// <summary>
    /// metadata to be applied to the order class, so as to
    /// not affect the generated code
    /// </summary>
    public class MenuMetadata
    {
        //[ScaffoldColumn(false)]
        //[Required(ErrorMessageResourceName = "Required",
        //   ErrorMessageResourceType = typeof(Restaurant))]
        //[Display(Name = "orderId", ResourceType = typeof(Translations))]
        //public int orderId { get; set; }
        //[ScaffoldColumn(false)]
        //[Display(Name = "orderDate", ResourceType = typeof(Translations))]
        //public System.DateTime orderDate { get; set; }
        //public string userName { get; set; }
        //[Required(ErrorMessageResourceName = "Required",
        //    ErrorMessageResourceType = typeof(Translations))]
        //[Display(Name = "firstName", ResourceType = typeof(Translations))]
        //public string firstName { get; set; }
        //[Display(Name = "lastName", ResourceType = typeof(Translations))]
        //[Required(ErrorMessageResourceName = "Required",
        //    ErrorMessageResourceType = typeof(Translations))]
        //[StringLength(20)]
        //public string lastName { get; set; }
        //public string address { get; set; }
        //public string city { get; set; }
        //public string provinceCode { get; set; }
        //[Remote("PostalEdit", "Checkout")]
        //public string postalCode { get; set; }
        //public string countryCode { get; set; }
        //[RegularExpression(@"^\d{3}-\d{3}-\d{4}$",
        //    ErrorMessage = "{0} does not match a phone pattern 123-123-1234")]
        //[Required(ErrorMessageResourceName = "Required",
        //    ErrorMessageResourceType = typeof(Translations))]
        //public string phone { get; set; }
        //public string email { get; set; }
        //public float total { get; set; }


        [ScaffoldColumn(false)]
        [Required(ErrorMessageResourceName = "Required",
           ErrorMessageResourceType = typeof(Restaurants))]
        [Display(Name = "Menu_id", ResourceType = typeof(Restaurants))]
        public int Menu_id { get; set; }
        [Display(Name = "menuName", ResourceType = typeof(Restaurants))]
        public string Menu_name { get; set; }
        [Display(Name = "price", ResourceType = typeof(Restaurants))]
        public Nullable<decimal> Price { get; set; }
        [Display(Name = "Description", ResourceType = typeof(Restaurants))]
        public string Description { get; set; }
        [Display(Name = "Flavor", ResourceType = typeof(Restaurants))]
        public string Flavor { get; set; }
        [Display(Name = "Rating", ResourceType = typeof(Restaurants))]
        public string Rating { get; set; }
        [Display(Name = "Is_available", ResourceType = typeof(Restaurants))]
        public string Is_available { get; set; }
        [Display(Name = "Is_new", ResourceType = typeof(Restaurants))]
        public string Is_new { get; set; }
        [Display(Name = "Quantity", ResourceType = typeof(Restaurants))]
        public Nullable<int> Quantity { get; set; }
        [Display(Name = "Is_Activation", ResourceType = typeof(Restaurants))]
        public string Is_Activation { get; set; }
        [Display(Name = "Create_date", ResourceType = typeof(Restaurants))]
        public Nullable<System.DateTime> Create_date { get; set; }
        [Display(Name = "Modified_date", ResourceType = typeof(Restaurants))]
        public Nullable<System.DateTime> Modified_date { get; set; }
        public Nullable<int> Small_Image_id { get; set; }
        public Nullable<int> Big_Image_id { get; set; }
    
        public virtual Image_info Image_info { get; set; }
        public virtual Image_info Image_info1 { get; set; }
        public virtual ICollection<Invoice_Menu> Invoice_Menu { get; set; }
    }
}