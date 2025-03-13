using Microsoft.EntityFrameworkCore;
using ThesisHub.Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ThesisHubContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ThesisHubStrConnection") ?? throw new InvalidOperationException("Connection string 'ThesisHubContext' not found.")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
