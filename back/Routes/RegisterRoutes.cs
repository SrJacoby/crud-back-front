using System;

public static class RegisterRoute
{
    public static void RegisterRoutes(this WebApplication app)
    {
        app.MapGet("person", () => "Olá pessoa!");
    }
}