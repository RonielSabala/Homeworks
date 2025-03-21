var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.MapGet("/", context =>
{
    context.Response.Redirect("/Vanilla/index.html");
    return Task.CompletedTask;
});

app.Run();
