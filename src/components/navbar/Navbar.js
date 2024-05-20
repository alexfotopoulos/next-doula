"use client";

import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import NavbarContent from "./NavbarContent";
import NavbarModal from "./NavbarModal";

export default function Navbar() {
    //state to determine if navbar should show links or menu icon
    const [content, setContent] = useState();
    //state to determine if modal should be visible or hidden
    const [showModal, setShowModal] = useState(false);

    //function to show modal
    function handleShowModal() {
        setShowModal(true);
    }

    //function to hide modal
    function handleHideModal() {
        setShowModal(false);
    }

    //useEffect to determine if links or menu icon should be shown when page is loaded
    useEffect(() => {
        if (window.innerWidth > 900) {
            setContent(<NavbarContent onClick={handleHideModal} />);
        } else {
            setContent(
                <Image
                    src="/icons/menu-line.svg"
                    width={20}
                    height={20}
                    alt="menu icon"
                    className={styles.Navbar_menuIcon}
                    onClick={handleShowModal}
                />
            );
        }
    }, []);

    //useEffect to determine if links or menu icon should be shown when resizing window
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 900) {
                setContent(<NavbarContent onClick={handleHideModal} />);
            } else {
                setContent(
                    <Image
                        src="/icons/menu-line.svg"
                        width={30}
                        height={30}
                        alt="menu icon"
                        className={styles.Navbar_menuIcon}
                        onClick={handleShowModal}
                    />
                );
            }
        }
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={styles.Navbar}>
            <Link className={styles.Navbar_brand} href="/">
                {/* <Image 
                    src="/images/Logo.jpg"
                    width={50}
                    height={50}
                    alt="your choice doula services logo"
                /> */}
                Your Choice Doula Services
            </Link>
            {!showModal && content}
            {showModal && <NavbarModal onClose={handleHideModal} />}
        </nav>
    );
}
