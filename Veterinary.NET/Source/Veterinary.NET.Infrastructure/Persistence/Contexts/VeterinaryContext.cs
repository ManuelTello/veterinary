using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Veterinary.NET.Infrastructure.Persistence.Contexts
{
    public class VeterinaryContext:IdentityDbContext<IdentityUser>
    {
        public VeterinaryContext(DbContextOptions<VeterinaryContext> options):base(options){} 
    }
}

