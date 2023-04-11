import React from 'react';


const Layout = ({ children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-800 text-center">
            &copy; 2023 - My App. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
