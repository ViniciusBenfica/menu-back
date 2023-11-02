﻿using menu_back.Models;
using Microsoft.EntityFrameworkCore;

namespace menu_back.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }
        public DbSet<RestaurantOwner> RestaurantOwner { get; set; }
        public DbSet<Restaurant> Restaurant { get; set; }

    }
}
