import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-violet-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-violet-700 flex items-center gap-2">
                            <span className="bg-violet-600 text-white p-1 rounded-lg">
                            </span>
                            Taro
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            We help you become aware of your future. Join us on this journey of self-discovery and uncover the secrets that lie ahead.
                        </p>
                        {/*переделать */}
                        <div className="flex space-x-4 pt-2">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((item) => (
                                <a key={item} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-100 text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300">
                                    <span className="sr-only">{item}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            ))}
                        {/*--- */}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-violet-700 font-semibold mb-4 uppercase tracking-wider text-sm">Company</h3>
                        <ul className="space-y-3">
                            {['About us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-violet-700 font-semibold mb-4 uppercase tracking-wider text-sm">Support</h3>
                        <ul className="space-y-3">
                            {['Report a problem', 'Contacts'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-violet-700 font-semibold mb-4 uppercase tracking-wider text-sm">Subscription</h3>
                        <p className="text-gray-700 text-sm mb-4">Stay up to date with the latest news and updates.</p>
                        <form className="flex flex-col gap-3">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="w-full px-4 py-2 rounded-lg bg-white border border-violet-100 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none text-gray-700 placeholder-gray-400 transition-all"
                            />
                            <button 
                                type="button"
                                className="w-full px-4 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 active:bg-violet-800 transition-colors duration-300 shadow-md shadow-violet-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-violet-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-700">
                        &copy; {new Date().getFullYear()} Tarot. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;