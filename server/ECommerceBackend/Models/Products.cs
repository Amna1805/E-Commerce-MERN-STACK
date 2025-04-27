﻿namespace ECommerceBackend.Models
{
    public class Product
    {
        public int ProductID { get; set; } // Primary Key
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageURL { get; set; }
        public int Quantity { get; set; }

        // Foreign Key
        public int CategoryID { get; set; }
     //  public Category Category { get; set; }
    }
}
