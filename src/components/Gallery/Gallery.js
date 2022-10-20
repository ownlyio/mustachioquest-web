import './Gallery.css'

// images

export default function Gallery() {
	const vidUrl = "https://youtube.com/embed/PxbpqPG8AY0?autoplay=1&controls=0&showinfo=0&mute=1&rel=0&disablekb=1&loop=1"
    return (
        <section id="gallery" className="py-5 h-screen position-relative">
			<iframe width="560" height="315" src={vidUrl}></iframe>
            <div className="container">
				
			</div>
        </section>
    )
}