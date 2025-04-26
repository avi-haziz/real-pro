using System;
using System.Collections.Generic;

namespace TodoApi;

public partial class Item
{
    public int ItemId { get; set; }

    public string? Name { get; set; }

    public bool? IsComplate { get; set; }
}
