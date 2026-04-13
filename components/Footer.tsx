'use client';

export default function Footer() {
  return (
    <footer className="bg-sand-1 border-t border-sand-3 py-3">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs sm:text-sm text-ink/70">
          © {new Date().getFullYear()} Shape Shifter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
