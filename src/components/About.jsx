import '../assets/css/Home.css';

function About() {
    return (
        <>
            <section id="about">
                <div className="">
                    <div className="row">
                        <div className="box">
                            <h1>Apa itu Buddy</h1>
                            <p className="text-center">Buddy merupakan platform edukasi untuk membantu kalian dalam meningkatkan kesadaran
                                serta kepedulian terhadap kasus bullying di dunia pendidikan terutama di Indonesia. </p>
                            <a href="/tentangKami.html">
                                <button className="btn-read-more">Baca Selengkapnya</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About