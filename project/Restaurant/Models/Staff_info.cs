//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的�?
//
//    手动更改此文件可能会导致应用程序中发生异常行为�?
//    如果重新生成代码，则将覆盖对此文件的手动更改�?
// </auto-generated>
//------------------------------------------------------------------------------

namespace Restaurant.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Staff_info
    {
        public Staff_info()
        {
            this.Customer_Invoice = new HashSet<Customer_Invoice>();
        }
    
        public int Staff_id { get; set; }
        public string Name { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        public string Phone3 { get; set; }
        public Nullable<System.DateTime> Birthday_date { get; set; }
        public Nullable<int> Address_id { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public Nullable<int> Age { get; set; }
        public System.DateTime Create_date { get; set; }
        public Nullable<System.DateTime> Join_date { get; set; }
        public Nullable<System.DateTime> End_date { get; set; }
        public string Status { get; set; }
    
        public virtual Address Address { get; set; }
        public virtual ICollection<Customer_Invoice> Customer_Invoice { get; set; }
    }
}
