const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-400 py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img className="w-6 h-6 md:w-8 md:h-8 rounded-lg" src="/src/assets/studying.png" />
                                <span className="text-lg md:text-xl font-semibold text-white">CIEET</span>
                            </div>
                            <p className="text-xs md:text-sm mb-2">
                                Cambridge International Education & Examination Tool
                            </p>
                            <p className="text-xs text-green-400">
                                100% Free. Always.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Product</h3>
                            <ul className="space-y-2 text-xs md:text-sm">
                                <li>Features</li>
                                <li>How It Works</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Company</h3>
                            <ul className="space-y-2 text-xs md:text-sm">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Support</h3>
                            <ul className="space-y-2 text-xs md:text-sm">
                                <li>Help Center</li>
                                <li>Contact</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-3">
                        <p>© 2026 CIEET. All rights reserved.</p>

                        <p className="text-gray-500">
                            Designed & Developed by{" "}
                            <span className="text-white font-medium hover:text-green-400 transition cursor-pointer">
                                Mohib Khan
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer