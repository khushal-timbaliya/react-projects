import React from 'react'

export default function Main() {
    return (
        <div>
            <section className="main-section">
                <div className="content">
                    <h1>Welcome to My Awesome Website</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="image-container">
                    <img src="/path-to-your-image.jpg" alt="Main Section Image" />
                </div>
            </section>
        </div>
    )
}
