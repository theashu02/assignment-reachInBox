export default function Footer() {
  return (
    <footer className="bg-gray-900 flex justify-center items-center text-xs py-2 fixed inset-x-0 bottom-0 h-10 text-gray-400">
      <span>© {new Date().getFullYear()} ReachInbox. All rights reserved.</span>
    </footer>
  );
}
