namespace ECommerceBackend.Models
{
    public class Category
    {
        public int CategoryID { get; set; } // Primary Key
        public string CategoryName { get; set; }
        public string Description { get; set; }

        // Navigation property
        public ICollection<Product> Products { get; set; }
    }
}
