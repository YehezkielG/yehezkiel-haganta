import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-4 bg-transparent sm:text-sm text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Yehezkiel Haganta. All rights reserved.</p>
        </footer>
    );
};

export default Footer;