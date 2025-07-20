'use client';

import { useState } from 'react';
import { 
  User, 
  Settings, 
  Eye, 
  Calendar, 
  MapPin, 
  Link, 
  Plus, 
  Edit3, 
  Trash2, 
  GripVertical,
  BookOpen,
  Film,
  Utensils,
  Heart,
  Star,
  DollarSign,
  Clock,
  Users,
  Globe,
  Briefcase,
  Plane,
  ShoppingBag,
  Music,
  Gamepad2,
  Dumbbell,
  Palette,
  Smartphone,
  FolderPlus,
  CheckCircle
} from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  meta: {
    rating?: number;
    price?: string;
    location?: string;
    type?: string;
    likes?: number;
    pages?: string;
    duration?: string;
    platform?: string;
    genre?: string;
  };
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  recommendations: Recommendation[];
}

export default function Dashboard() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'food',
      name: 'Food & Places',
      icon: <Utensils className="w-5 h-5" />,
      count: 3,
      recommendations: [
        {
          id: 'bhoomi',
          title: 'Bhoomi, Goa',
          subtitle: 'Goan Saraswat • Panaji',
          description: 'Rustic courtyard serving soulful thalis. Don\'t miss the refreshing sol kadi and authentic coastal flavors.',
          icon: <Utensils className="w-6 h-6" />,
          meta: {
            rating: 4.8,
            price: '$',
            location: 'Panaji',
            type: 'Thali',
            likes: 104
          }
        },
        {
          id: 'mtr',
          title: 'MTR, Bengaluru',
          subtitle: 'South Indian • Lalbagh',
          description: 'Iconic 1924 eatery. The crispiest dosa in town paired with thick filter coffee and legendary service.',
          icon: <Utensils className="w-6 h-6" />,
          meta: {
            rating: 4.6,
            price: '$',
            location: 'Bengaluru',
            type: 'Dosa',
            likes: 86
          }
        },
        {
          id: 'cafe-madras',
          title: 'Cafe Madras, Mumbai',
          subtitle: 'South Indian • Matunga',
          description: 'Matunga\'s beloved breakfast spot. Legendary podi idli and piping-hot rasam that feels like home.',
          icon: <Utensils className="w-6 h-6" />,
          meta: {
            rating: 4.7,
            price: '$',
            location: 'Mumbai',
            type: 'Idli',
            likes: 73
          }
        }
      ]
    },
    {
      id: 'books',
      name: 'Books',
      icon: <BookOpen className="w-5 h-5" />,
      count: 2,
      recommendations: [
        {
          id: 'naval-almanack',
          title: 'The Almanack of Naval Ravikant',
          subtitle: 'Eric Jorgenson • 2020',
          description: 'Concise wisdom on wealth & happiness. My reset switch when priorities blur and life gets overwhelming.',
          icon: <BookOpen className="w-6 h-6" />,
          meta: {
            rating: 4.5,
            type: 'Personal Growth',
            pages: '242 pages',
            platform: 'Audiobook',
            likes: 128
          }
        },
        {
          id: 'mans-search',
          title: 'Man\'s Search for Meaning',
          subtitle: 'Viktor Frankl • 1946',
          description: 'A profound reminder of purpose, resilience, and the human spirit. Essential reading for perspective on life.',
          icon: <BookOpen className="w-6 h-6" />,
          meta: {
            rating: 4.9,
            type: 'Psychology',
            pages: '165 pages',
            platform: 'Classic',
            likes: 156
          }
        }
      ]
    },
    {
      id: 'movies',
      name: 'Movies & Shows',
      icon: <Film className="w-5 h-5" />,
      count: 1,
      recommendations: [
        {
          id: 'social-dilemma',
          title: 'The Social Dilemma',
          subtitle: 'Netflix Documentary • 2020',
          description: 'Eye-opening look at social media\'s impact. Essential viewing for anyone in tech or concerned about digital wellness.',
          icon: <Film className="w-6 h-6" />,
          meta: {
            rating: 4.7,
            type: 'Documentary',
            duration: '94 min',
            platform: 'Netflix',
            likes: 92
          }
        }
      ]
    }
  ]);

  const predefinedCategories = [
    { icon: <Briefcase className="w-5 h-5" />, name: 'Apps & Tools' },
    { icon: <Plane className="w-5 h-5" />, name: 'Travel' },
    { icon: <ShoppingBag className="w-5 h-5" />, name: 'Products' },
    { icon: <Music className="w-5 h-5" />, name: 'Music' },
    { icon: <Gamepad2 className="w-5 h-5" />, name: 'Games' },
    { icon: <Dumbbell className="w-5 h-5" />, name: 'Fitness' },
    { icon: <Palette className="w-5 h-5" />, name: 'Art & Design' },
    { icon: <Smartphone className="w-5 h-5" />, name: 'Tech' }
  ];

  const renderMetaTags = (meta: Recommendation['meta']) => {
    const tags = [];
    if (meta.rating) tags.push(
      <span key="rating" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-lg text-xs font-semibold border border-amber-500/20">
        <Star className="w-3 h-3 fill-current" />
        {meta.rating}
      </span>
    );
    if (meta.price) tags.push(
      <span key="price" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 rounded-lg text-xs font-semibold border border-green-500/20">
        <DollarSign className="w-3 h-3" />
        {meta.price}
      </span>
    );
    if (meta.location) tags.push(
      <span key="location" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-semibold border border-blue-500/20">
        <MapPin className="w-3 h-3" />
        {meta.location}
      </span>
    );
    if (meta.type) tags.push(
      <span key="type" className="px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-xs font-semibold border border-purple-500/20">
        {meta.type}
      </span>
    );
    if (meta.likes) tags.push(
      <span key="likes" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/10 text-red-400 rounded-lg text-xs font-semibold border border-red-500/20">
        <Heart className="w-3 h-3 fill-current" />
        {meta.likes}
      </span>
    );
    if (meta.pages) tags.push(
      <span key="pages" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-500/10 text-slate-400 rounded-lg text-xs font-semibold border border-slate-500/20">
        <BookOpen className="w-3 h-3" />
        {meta.pages}
      </span>
    );
    if (meta.duration) tags.push(
      <span key="duration" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-500/10 text-slate-400 rounded-lg text-xs font-semibold border border-slate-500/20">
        <Clock className="w-3 h-3" />
        {meta.duration}
      </span>
    );
    if (meta.platform) tags.push(
      <span key="platform" className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-semibold border border-indigo-500/20">
        {meta.platform}
      </span>
    );
    if (meta.genre) tags.push(
      <span key="genre" className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-semibold border border-cyan-500/20">
        {meta.genre}
      </span>
    );
    return tags;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Profile Header */}
        <div className="relative mb-8 sm:mb-12 p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-xl shadow-blue-500/25 border border-white/20">
                    R
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center text-white cursor-pointer border-2 border-slate-900 transition-all duration-200 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 shadow-md shadow-black/20">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                    Rinkesh Gorasia
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                  </h1>
                  <p className="text-slate-300 text-base sm:text-lg mb-4 max-w-2xl leading-relaxed">
                    Exploring new things // Build CareerLeap & Savior (acquired by Zocdoc)
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 font-medium text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Joined 02 Mar 2022</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 font-medium text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Bangalore Urban, India</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 font-medium text-sm">
                      <Link className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">rinkeshgorasia.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-slate-700 to-slate-600 text-white border border-white/20 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-500 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 shadow-md shadow-black/10">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 shadow-lg shadow-blue-500/20 border border-white/20">
                  <Eye className="w-4 h-4" />
                  View Public Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 xl:gap-12 items-start">
          {/* Recommendations Section */}
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category.id} className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <button className="cursor-grab text-slate-400 p-2 rounded-lg transition-all duration-200 hover:text-blue-400 hover:bg-blue-500/10 select-none active:cursor-grabbing">
                        <GripVertical className="w-5 h-5" />
                      </button>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 border border-white/20">
                          {category.icon}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                          {category.name}
                        </h2>
                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-2.5 py-1 rounded-xl text-xs font-bold shadow-lg shadow-blue-500/25 min-w-6 text-center">
                          {category.count}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-br from-slate-700 to-slate-600 border border-white/10 rounded-lg text-white cursor-pointer text-sm font-semibold transition-all duration-200 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 shadow-sm shadow-black/10">
                        <Plus className="w-3.5 h-3.5" />
                        Add
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-br from-slate-700 to-slate-600 border border-white/10 rounded-lg text-white cursor-pointer text-sm font-semibold transition-all duration-200 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 shadow-sm shadow-black/10">
                        <Settings className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.recommendations.map((recommendation) => (
                      <div key={recommendation.id} className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg shadow-black/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-2 z-20">
                          <button className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-600 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 cursor-pointer text-sm transition-all duration-200 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:border-transparent hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 shadow-sm shadow-black/10">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-600 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 cursor-pointer text-sm transition-all duration-200 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 hover:border-transparent hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 shadow-sm shadow-black/10">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex items-start gap-4 mb-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/25 border border-white/20">
                            {recommendation.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold tracking-tight text-white mb-1 leading-tight break-words">
                              {recommendation.title}
                            </h3>
                            <p className="text-slate-300 text-sm font-medium mb-3 leading-relaxed">
                              {recommendation.subtitle}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {recommendation.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {renderMetaTags(recommendation.meta)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add New Recommendation Card */}
                    <div className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border-2 border-dashed border-white/20 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 relative overflow-hidden min-h-[200px] flex flex-col items-center justify-center hover:border-blue-500/40 hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-700/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20 relative z-10 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                        <Plus className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-semibold tracking-tight text-white mb-2 relative z-10">
                        Add {category.name.slice(0, -1)} Recommendation
                      </h3>
                      <p className="text-slate-400 text-sm relative z-10">
                        Share a {category.name.slice(0, -1).toLowerCase()} you love
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 xl:sticky xl:top-8 h-fit">
            {/* Current Categories */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2.5 mb-6">
                <FolderPlus className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold tracking-tight text-white">My Categories</h3>
              </div>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex justify-between items-center p-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-200 cursor-pointer hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-700/50 hover:translate-x-1 hover:shadow-md hover:shadow-black/10 shadow-sm shadow-black/5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-500/25 border border-white/20">
                        {category.icon}
                      </div>
                      <span className="text-white font-semibold text-sm tracking-tight truncate">{category.name}</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-2 py-0.5 rounded-xl text-xs font-bold shadow-md shadow-blue-500/25 min-w-5 text-center">
                      {category.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Categories */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-2.5 mb-6">
                <Plus className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold tracking-tight text-white">Add Category</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {predefinedCategories.map((cat, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center cursor-pointer transition-all duration-200 relative overflow-hidden shadow-sm shadow-black/5 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mx-auto mb-3 relative z-10 shadow-md shadow-blue-500/25 border border-white/20">
                      {cat.icon}
                    </div>
                    <span className="text-white font-semibold text-xs tracking-tight relative z-10 leading-tight block">{cat.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border-2 border-dashed border-white/20 rounded-xl p-5 text-center cursor-pointer transition-all duration-200 hover:border-blue-500/40 hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-slate-700/50 hover:shadow-lg hover:shadow-blue-500/20 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-3 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                  <FolderPlus className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-sm tracking-tight mb-1">Custom Category</h4>
                <p className="text-slate-400 text-xs">Create your own category</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 