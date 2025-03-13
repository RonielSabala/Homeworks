using Microsoft.EntityFrameworkCore;
using WebApp.Models.Entities;

namespace WebApp.Data
{
    public class WebAppContext : DbContext
    {
        public WebAppContext (DbContextOptions<WebAppContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; } = default!;
    }
}
