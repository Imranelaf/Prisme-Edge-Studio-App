import Nav from "@/components/Nav";

export const metadata = {
    title: "To-do List",
    description: "Reach your goal by completing tasks."
};

const RootLayout = ({ children }) => (
    <html lang='en'>
        <body className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
            <Nav />
            {children}
        </body>
    </html>
);

export default RootLayout;

