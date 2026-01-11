import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Search, User } from 'lucide-react';
import LoginModal from '@/components/LoginModal';
import { restaurants } from '@/lib/data';
import { getCurrentUser, setCurrentUser, getCart } from '@/lib/storage';

export default function Index() {
  const [showLogin, setShowLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUserState] = useState(getCurrentUser());
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentUserState(null);
  };

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.cuisines.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const cartCount = getCart().reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">Food Zone</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search restaurants or cuisines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" onClick={() => navigate('/cart')}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart ({cartCount})
            </Button>
            {currentUser ? (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{currentUser.name}</span>
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
              </div>
            ) : (
              <Button onClick={() => setShowLogin(true)}>Login</Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Delicious Food Delivered Fast
          </motion.h2>
          <p className="text-xl mb-8">Order from your favorite restaurants</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Popular Categories</h3>
          <div className="flex gap-4 overflow-x-auto">
            {['Pizza', 'Burger', 'Mexican', 'Italian', 'Chinese'].map(category => (
              <Button
                key={category}
                variant="outline"
                className="whitespace-nowrap"
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Restaurants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map(restaurant => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="cursor-pointer" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                  <CardContent className="p-0">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{restaurant.name}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">{restaurant.rating} ⭐</Badge>
                        <span className="text-sm text-gray-600">{restaurant.deliveryTime}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{restaurant.cuisines.join(', ')}</p>
                      <p className="text-sm text-gray-500">{restaurant.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}
