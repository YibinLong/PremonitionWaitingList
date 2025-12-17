"use client";

export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 bg-[#070709] border-t border-[#1e1f25]/50 safe-area-inset-bottom">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <span className="text-xs sm:text-sm text-[#64727C]">
          © {new Date().getFullYear()} Premonition
        </span>
        <a
          href="https://github.com/0xAmaan/prediction-terminal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-[#64727C] hover:text-[#9AA4AD] transition-colors touch-manipulation min-h-[44px] flex items-center"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};
