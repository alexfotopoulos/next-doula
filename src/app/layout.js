import "../../styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Roboto } from "next/font/google";
import {Metadata} from "next";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

export const metadata = {
    title: "Your Choice Doula Services",
    description: "Kat Fotopoulos is a certified and BADT trained doula who provides inclusive birth and post partum doula services in Nashville & Middle Tennessee. LGBTQIA+ supportive. Black Lives Matter. Birthing people should have reproductive justice."
}

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