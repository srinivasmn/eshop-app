using Backend.Models;

namespace Backend.Controllers;

public static class ProductEndpoints
{
    public static void MapProductEndpoints(this WebApplication app)
    {
        var products = new List<Product>
        {
            new(1, "Wireless Mouse", 25.99m),
            new(2, "Mechanical Keyboard", 79.50m),
            new(3, "HD Monitor", 199.99m)
        };

        app.MapGet("/api/products", () => products);
    }
}
