import "../../styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
