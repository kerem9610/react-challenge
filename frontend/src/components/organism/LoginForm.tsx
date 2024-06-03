import React, { useState } from 'react';
import { useUser } from '~context/UserContext';
import { useCreateUser } from '~hooks/useCreateUser';
import { useLoginUser } from '~hooks/useLoginUser';

const LoginForm: React.FC = () => {
    const { login } = useUser();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const { createUser } = useCreateUser();
    const [handleUserLogin, { data }] = useLoginUser();

    console.log(data);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            const { data } = await handleUserLogin({
                variables: {
                    username: formData.username,
                    password: formData.password
                }
            });

            if (data?.user) {
                login(data.user);
            }

        } else {
            const newUser = await createUser(formData.username, formData.password);

            login(newUser);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-700">
                    {isLogin ? 'Login' : 'Register'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        {isLogin ? 'Create an account' : 'Already have an account?'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
