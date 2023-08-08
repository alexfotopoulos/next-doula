import "../../styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={roboto.style}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
