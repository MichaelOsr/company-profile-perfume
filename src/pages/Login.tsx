import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, LogIn } from 'lucide-react';
import Backendless from '../lib/backendless';
import { useNavigate } from 'react-router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
        
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const user = await Backendless.UserService.login(username, password, true); // true = stayLoggedIn
            const token = (user as { 'user-token'?: string })['user-token'];

            if (token) {
                localStorage.setItem('token', token);
            }
            navigate('/dashboard');
        } catch (error: any) {
            alert("Login Gagal: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
            
            {/* Header Area */}
            <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-600 shadow-lg rounded-xl shadow-blue-200">
                <LogIn className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-500">Please enter your details to sign in</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
                
                {/* Username Input */}
                <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                    type="text"
                    required
                    className="block w-full py-3 pl-10 pr-3 leading-5 placeholder-gray-400 transition-all bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                </div>

                {/* Password Input */}
                <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full py-3 pl-10 pr-10 leading-5 placeholder-gray-400 transition-all bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                        <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    )}
                    </button>
                </div>
                </div>
            </div>

            {/* Action Button */}
            <div>
                <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white transition-all
                    ${isLoading 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-200 hover:shadow-blue-300'
                    }`}
                >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                    'Sign In'
                )}
                </button>
            </div>
            </form>

        </div>
        </div>
    );
};