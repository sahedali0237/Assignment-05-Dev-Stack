import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 px-6 font-sans text-slate-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left mb-10 md:mb-0 md:w-1/3 pt-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-linear-to-tr from-purple-500 to-pink-500 text-white font-bold text-sm py-1.5 px-2 rounded-lg leading-none">
                DS
              </div>
              <div className="text-2xl font-bold text-gray-900 tracking-tight">
                Dev <span className="text-pink-500">Stack</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed mb-6 max-w-xs md:max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
              <a href="https://github.com/sahedali0237" className="hover:text-gray-900 transition-colors">GitHub</a>
              <span className="md:hidden text-gray-400">&bull;</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
              <span className="md:hidden text-gray-400">&bull;</span>
              <a href="https://www.linkedin.com/in/sahed-ali-2102b4418/" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:flex gap-16 md:w-2/3 md:justify-end">
            <div>
              <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase mb-5">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-xs tracking-wider uppercase mb-5">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 mb-6" />

        <div className="flex justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;