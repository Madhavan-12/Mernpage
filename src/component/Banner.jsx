import Hooks from "../pages/Hooks";

const Banner = () => {
    return (
        <>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>
                
                {/* Content */}
                <div className="relative max-w-7xl mx-auto text-center">
                    <p className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                        Learn is Fun
                    </p>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Discover the joy of learning with interactive and engaging content
                    </p>
                    
                    {/* CTA Button */}
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-1/4 left-10 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-20 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            
            </div>
        </>
    )
}

export default Banner;