import Link from 'next/link'

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full border-t mt-auto py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/thank_youkyou"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              Developer: @thank_youkyou
            </a>
            <span>|</span>
            <Link 
              href="/terms/" 
              className="text-gray-600 hover:text-gray-900"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
          </div>
          <div className="mt-2 md:mt-0">
            © {new Date().getFullYear()} Vesting Wallet Explorer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;