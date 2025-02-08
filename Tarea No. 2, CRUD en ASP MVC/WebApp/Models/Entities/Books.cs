using System.ComponentModel.DataAnnotations;

namespace WebApp.Models.Entities
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public string Isbn { get; set; }
    }
}
