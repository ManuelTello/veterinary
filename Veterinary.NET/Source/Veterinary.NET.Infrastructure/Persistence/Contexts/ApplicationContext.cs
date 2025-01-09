using Microsoft.EntityFrameworkCore;

namespace Veterinary.NET.Infrastructure.Persistence.Contexts
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options):base(options){}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            var assembly = typeof(ApplicationContext).Assembly;
            builder.ApplyConfigurationsFromAssembly(assembly);
        }
    }
}

