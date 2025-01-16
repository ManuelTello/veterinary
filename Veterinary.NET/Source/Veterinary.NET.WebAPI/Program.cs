using Veterinary.NET.Infrastructure;
using Veterinary.NET.Infrastructure.Persistence.Contexts;
using Veterinary.NET.Application;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddInfrastructure(builder.Configuration).AddApplication();
builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<IdentityUser>().AddEntityFrameworkStores<IdentityContext>();
if (builder.Environment.IsDevelopment())
{
    builder.Services.Configure<IdentityOptions>(options =>
    {
        options.SignIn.RequireConfirmedAccount = false;
        options.SignIn.RequireConfirmedEmail = false;
        options.SignIn.RequireConfirmedPhoneNumber = false;
    });
}

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}else{}

app.UseHttpsRedirection();
app.MapGroup("/identity").MapIdentityApi<IdentityUser>();
app.UseAuthorization();
app.MapControllers();
app.Run();