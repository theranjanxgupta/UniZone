import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCart, removeFromCart, clearCart, CartItem } from '@/lib/storage';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCart(updatedCart);
    // Save to storage
    localStorage.setItem('foodzone_cart', JSON.stringify(updatedCart));
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <Card key={item.id}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => handleRemove(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Total: ${total.toFixed(2)}</h2>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/checkout')}>Proceed to Checkout</Button>
                <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}