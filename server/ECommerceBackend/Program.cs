using ECommerceBackend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews(); // This adds MVC controllers for the views

// Add DbContext and configure it to use SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection") + ";TrustServerCertificate=True;")
);

// Add Swagger to the services container
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors(policy => policy
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

// Enable Swagger UI in the HTTP request pipeline for development environment
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage(); // Shows detailed exception page in development
}
else
{
    app.UseExceptionHandler("/Home/Error"); // For production: Show custom error page
    app.UseHsts(); // HTTP Strict Transport Security
}

// Enable middleware to serve Swagger-generated API docs
app.UseSwagger();

// Enable middleware to serve Swagger UI (HTML, JS, CSS, etc.) at the root (http://localhost:5000)
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "ECommerce API v1"); // Path to the generated Swagger JSON
    c.RoutePrefix = string.Empty; // Makes Swagger UI available at the root, i.e., http://localhost:5000/
});

// Enable HTTPS redirection and static files
app.UseHttpsRedirection();
app.UseStaticFiles();

// Use routing middleware for controller-based routes
app.UseRouting();

// Ensure authorization middleware is added
app.UseAuthorization();

// Map default controller route (Home controller by default)
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

// Start the application
app.Run();
