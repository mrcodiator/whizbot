import { DollarSign, List, ShoppingBag, Users } from "lucide-react";

export const AnalyticStatus = [
    {
        id: 1,
        title: "Customers",
        number: 300,
        icon: <Users className="h-6 w-6" />
    },

    {
        id: 2,
        title: "Revenue",
        number: 5000,
        icon: <DollarSign className="h-6 w-6" />
    },
    {
        id: 3,
        title: "Orders",
        number: 100,
        icon: <List className="h-6 w-6" />
    },
    {
        id: 4,
        title: "Products",
        number: 100,
        icon: <ShoppingBag className="h-6 w-6" />
    }
]