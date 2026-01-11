import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { restaurants, foodItems } from '@/lib/data';
import { addToCart } from '@/lib/storage';
import { ShoppingCart } from 'lucide-react';

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const menuItems = foodItems.filter(f => f.restaurantId === id);

  if (!restaurant) return <div>Restaurant not found</div>;

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      restaurantId: item.restaurantId,
      image: item.image
    });
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{restaurant.rating} ⭐</Badge>
            <span>{restaurant.deliveryTime}</span>
            <span>{restaurant.cuisines.join(', ')}</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${item.price}</span>
                  <Button onClick={() => handleAddToCart(item)}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}