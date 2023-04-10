import { FC } from "react";

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
            <div>
                <p>Copyright © 2023 - All right reserved by TCS</p>
            </div>
        </footer>
    );
}

export default Footer;