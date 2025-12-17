import React from "react";

export default function Case({ children }) {
    return (
        <div className="main-content">
            <section className="section custom-section py-4">
                {children}
            </section>
        </div>
    );
}


